import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion"
import {sideBarWidth, GetWindowWidth,screenMaxSizes, rootPage, scrollBarWidth, backgroundColor } from "./Constants"

const StyledPageLayout = styled(motion.div)`
    position: absolute;
    width: ${props=>props.isFullPageSize?`100vw`:`calc(100vw - calc(${sideBarWidth} + 7.5px + ${scrollBarWidth}))`};
    //background: ${backgroundColor}; 
    background: #121212;
    top: 0;
    right: 0;
`;
const StyledPage = styled.div`
    padding-left: ${props=>props.isFullPageSize?`7vh`:`calc(${sideBarWidth} / 3)`};
    padding-right: ${props=>props.isFullPageSize?`7vh`:`calc(${sideBarWidth} / 3)`};
    height: 100%;
    text-align: left;
    z-index:1;
    min-height: 90vh;
`;

const StyledPageContent = styled(motion.div)`
    padding-top:3vh;
    padding-bottom:7.5vh;
    word-wrap: break-word;
    font-size:24px;
    color: rgba(255, 255, 255, 0.8);
    a{
        color: #00F09A;
    }
    strong{
        font-weight:500;
        color:#b878d6;
    }
    b{
        font-weight:500;
        color:#b878d6;
    }
    h1{
        color:#FFFFFF;
        font-size:45px;
        font-weight: 500;
        strong{
            color:#DA8CFF;
        }
        :before{
            content: ": : ";
            font-weight:500;
            color:#DA8CFF;
        }
    }
    h2{
        color:#FFFFFF;
        // font-size:28px;
        font-weight: 500;
        :before{
            content: ": : ";
            font-weight:500;
            color:#00F09A;
        }
    }
    h3{
        color:#FFFFFF;
        // font-size:24px;
        font-weight: 500;
        :before{
            content: ": : ";
            font-weight:500;
            color:#DA8CFF;
        }
    }
    img{
        opacity:1;
        width:600px;
        height: auto;
    }
`;

const pageVariants = {
    // code modified from https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=/src/Example.tsx&file=/src/Example.tsx:648-789
    open:{
        clipPath: `circle(142% at 94vw 94vh)`,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 75,
            staggerChildren: 0.1
        }
    },
    closed:{
        clipPath: "circle(0% at 94vw 94vh)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 75,
            when:"beforeChildren",
            staggerChildren: 0.1
          }
    },
};
const textVariants = {
    open:{opacity:1,translation:{duration:0.2}},
    closed:{opacity:0,translation:{duration:0}},
};
export function PageBackground({curPage, children}) {
    const mediaWidth = GetWindowWidth();
    const isFullPageSize = mediaWidth<=screenMaxSizes.tablet;

    return (
        <StyledPageLayout isFullPageSize={isFullPageSize} initial="closed" animate={curPage===rootPage?"closed":"open"} variants={pageVariants}>
            <StyledPage isFullPageSize={isFullPageSize}>
                <StyledPageContent variants={textVariants}>
                    {children}
                </StyledPageContent>
            </StyledPage>
        </StyledPageLayout>
    );
    
};
