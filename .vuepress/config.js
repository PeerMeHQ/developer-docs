module.exports = {
  title: "Superciety Developers",
  themeConfig: {
    logo: "/images/logo.png",
    nav: [{ text: "Superciety.com", link: "https://superciety.com" }],
    sidebar: [
      {
        title: "General",
        collapsable: false,
        children: prefix("general", ["welcome"])
      },
      {
        title: "Services",
        collapsable: false,
        children: prefix("services", ["webhooks"])
      }
    ],
    smoothScroll: true,
    lastUpdated: "Last Updated",
    docsBranch: "main"
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
};

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
