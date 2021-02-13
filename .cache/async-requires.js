// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-me-mdx": () => import("./../../../src/pages/about-me.mdx" /* webpackChunkName: "component---src-pages-about-me-mdx" */),
  "component---src-pages-experience-mdx": () => import("./../../../src/pages/experience.mdx" /* webpackChunkName: "component---src-pages-experience-mdx" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-mdx": () => import("./../../../src/pages/projects.mdx" /* webpackChunkName: "component---src-pages-projects-mdx" */)
}

