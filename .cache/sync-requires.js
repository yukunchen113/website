const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ychen/projects/website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ychen/projects/website/src/pages/404.js"))),
  "component---src-pages-about-me-mdx": hot(preferDefault(require("/home/ychen/projects/website/src/pages/about-me.mdx"))),
  "component---src-pages-experience-mdx": hot(preferDefault(require("/home/ychen/projects/website/src/pages/experience.mdx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ychen/projects/website/src/pages/index.js"))),
  "component---src-pages-projects-mdx": hot(preferDefault(require("/home/ychen/projects/website/src/pages/projects.mdx")))
}

