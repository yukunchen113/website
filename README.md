# My Website
This is the repo for my personal website made with react.

I previously used Github Pages and Jekyll but wanted to make a better designed website.

# TODO (Next Stage):
- for mobile, animate only when item is in viewport
- intro animation to show that neural net design represents a brain
    - make brain perform different animations on hover of different topics
- posts (about me, projects, experience)
    - animations,
    - content (see add in markdown capability)
- add in markdown capability 
    - [this guy](https://medium.com/@MatDrinksTea/rendering-markdown-and-latex-in-react-dec355e74119) uses:
        - react-markdown, react-mathjax, remark-math
    - customize some markdown styling: 
        - eg. bolding->purple, 
        - regular text opacity lower (see [Figma design](https://www.figma.com/file/2uTvyLg768yLTsSJLLBuXh/Personal-Website?node-id=0%3A1))
- add scroll down indicator on mobile/phone
- add call to actions after description on mobile/phone
- in the future, can integrate gatsby SEO, image optimization
- obsidian integration with gatsby
    - perhaps this: https://dev.to/bathrobe/creating-a-diy-digital-garden-with-obsidian-and-gatsby-378e

# Bugs:
- plant hover overshadows part of neural net
- RESOLVED: on change of mobile size, parts of hero design will remain hidden
    - used CSS opacity control
- RESOLVED: if intro animation is disrupted, then some text remains hidden.
    - I solved this by keeping everything visible. 
        - and when items are hidden, there is a css delay when bringing them back in
    - we can perhaps set a timer or css transition-delay:
        - onClicks will be listened to only after a certain interval
        - putting an invisible css layer that disappears after a certain interval
    - https://overreacted.io/making-setinterval-declarative-with-react-hooks/ looks promising

# Structure:
- main directory is environment config files
- src has main content
    - components/ contains react/website components
        - Layout.js is the entry point
    - images/ contains images for the overall site (as opposed to post specific)
    - pages/ contains the web pages, can be .js for react or .mdx/.md for markdown
        - pages/images/ here contain post specific images

## Technologies Used:
- Netlify for deployment
- Figma for designing
- React
    - [Create React App](https://github.com/facebook/create-react-app).
- styled components
- framer-motion for animations
- gatsby
    - for page routing and markdown
    - note: the imported package, gatsby-plugin-layout, (as seen in gatsby-config.js) automatically wraps pages with layout element so elements aren't rerendered 
    - markdown: create pages for markdown, using template defined in src/templates/
        - using katex for math plugin
- I used the mdx katex configuration from here: https://codesandbox.io/s/gatsby-mdx-katex-e1t2q
    - note, for this to work, you must include require(`katex/dist/katex.min.css`) in your template or layout file