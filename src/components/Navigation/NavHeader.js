import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import selection_arrow from "../../images/selection_arrow.svg";
import {NoHighlightMobileButtonTap, rootPage, standardColumnSpace} from "../Constants";

const StyledArrowPushed = styled(motion.a)`
    display: flex;
    flex-direction: row;
    justify-content:${props=>(props.isAnimate?(props.isCurPage||props.isHome?"flex-end":"flex-start"):"space-evenly")};
    padding-left:${props=>(props.isAnimate?standardColumnSpace:0)};
    align-items: center;
    margin-left:${props=>(props.isAnimate?"0.4em":0)};
    font-size: min(8.8vw, 36px);
    white-space: nowrap;
    font-weight: 500;
    color:#FFFFFF;
    opacity:${props=>(props.isHome||props.isCurPage)?1:0.5};    
    &:hover{
        opacity:1;
    }
    text-decoration:none;
    user-select: none;
    white-space: nowrap;
`;

const StyledSelectedItem = styled(motion.div)`
    cursor:pointer;
    &:hover{
        color:${props=>props.isHome||!props.isCurPage?`rgb(203, 161, 255)`:null};
    }
`;

const StyledArrow = styled(motion.img)`
    height:0.7em;
    padding-right:0.1em;
`;

const arrowVariants = {
    open:{
        x:0,
        transition: {
            ease:"easeIn"
        }
    },
    closed:{
        x:"-0.4em",
        transition: {
            duration: 0.3,
            ease:"easeIn"
        }
    }
};


export function ArrowPushedNavHeader({header, isAnimate, curPage, openPage}){
    const pageLink = "/"+header.replace(/\s+/g, "-").toLowerCase();
    return(
        <NoHighlightMobileButtonTap>
            <StyledArrowPushed isAnimate={isAnimate} isCurPage={curPage.startsWith(pageLink)} isHome={curPage===rootPage}>
                {/* we need this StyledSelectedItem below for layout */}
                <StyledSelectedItem isCurPage={curPage.startsWith(pageLink)} isHome={curPage===rootPage} layout={isAnimate} onClick={()=>openPage(pageLink)} animate={curPage.startsWith(pageLink)||curPage===rootPage?"open":"closed"}>
                    <StyledArrow animate={isAnimate?null:"open"} variants={arrowVariants} src={selection_arrow} alt="navigation-arrow" />
                    {header}
                </StyledSelectedItem>
            </StyledArrowPushed>
        </NoHighlightMobileButtonTap>
    );
}