import { test, expect } from "@playwright/test";

test("find overflow source", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/organizations");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.setViewportSize({ width: 375, height: 812 });

  const info = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const bodyWidth = document.body.scrollWidth;
    // Find elements wider than viewport or extending past right edge.
    const offenders: any[] = [];
    document.querySelectorAll("body *").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > window.innerWidth + 1 || r.left < -1) {
        offenders.push({
          tag: el.tagName,
          cls: (el as HTMLElement).className?.toString().slice(0, 80),
          left: r.left,
          right: r.right,
          width: r.width,
        });
      }
    });
    return { docWidth, bodyWidth, innerWidth: window.innerWidth, offenders: offenders.slice(0, 10) };
  });
  console.log("INFO:", JSON.stringify(info, null, 2));
});
