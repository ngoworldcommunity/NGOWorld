import profileImage from "@assets/pictures/Navbar/profilePlaceholderImage.png";
import { forwardRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { resetUserData, selectUser } from "@app/store/slices/userSlice";
import type { RootState } from "@app/store/store";
import { Logout } from "@services/KarmaCircleApi";
import { showErrorToast, showSuccessToast } from "@utils/Toasts";
import Button from "@components/buttons/Button";
import { useMyOrganization } from "@features/organizations/hooks/useMyOrganization";
import { resumeSetupPath } from "@features/organizations/utils/organizationSetupForm";

// No "Home" entry — the logo already links there (standard marketing-site
// convention: a persistent top nav lists the *other* destinations, not the
// page the logo itself points to).
const Links = [
  {
    name: "Organizations",
    link: "/organizations",
  },
  {
    name: "Events",
    link: "/events",
  },
];

type NavbarProps = {
  // Hides the navbar's own "Sign Up" while a bigger, redundant CTA
  // elsewhere on the page is on screen (Landing.tsx passes this, driven by
  // its own ScrollTrigger — see that file). Every other page renders
  // `<Navbar />` with no props, so this defaults to `false` (always show)
  // there, which is the correct behavior on pages with no such CTA.
  hideSignUpForHeroCta?: boolean;
};

// `forwardRef` exists only so `Landing.tsx` can measure this component's
// real rendered height (`<nav>` itself, not a wrapper `Landing.tsx` would
// otherwise need around it — see that file for why a wrapper div is
// actually wrong here, not just unnecessary: a `position: sticky` element's
// containing block is its immediate parent, and a wrapper that auto-fits
// to exactly `<nav>`'s own height gives it zero room to stick within,
// which silently defeats sticky entirely rather than erroring). Every
// other page still renders `<Navbar />` with no ref, which forwardRef
// leaves unaffected.
const Navbar = forwardRef<HTMLElement, NavbarProps>(function Navbar(
  { hideSignUpForHeroCta = false },
  ref,
) {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const user = useSelector(selectUser);

  // Sticky is a conversion tool, not a blanket "nav should always float"
  // rule — direct feedback (September 2026): sticky read as right on `/`
  // (the hero's "Sign Up" needs to stay reachable the whole scroll) and on
  // `/organizations`/`/events` too, but *only* for a visitor who hasn't
  // signed up yet — once logged in, there's no "Sign Up" for a sticky nav
  // to keep prompting, so it just eats scroll real estate for the rest of
  // the page. Home stays sticky unconditionally (its hero CTA row makes
  // the same prompt-to-sign-up case `hideSignUpForHeroCta` above already
  // encodes); every other route only stickies while logged out. Not a
  // prop — every page renders `<Navbar />` the same way, and this is
  // meant to read as one consistent rule, not a per-page opt-in.
  const isHome = location.pathname === "/";
  const isSticky = isHome || !isLoggedIn;

  // A draft organization needs one always-visible way back into setup —
  // it opted out of finishing it, and nothing else on screen tells it that
  // it is still invisible. Fetches nothing for anyone else.
  const { organization, isDraft } = useMyOrganization();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  async function handleLogout() {
    const data = await Logout();

    // @ts-expect-error — pre-existing loose access into `Logout()`'s
    // response shape (catch branch returns the raw caught error, not
    // `error.response` — see KarmaCircleApi.ts/SPEC.md); preserved as-is for
    // a types-only pass.
    if (data?.status === 200) {
      // @ts-expect-error — see above.
      showSuccessToast(data?.data?.message);
      navigate("/");
      dispatch(resetUserData());
      localStorage.clear();
      document
        .querySelector(".nav_dropdown")
        ?.classList.remove("nav_dropdown_visible");
    } else {
      // @ts-expect-error — see above.
      showErrorToast(data?.message);
    }
  }

  return (
    // Sticky + glass live on `<nav>` itself, not the `max-w-6xl` div inside
    // it — `<nav>` is the full-viewport-width block, so the blur/tint/hairline
    // span edge to edge while the link row still lines up with every other
    // page's own `max-w-6xl` content (see layout-navigation.md). The inner
    // div keeps `relative`, which it also needs as `.nav_dropdown`'s
    // positioning root (that `absolute`, unlike the mobile sheet's `fixed`,
    // resolves against the nearest positioned ancestor — it has to stay
    // `<nav>`'s child, not `<nav>` itself, or the dropdown would anchor to
    // the full-width bar instead of the centered content edge it sits at
    // today).
    //
    // `top-0` is not decorative: Tailwind's `sticky` utility only sets
    // `position: sticky` — CSS requires an inset value (`top`/`bottom`/
    // `left`/`right`) before an element can actually stick, so without it
    // this rendered as plain `position: static` the entire time (confirmed
    // absent from the computed style; every other `sticky` in the app —
    // `SplitPanelLayout`'s aside (`sticky top-0`), `DetailedEvent.tsx`'s
    // join-panel sidebar (`lg:sticky lg:top-24`) — already pairs it with
    // `top-*`, this file was the outlier). Lenis drives the real `window`
    // scroll (`root: true`, see `SmoothScroll.tsx`), so no wrapper
    // `overflow` is fighting it once `top-0` is present. Both classes are
    // now conditional on `isSticky` (computed above) rather than always
    // on — see that computation for the actual per-page/per-auth rule.
    //
    // **Material, real refraction (September 2026, supersedes the first
    // pass below).** The first cut of this reused `EventMobileActionBar`'s
    // recipe verbatim — `backdrop-blur` + `backdrop-saturate` over a
    // translucent white, nothing else — and on review read as flat
    // "glassmorphism": a frosted, tinted pane, not glass with any actual
    // thickness or bend to it. Real (Apple "Liquid Glass") refraction comes
    // from displacing the pixels behind the material, not just blurring
    // them, so `<nav>` now sits over an SVG `feDisplacementMap` filter
    // (`#nav-glass-refraction`, defined just below, hidden) fed by a
    // heavily-blurred `feTurbulence` noise field — the noise alone reads as
    // static/water; blurring it first (`feGaussianBlur` on the `noise`
    // result, *before* it drives the displacement) is what turns that into
    // the smooth, large-scale bend real glass has. Verified live against
    // this page's own busiest backdrop (`DrivesRail`'s photo cards) —
    // their top edges visibly warp passing under the bar, which a flat
    // blur can never produce since `backdrop-filter` blur has no notion of
    // "bend."
    //
    // `style`, not a Tailwind utility, carries `backdropFilter`: Tailwind
    // v4's `backdrop-blur-*`/`backdrop-saturate-*` utilities compose into
    // one shared property behind the scenes, which doesn't leave a clean
    // way to splice in a `url(#id)` filter reference ahead of them — same
    // multi-value `backdrop-filter` grammar, just written directly since
    // this is the one place in the app that needs the full grammar. Every
    // other visual property (border, tint, shadow) stays a plain
    // className, unchanged from the first pass.
    //
    // **Degrades safely.** Safari and older Firefox don't resolve an SVG
    // filter referenced from `backdrop-filter` — confirmed as a live,
    // current gap in every OSS "Liquid Glass" implementation checked
    // while researching this (rdev/liquid-glass-react's own README flags
    // the identical limitation), not something this file's approach
    // introduces. Per the CSS Filter Effects spec, an unresolvable filter
    // *function* in a list is dropped, not the whole property — so those
    // browsers still render the `blur`/`saturate` behind it, same result
    // as the first pass; only the extra bend is Chromium/Blink-only today.
    <>
      {/* Hidden — `id` only, referenced by `<nav>`'s own `backdropFilter`
          below. `width`/`height: 0` plus `overflow: hidden` keeps it from
          taking any layout space or painting anything itself; SVG `filter`
          defs render nothing on their own regardless. */}
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        <defs>
          <filter
            id="nav-glass-refraction"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.025"
              numOctaves={2}
              seed={7}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation={6} result="smoothNoise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="smoothNoise"
              scale={12}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <nav
        ref={ref}
        style={{
          backdropFilter: "url(#nav-glass-refraction) blur(16px) saturate(1.7)",
        }}
        className={`z-99 border-b border-white/40 bg-white/55 shadow-[0_20px_40px_-30px_color-mix(in_srgb,var(--color-brand-secondary)_45%,transparent),inset_0_1px_0_0_rgba(255,255,255,0.65)] ${isSticky ? "sticky top-0" : ""}`}
      >
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-9 py-[0.8rem] sm:px-10 lg:px-12">
          <Link
            to={"/"}
            className="group z-10 flex items-center gap-2 no-underline"
          >
            {/* The dot is the app's one recurring mark (it reappears in
              OpenSource.tsx's "Open source" badge). It grows on hover of the
              whole logo, not of itself — a 8px hit target isn't a hover
              affordance, the wordmark next to it is. */}
            <span
              aria-hidden="true"
              className="inline-block size-2 rounded-full bg-brand transition-transform duration-300 ease-out group-hover:scale-125 motion-reduce:transition-none motion-reduce:group-hover:transform-none"
            />
            <span className="font-outfit text-xl leading-none font-medium tracking-tight text-brand-secondary transition-colors duration-300 group-hover:text-brand">
              KarmaCircle
            </span>
          </Link>

          <div className="hidden items-center gap-8 min-[900px]:flex">
            {/* No active-route underline: that's an app-internal-tab
              pattern, not a marketing-nav one — a visitor already knows
              which page they're on from the page itself. Hover gets a
              colour shift plus a rule that wipes in from the left and, on
              leaving, continues out to the right (`origin-left` on hover,
              `origin-right` at rest) rather than retracting the way it
              came — the directional version reads as a swipe instead of a
              rubber band. */}
            <div className="z-1 flex items-center gap-7">
              {Links.map((item, index) => (
                <Link
                  key={index}
                  className="relative font-outfit text-body-lg leading-none font-normal text-ink/65 no-underline transition-colors duration-200 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:text-brand-secondary hover:after:origin-left hover:after:scale-x-100 motion-reduce:after:transition-none"
                  to={item.link}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {isLoggedIn ? (
              <p
                onClick={() => {
                  document
                    .querySelector(".nav_dropdown")
                    ?.classList.toggle("nav_dropdown_visible");
                }}
                className="group m-0 flex cursor-pointer items-center justify-center font-outfit text-body-lg leading-none font-normal text-ink/65 no-underline transition-colors duration-200 hover:text-brand-secondary"
              >
                Profile{" "}
                <RxCaretDown className="size-6.25 transition-transform duration-300 ease-out group-hover:translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:transform-none" />
              </p>
            ) : (
              <Button
                to="/auth/signup"
                className={`z-3 flex w-auto items-center justify-around gap-2.5 rounded-5px border-none px-5 py-2 font-outfit text-base font-normal not-italic transition-all duration-300 ease-in-out hover:shadow-[0px_0px_1.17px_0px_var(--color-brand),0px_0px_8.191px_0px_var(--color-brand),0px_0px_28.084px_0px_var(--color-brand)] motion-safe:hover:-translate-y-0.5 ${hideSignUpForHeroCta ? "pointer-events-none opacity-0" : "opacity-100"}`}
              >
                <span>Sign Up</span>
              </Button>
            )}
          </div>

          {/* Caught mid-mobile-QA (September 2026, unrelated to the sticky/
              glass work above): this trigger and the desktop link row two
              blocks up used mismatched breakpoints — the row only appears
              at `min-[900px]`, but this used to switch on at `max-430px`,
              not `max-899px`. Between 431px and 899px (a real width —
              portrait tablets, several phones in landscape) neither one
              rendered: no links, no hamburger, no way to navigate or sign
              up at all. `docs/specs/layout-navigation.md` already
              documented the intent correctly ("below 900px shows a
              hamburger icon"); the code just didn't match it. Fixed by
              matching this to the same 900px line the row above already
              uses. */}
          {!isNavbarOpen &&
            (isLoggedIn ? (
              <img
                src={(user?.profileImage as string | undefined) || profileImage}
                alt=""
                role="button"
                tabIndex={0}
                aria-label="Open account menu"
                aria-haspopup="true"
                aria-expanded={isNavbarOpen}
                className="hidden size-7.5 cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[899px]:block"
                onClick={() => {
                  toggleNavbar();
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleNavbar();
                  }
                }}
              />
            ) : (
              <GiHamburgerMenu
                role="button"
                tabIndex={0}
                aria-label="Open menu"
                aria-haspopup="true"
                aria-expanded={isNavbarOpen}
                className="hidden size-7.5 cursor-pointer text-heading focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[899px]:block"
                onClick={() => {
                  toggleNavbar();
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleNavbar();
                  }
                }}
              />
            ))}

          {isNavbarOpen && (
            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/[0.867] transition-all duration-300 ease-in-out">
              <div className="absolute top-[20%] flex w-[80vw] flex-wrap items-center justify-center gap-7.5 rounded-xl bg-white p-4 pt-8 shadow-[1px_3px_80px_rgba(255,255,255,0.346)] motion-safe:animate-pop-in">
                <RxCross2
                  role="button"
                  tabIndex={0}
                  aria-label="Close menu"
                  className="absolute top-2.5 right-2.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  onClick={() => {
                    toggleNavbar();
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      toggleNavbar();
                    }
                  }}
                />

                {Links.map((item, index) => (
                  <Link
                    key={index}
                    className="m-0 flex cursor-pointer items-center justify-center font-outfit text-body-lg leading-none font-normal text-ink no-underline transition-colors duration-200 hover:text-brand motion-safe:active:scale-97"
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                ))}

                {isLoggedIn ? (
                  <>
                    {isDraft && organization && (
                      <div>
                        <Link
                          className="m-0 flex cursor-pointer items-center justify-center font-outfit text-body-lg leading-none font-medium text-brand no-underline"
                          to={resumeSetupPath(organization.missingFields)}
                          onClick={() => setIsNavbarOpen(false)}
                        >
                          Finish setting up
                        </Link>
                      </div>
                    )}
                    <div>
                      {/* Always "Dashboard" — it always points to /dashboard,
                        regardless of account type. "Your Profile" (below, in
                        the desktop dropdown) is the separate, distinctly
                        named link to /user/:handle; the two used to share
                        the ambiguous label "Profile" for individual
                        accounts. See docs/specs/layout-navigation.md. */}
                      <Link
                        className="m-0 flex cursor-pointer items-center justify-center font-outfit text-body-lg leading-none font-medium text-black no-underline"
                        to={"/dashboard"}
                      >
                        Dashboard
                      </Link>
                    </div>
                    <div>
                      <p
                        className="m-0 flex cursor-pointer items-center justify-center font-outfit text-body-lg leading-none font-medium text-black no-underline"
                        onClick={() => {
                          handleLogout();
                          setIsNavbarOpen(false);
                        }}
                      >
                        Logout
                      </p>
                    </div>
                  </>
                ) : (
                  <Button
                    to={"/auth/signup"}
                    className="flex w-auto items-center gap-1.25 px-4 py-2 font-outfit text-body-lg no-underline"
                  >
                    <span>Sign Up</span>
                    <FaChevronRight />
                  </Button>
                )}
              </div>
            </div>
          )}

          <div className="nav_dropdown absolute top-10 right-17.75 z-10 hidden w-50 flex-col justify-center rounded-md bg-white shadow-[0px_0px_1.17px_0px_color-mix(in_srgb,var(--color-brand)_12.5%,transparent),0px_0px_8.191px_0px_color-mix(in_srgb,var(--color-brand)_12.5%,transparent),0px_0px_28.084px_0px_color-mix(in_srgb,var(--color-brand)_12.5%,transparent)] transition-all duration-1000 ease-in-out">
            <div className="flex flex-col justify-center">
              <span className="mb-1.25 p-2.5 font-outfit text-base">
                Hello @{user?.userName}
              </span>
              <div
                role="separator"
                aria-orientation="horizontal"
                className="h-px w-full bg-[#e2e5e883]"
              ></div>
              {isDraft && organization && (
                <Link
                  to={resumeSetupPath(organization.missingFields)}
                  data-cy="nav-finish-setup"
                  className="flex items-center justify-between gap-2 rounded-5px p-2.5 font-outfit text-base leading-none font-medium text-brand no-underline hover:bg-brand/8"
                >
                  Finish setting up
                  <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                </Link>
              )}
              <Link
                to={
                  user?.userType === "individual"
                    ? `/user/${user?.userName}`
                    : `/dashboard`
                }
                className="flex justify-between rounded-5px p-2.5 font-outfit text-base leading-none font-normal text-brand-secondary no-underline hover:bg-black/[3.5%]"
              >
                {user?.userType === "individual" ? "Your Profile" : "Dashboard"}
              </Link>
              {user?.userType === "organization" ? (
                <Link
                  to={"/organization/events"}
                  className="flex justify-between rounded-5px p-2.5 font-outfit text-base leading-none font-normal text-brand-secondary no-underline hover:bg-black/[3.5%]"
                >
                  Your Events
                </Link>
              ) : null}
            </div>
            <div className="flex flex-col justify-center">
              <div
                role="separator"
                aria-orientation="horizontal"
                className="h-px w-full bg-[#e2e5e883]"
              ></div>
              {/* @ts-expect-error — pre-existing: no `to` prop passed, unlike every other `<Link>` in the app; preserved as-is for a types-only pass. */}
              <Link
                onClick={() => {
                  handleLogout();
                }}
                className="flex justify-between rounded-5px p-2.5 font-outfit text-base leading-none font-normal text-brand-secondary no-underline hover:bg-black/[3.5%]"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
});

export default Navbar;
