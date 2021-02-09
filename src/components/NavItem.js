import React from 'react';
import {motion} from "framer-motion";
import PropTypes from "prop-types";
import styled from "styled-components";
import {ArrowPushedNavHeader} from "./NavHeader"
import { GetWindowWidth, screenMaxSizes } from "./Constants";

let StyledNav = styled.div`
    ${props => {
        if (props.showDescription){
            if (!props.showDescriptionUnderneath){
                return (`
                    display:grid;
                    grid-template-columns:max(28vw,315px) auto;
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
const StyledDescription = styled.div`
    white-space: nowrap;
    user-select: none;
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
            when: "beforeChildren",
            staggerChildren: 0.25,
        } 
    }
}
const navItemVariant = {
    hidden:{opacity:0, y:-10},
    visible:{opacity: 1, y:0, transition:{ease:"easeOut"}}
}
export function NavItem({header, description=[], showDescription=true, curPage, openPage}){
    const mediaWidth = GetWindowWidth();
    const showDescriptionUnderneath = mediaWidth<=screenMaxSizes.phone;
    return (
        <motion.div variants={navVariants}>
            <StyledNav showDescription={showDescription} showDescriptionUnderneath={showDescriptionUnderneath}>
                <motion.div variants={navItemVariant}>
                    <ArrowPushedNavHeader header={header} isAnimate={!showDescriptionUnderneath} curPage={curPage} openPage={openPage}/>
                </motion.div>
                {/* StyledDescription will format the description at the header-description level of abstraction */}
                <StyledDescription showDescription={showDescription} showDescriptionUnderneath={showDescriptionUnderneath}>
                    {description.map((item,idx)=> 
                        <motion.div variants={navItemVariant} key={idx}>
                            {showDescription?<StyledDescriptionItem showDescription={showDescription} showDescriptionUnderneath={showDescriptionUnderneath}>{item}</StyledDescriptionItem>:null}
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