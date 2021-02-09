import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import selection_arrow from "../images/selection_arrow.svg";

const StyledArrowPushed = styled(motion.a)`
    display: flex;
    align-items: center;
    font-size: min(8.8vmin, 36px);
    white-space: nowrap;
    font-weight: 500;
    cursor:pointer;
    color:#FFFFFF;
    text-decoration:none;
    user-select: none;
    white-space: nowrap;
    &:hover{
        color:rgb(203, 161, 255);
    }
`;

const StyledArrow = styled(motion.img)`
    height:0.7em;
    padding-right:0.25em;
`;

let arrowVariants = {
    open:{
        x:0,
        transition: {
            ease:"easeIn"
        }
    },
    closed:{
        x:"-0.5em",
        transition: {
            duration: 0.3,
            ease:"easeIn"
        }
    }

};

export function ArrowPushedNavHeader({header, isAnimate, curPage, openPage}){
    return(
        <StyledArrowPushed style={{flexDirection:"row", marginLeft:isAnimate?"0.5em":0, justifyContent:isAnimate?(curPage===header||curPage==="home"?"flex-end":"flex-start"):"space-evenly"}} >
            <motion.div layout={isAnimate} onClick={()=>openPage(header)} animate={curPage===header||curPage==="home"?"open":"closed"} >
                <StyledArrow variants={arrowVariants} src={selection_arrow} alt="navigation-arrow" />
                {header}
            </motion.div>
        </StyledArrowPushed>
    );
}