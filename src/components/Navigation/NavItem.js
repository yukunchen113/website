import React from 'react';
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";
import {ArrowPushedNavHeader} from "./NavHeader"
import { GetWindowWidth, screenMaxSizes, sideBarWidth } from "../Constants";

let StyledNav = styled.div`
    ${props => {
        if (props.showDescription){
            if (!props.showDescriptionUnderneath){
                return (`
                    display:grid;
                    grid-template-columns:${sideBarWidth} auto;
                    grid-row-gap:23px;
                    text-align:right;
                `);
            } else {
                return (`
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    height:100;
                `);
            }
        }else{
            return (`
                display:grid;
                grid-template-columns:90%;
                width:100vw;
                text-align:right;
                margin:0;
                text-align: right;
            `);
        }
        }}
    font-weight: 300;
    margin:0;
    padding-top: ${props=>(props.showDescription?(props.showDescriptionUnderneath?'275px':'0px'):'6vh')}
`;

const StyledDescription = styled(motion.div)`
    white-space: nowrap;
    user-select: none;
    opacity: ${props=>props.isHome?1:0};
    transition-delay: ${props=>props.isHome?0.5:0}s;
    transition-duration: ${props=>props.isHome?0.5:0}s;
    transition-timing-function: ease;
    padding:${props=>!props.showDescription || props.showDescriptionUnderneath?"0":"0.25em"};
    padding-left:${props=>!props.showDescription || props.showDescriptionUnderneath?"0":"0.5em"};
`;

const StyledDescriptionItem = styled.div`
    ${props=>{
        if (props.showDescription && props.showDescriptionUnderneath){
            return `margin-top:73px;`;
        } else {
            return `
                margin-top:0px;
                text-align: left;
            `;
        }
    }}
    font-size: min(7.3vmin, 30px);
    font-weight: 300;
    color: #00F09A;
`;

const navVariants = {
    hidden:{ opacity:0 },
    visible:{ 
        opacity:1,
        transition: {
            when:"beforeChildren",
            staggerChildren: 0.1,
        } 
    }
};

const navHeaderVariants = {
    hidden:{opacity: 1, y:-10, transition:{ease:"easeOut"}},
    visible:{opacity: 1, y:0, transition:{ease:"easeOut"}}
};

const navDescriptionVariant = {
    hidden:{opacity:1, y:-10, transition:{ease:"easeOut"}},
    visible:{opacity: 1, y:0, transition:{ease:"easeOut"}}
};


export function NavItem({header, description=[], showDescription=true, isAnimate=true, curPage, openPage}){
    const mediaWidth = GetWindowWidth();
    const isMobile = mediaWidth<=screenMaxSizes.phone;
    return (
        <motion.div variants={navVariants}>
            <StyledNav showDescription={showDescription} showDescriptionUnderneath={isMobile}>
                <motion.div variants={navHeaderVariants}>
                    <ArrowPushedNavHeader header={header} isAnimate={isAnimate&&!isMobile} curPage={curPage} openPage={openPage}/>
                </motion.div>
                {/* StyledDescription will format the description at the header-description level of abstraction */}
                <StyledDescription showDescription={showDescription} showDescriptionUnderneath={isMobile} isHome={curPage==="home"}>
                    {description.map((item,idx)=> 
                        <motion.div variants={navDescriptionVariant} key={idx}>
                            {showDescription?<StyledDescriptionItem showDescription={showDescription} showDescriptionUnderneath={isMobile}>{item}</StyledDescriptionItem>:null}
                        </motion.div>)}
                </StyledDescription>
            </StyledNav>
        </motion.div>
    );
}
NavItem.propTypes = {
    header: PropTypes.string,
    description: PropTypes.array,

};