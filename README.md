# Personal Website
This is the repo for my personal website made with react.

I previously used Github Pages and Jekyll but wanted to make a better designed website.

## TODO:
- improve resize (tablet mode)
    - allow elements to shrink in desktop mode and set to mobile when too small 
    - top menu burger nav instead of sidebar
    - posts take all screen instead of half

- load in animation for landing page
    - use framer motion
    - sequential load in

- load animation for posts (about me, projects, experience)
    - mobile version
    - desktop version
        - shift nav link heading and arrows on selection
    - load by expanding circle

- add in markdown capability 
    - [this guy](https://medium.com/@MatDrinksTea/rendering-markdown-and-latex-in-react-dec355e74119) uses:
        - react-markdown, react-mathjax, remark-math
    - customize some markdown styling: 
        - eg. bolding->purple, 
        - regular text opacity lower (see [Figma design](https://www.figma.com/file/2uTvyLg768yLTsSJLLBuXh/Personal-Website?node-id=0%3A1))



## Technologies Used:
- Netlify for deployment
- Figma for designing
- React
    - [Create React App](https://github.com/facebook/create-react-app).
- styled components
- immer
