import { selectIsLoggedIn } from "@app/store/slices/userSlice";
import {
  Suspense,
  lazy,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import avatar56752104 from "@assets/avatars/gh-56752104.jpg";
import avatar71691473 from "@assets/avatars/gh-71691473.jpg";
import avatar94097778 from "@assets/avatars/gh-94097778.jpg";
import avatar72697074 from "@assets/avatars/gh-72697074.jpg";
import { Button, Navbar } from "@components";

// Still lazy, though it no longer has to be: HeroScene used to be a
// three.js/@react-three/fiber canvas (~230KB gzipped, and routesConfig.tsx
// doesn't route-split most pages, so an eager import put that on every
// route). It's pure CSS now — see HeroScene.tsx for why the canvas had to
// go — so this is just a small decorative layer kept off the critical path.
// Suspense fallback is `null`: the layer is purely decorative, so "briefly
// absent" is the correct loading state, not a spinner.
const HeroScene = lazy(() => import("./HeroScene"));

/** The marketing hero rendered by `Home.tsx`. See SPEC.md. */
const Landing = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  // Measured, not guessed — see the render return below for why this
  // replaced the old shared-flex-column trick.
  const [navHeight, setNavHeight] = useState(0);
  // Drives Navbar's own "Sign Up" visibility (see the ScrollTrigger below
  // and Navbar.tsx's `hideSignUpForHeroCta` prop) — starts `true` since the
  // hero CTA is on screen at initial load on any realistic viewport height,
  // so there's nothing to flash before ScrollTrigger's first evaluation.
  const [heroCtaVisible, setHeroCtaVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navbar's real rendered height, fed into the hero's `min-height` below
  // (`100dvh - navHeight`) — see the render return for why this replaced
  // the old "Navbar and hero share one flex column" trick. `useLayoutEffect`
  // for the first measurement so it lands before paint (no flash from 0 to
  // the real value); `ResizeObserver` after that for anything which
  // changes it post-mount without a `windowWidth` change of its own — the
  // nav wrapping its link row onto a second line at an in-between width, or
  // a webfont swap nudging its line-height once it loads.
  useLayoutEffect(() => {
    const el = navRef.current;
    if (!el) return;

    setNavHeight(el.getBoundingClientRect().height);

    const observer = new ResizeObserver(([entry]) => {
      setNavHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Entrance: the headline/paragraph/CTA fade and settle in on mount, then
  // the whole block drifts up and fades slightly as the visitor scrolls
  // past it — the ScrollTrigger `scrub` ties that second part directly to
  // scroll position, which is what actually tracks Lenis's eased scroll
  // (see SmoothScroll.tsx) rather than the raw native one. Both are skipped
  // under prefers-reduced-motion, in favor of just showing the final state.
  useGSAP(
    () => {
      const reveal = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduced) {
        gsap.set(reveal, { opacity: 1, y: 0 });
        return;
      }

      gsap.set(reveal, { opacity: 0, y: 22 });
      gsap.to(reveal, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.1,
      });

      gsap.to(heroRef.current, {
        yPercent: 10,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Navbar carries its own, much smaller "Sign Up" — redundant while
      // this row is anywhere on screen. `onToggle`'s `self.isActive` is
      // true for as long as the trigger is anywhere between fully entering
      // from the bottom and fully leaving the top, i.e. "on screen at
      // all", which is what we want here (not the scrubbed/eased position
      // the parallax tween above uses).
      ScrollTrigger.create({
        trigger: ctaRowRef.current,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => setHeroCtaVisible(self.isActive),
      });
    },
    { scope: heroRef, dependencies: [windowWidth] },
  );

  return (
    // **September 2026: Navbar moved out of the hero's flex column.**
    // It used to share one `flex min-h-dvh flex-col` box with the hero
    // (Navbar a plain flow item, hero `flex-1` filling whatever was left) —
    // that was what let the hero fill exactly "the viewport minus the
    // navbar" with no hardcoded guess (see the removed `min-h-[95dvh]`
    // history below). But sharing that box came at a real cost that went
    // unnoticed until the nav was actually made to stick (see
    // `Navbar.tsx`): `min-h-dvh` caps that box at exactly one viewport
    // tall, and `position: sticky` can never stick past the edge of its
    // own containing block — so the instant the page scrolled past the
    // first screen, Navbar's containing block had already scrolled fully
    // out of view, and the "stuck" nav scrolled away with it. Confirmed
    // live: `nav`'s `getBoundingClientRect().top` went negative past
    // exactly one `dvh` of scroll. `/organizations` and `/events` never
    // had this bug — neither wraps `<Navbar />` in any height-constrained
    // ancestor, it's a plain top-level sibling there.
    //
    // Fixed by giving Navbar back that plain, unconstrained position —
    // still the page's first element, just no longer sharing a box with
    // the hero — and replacing the flex-1 trick with the same result
    // computed directly: `navHeight` (measured via `navRef` above, real
    // DOM height, not guessed) subtracted from `100dvh` as the hero's own
    // `min-height`. Same "no guessing" property the flex-1 version had
    // (still not the flat-percentage `min-h-[95dvh]` this was fixed from
    // originally), just without requiring the two elements to share a
    // containing block to get there.
    //
    // **No wrapper `<div>` around `<Navbar />` either** — an earlier pass
    // of this fix added one (to hold `navRef`), which reintroduced the
    // exact same class of bug it was fixing, just one level down: a sticky
    // element's containing block is its immediate parent, and a wrapper
    // that auto-sizes to exactly `<nav>`'s own height gives sticky zero
    // room to move within — confirmed live, an identical sticky probe div
    // stuck correctly as a bare child of `.app` (2000px+ tall) and failed
    // identically to this bug the moment it was wrapped in a tightly
    // auto-sized div instead. `Navbar` now takes `ref` via `forwardRef`
    // (see `Navbar.tsx`) specifically so `navRef` can attach straight to
    // the real `<nav>` DOM node, keeping it a bare top-level element here —
    // exactly how `/organizations` and `/events` already render it.
    <>
      <Navbar ref={navRef} hideSignUpForHeroCta={heroCtaVisible} />
      <div
        ref={heroRef}
        style={{ minHeight: `calc(100dvh - ${navHeight}px)` }}
        className="relative container flex flex-col items-center justify-center overflow-hidden max-500px:items-start max-500px:px-9 max-500px:pt-0"
      >
        <Suspense fallback={null}>
          <HeroScene className="pointer-events-none [mask-image:radial-gradient(ellipse_80%_75%_at_50%_40%,black_60%,transparent_100%)]" />
        </Suspense>

        {/* items-center centers each child as its own box on desktop
            (by design - the h1 lines are shorter than the 55%-wide
            paragraph, and centering each independently is what makes
            them read as a stacked, centered block rather than a
            block-left-aligned-inside-a-centered-column). On mobile that
            same behavior was the bug: text flipped to text-start, but
            the h1 (no w-full) still shrank to its own content width and
            got centered as a box, while the paragraph/CTA row (both
            w-full) sat flush against the true left edge - two different
            left edges on screen. max-500px:items-start fixes the layout
            itself instead of just the text-align, and w-full below on
            the h1 makes it span the same width as everything else so
            text-start actually means "the same left edge". */}
        <div className="z-1 flex flex-col items-center justify-center max-500px:items-start">
          {windowWidth > 430 ? (
            <>
              <h1
                data-hero-reveal
                className="leading-[1.05] z-3 m-0 text-center font-outfit text-6xl font-semibold tracking-tight text-brand-secondary max-500px:w-full max-500px:text-start max-500px:text-[2.7rem]"
              >
                We connect NGOs,
              </h1>
              <h1
                data-hero-reveal
                className="leading-[1.05] z-3 m-0 text-center font-outfit text-6xl font-semibold tracking-tight text-brand-secondary max-500px:w-full max-500px:text-start max-500px:text-[2.7rem]"
              >
                Charities and <span className="text-brand">you.</span>
              </h1>
            </>
          ) : (
            <h1
              data-hero-reveal
              className="leading-[1.05] z-3 m-0 text-center font-outfit text-6xl font-semibold tracking-tight text-brand-secondary max-500px:w-full max-500px:text-start max-500px:text-[2.7rem]"
            >
              We connect NGOs, charities and{" "}
              <span className="text-brand">you.</span>
            </h1>
          )}

          {windowWidth > 430 ? (
            <p
              data-hero-reveal
              className="z-3 mx-auto mt-8 w-[55%] text-center font-poppins text-lg leading-7 tracking-[0.2px] text-ink/70 max-500px:w-full max-500px:text-start max-500px:text-body-lg"
            >
              Welcome to <span className="font-medium">KarmaCircle</span>, a
              platform to connect and support NGOs, charities and you to build a
              better tomorrow.
            </p>
          ) : (
            <p
              data-hero-reveal
              className="z-3 mx-auto mt-8 w-[55%] text-center font-poppins text-lg leading-7 tracking-[0.2px] text-ink/70 max-500px:w-full max-500px:text-start max-500px:text-body-lg"
            >
              A platform for NGOs, charities, organizations and you to
              collaborate, grow and build a better tomorrow.
            </p>
          )}

          <div
            ref={ctaRowRef}
            data-hero-reveal
            className="mt-14 flex items-center justify-center gap-[0.8rem] max-500px:w-full max-500px:flex-col-reverse max-500px:items-start max-500px:justify-start"
          >
            {isLoggedIn ? (
              <Button
                to="/organizations"
                className="z-3 mx-auto flex w-auto items-center justify-around gap-2.5 rounded-lg border-none px-6 py-3 font-poppins text-body-lg font-medium shadow-[0_8px_24px_-10px_var(--color-brand)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_var(--color-brand)] max-500px:mx-0 max-500px:w-auto"
              >
                <span className="text-lg">Explore our organizations</span>
              </Button>
            ) : (
              <Button
                to="/auth/signup"
                className="z-3 mx-auto flex w-auto items-center justify-around gap-2.5 rounded-lg border-none px-6 py-3 font-poppins text-body-lg font-medium shadow-[0_8px_24px_-10px_var(--color-brand)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_var(--color-brand)] max-500px:mx-0 max-500px:w-auto"
              >
                <span className="text-lg">Sign up Today !</span>
              </Button>
            )}

            <div className="h-11.5 border-l-[3px] border-border-muted max-500px:hidden"></div>

            <div className="flex flex-col">
              <div className="z-3 flex items-center gap-0">
                <img
                  src={avatar56752104}
                  alt=""
                  className="z-4 aspect-square w-7.5 rounded-full object-cover"
                />
                <img
                  src={avatar71691473}
                  alt=""
                  className="z-3 -ml-2.5 aspect-square w-7.5 rounded-full object-cover"
                />
                <img
                  src={avatar94097778}
                  alt=""
                  className="z-2 -ml-2.5 aspect-square w-7.5 rounded-full object-cover"
                />
                <img
                  src={avatar72697074}
                  alt=""
                  className="z-1 -ml-2.5 aspect-square w-7.5 rounded-full object-cover"
                />
              </div>
              <span className="z-3 font-poppins text-body font-medium text-ink/70">
                Trusted by 300+ users.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
