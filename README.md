# My Website
This is the repo for my personal website made with react.

I previously used Github Pages and Jekyll but wanted to make a better designed website.

# TODO (Next Stage):
- perhaps add resume
    - design with figma - done see in src/images
    - perhaps place next to socials - will be placed on the left of existing socials
- add title
- page transition out in mobile should have circle fixed at bottom corner of screen
- for mobile, animate only when item is in viewport
- intro animation to show that neural net design represents a brain
    - make brain perform different animations on hover of different topics
- add scroll down indicator on mobile/phone
- add call to actions after description on mobile/phone
- in the future, can integrate gatsby SEO, image optimization
- obsidian integration with gatsby
    - perhaps this: https://dev.to/bathrobe/creating-a-diy-digital-garden-with-obsidian-and-gatsby-378e

# Bugs:
- plant hover overshadows part of neural net
- RESOLVED: circle cut off on long posts eg. mobile -> about-me -> scroll down
    - bigger circle
- RESOLVED: mobile refresh has sidebar
    - this is because window width is initialized as undefined
        - if we set it initialized to window.innerWidth it works fine
        - however, we can't do this because of SSR
        - to solve this, force rerender by returning null as the app on SSR
            - this is a place to be optimized in the future - only force the places that need to be forced
- RESOLVED: refresh unselects all nav headers
    - headers didn't detect if pages ended with / as it used === so now, using .startsWith to contain all forms.
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