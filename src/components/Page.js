import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion"
import {sideBarWidth, GetWindowWidth,screenMaxSizes} from "./Constants"

const StyledPage = styled(motion.div)`
    width: ${props=>props.isFullPageSize?`100vw`:`calc(100vw - calc(${sideBarWidth} + 7.5px))`};
    top: 0;
    right: 0;
    position:fixed;
    z-index:0;
`;

const StyledPageBackground = styled.div`
    background: #121212;
    height: 100vh;
    text-align: center;
    padding: 2rem;
    z-index:1;
`;

const pageVariants = {
    // code modified from https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx:648-789
    open:{
        clipPath: `circle(150vmax at 94vw 94vh)`,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 75,
            staggerChildren: 0.1
        }
    },
    closed:{
        clipPath: "circle(0vmax at 94vw 94vh)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 75,
            when:"afterChildren",
            staggerChildren: 0.1
          }
    },
};

const textVariants = {
    open:{opacity:1,translation:{duration:0.1}},
    closed:{opacity:0,translation:{duration:0.1}},
};

export function PageBackground({curPage, children}) {
    const mediaWidth = GetWindowWidth();
    const isFullPageSize = mediaWidth<=screenMaxSizes.tablet;
    return (
        <StyledPage isFullPageSize={isFullPageSize} initial="closed" animate={curPage==="home"?"closed":"open"} variants={pageVariants}>
            <StyledPageBackground>
                <motion.div variants={textVariants}>
                    {children}
                </motion.div>
            </StyledPageBackground>
        </StyledPage>
    );
    
}