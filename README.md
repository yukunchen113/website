# My Website
This is the repo for my personal website made with react.

I previously used Github Pages and Jekyll but wanted to make a better designed website.

# TODO (Next Stage):
- for mobile, animate only when item is in viewport
- intro animation to show that design represents brain
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


# Bugs:
- if intro animation is disrupted, then some items remain hidden.
    - we can perhaps set a timer:
        - onClicks will be listened to only after a certain interval
        - putting an invisible css layer that disappears after a certain interval
    - https://overreacted.io/making-setinterval-declarative-with-react-hooks/ looks promising



## Technologies Used:
- Netlify for deployment
- Figma for designing
- React
    - [Create React App](https://github.com/facebook/create-react-app).
- styled components
- framer-motion for animations
- immer
