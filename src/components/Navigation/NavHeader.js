import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import selection_arrow from "../../images/selection_arrow.svg";

const StyledArrowPushed = styled(motion.a)`
    display: flex;
    flex-direction: row;
    justify-content:${props=>(props.isAnimate?(props.isCurPage?"flex-end":"flex-start"):"space-evenly")};
    padding-left:${props=>(props.isAnimate?"6.5vw":0)};
    align-items: center;
    margin-left:${props=>(props.isAnimate?"0.4em":0)};
    font-size: min(8.8vw, 36px);
    white-space: nowrap;
    font-weight: 500;
    color:#FFFFFF;
    text-decoration:none;
    user-select: none;
    white-space: nowrap;
`;

const StyledSelectedItem = styled(motion.div)`
    cursor:pointer;
    &:hover{
        color:rgb(203, 161, 255);
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
    return(
        <StyledArrowPushed isAnimate={isAnimate} isCurPage={curPage===header||curPage==="home"}>
            {/* we need this StyledSelectedItem below for layout */}
            <StyledSelectedItem layout={isAnimate} onClick={()=>openPage(header)} animate={curPage===header||curPage==="home"?"open":"closed"}>
                <StyledArrow animate={isAnimate?null:"open"} variants={arrowVariants} src={selection_arrow} alt="navigation-arrow" />
                {header}
            </StyledSelectedItem>
        </StyledArrowPushed>
    );
}