// src/config/footerLinksConfig.js

export const footerLinks = (t) => ({
  quickStarts: [
    { name: t("trending_events"), path: "/trending" },
    { name: t("ngos_near_you"), path: "/clubs" },
    { name: t("login_signup"), path: "/auth/login" },
    { name: t("events"), path: "/events" },
  ],
  resources: [
    { name: "GitHub", path: "https://github.com/ngoworldcommunity/NGOWorld" },
    {
      name: t("setup_frontend"),
      path: "https://github.com/ngoworldcommunity/NGOWorld/blob/main/docs/FrontendSetup.md",
    },
    {
      name: t("setup_backend"),
      path: "https://github.com/ngoworldcommunity/NGOWorld-Backend/blob/main/docs/BackendSetup.md",
    },
    {
      name: t("docker_resources"),
      path: "https://github.com/ngoworldcommunity/NGOWorld/blob/main/docs/DockerSetup.md",
    },
  ],
  policies: [
    { name: t("terms_of_use"), path: "/terms" },
    { name: t("privacy_policy"), path: "/privacy" },
    { name: t("cookies_policy"), path: "/cookies" },
  ],
  social: [
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/company/ngoworld",
      icon: "FaLinkedinIn",
    },
    {
      name: "X",
      path: "https://x.com/ngoworlddotorg",
      icon: "FaXTwitter",
    },
    {
      name: "GitHub",
      path: "https://github.com/ngoworldcommunity",
      icon: "FaGithub",
    },
  ],
});
