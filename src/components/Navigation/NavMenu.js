import React, { useState } from 'react';
import { motion } from "framer-motion";
import { NavItem } from "./NavItem";
import { Bold } from "../Constants";
import { BurgerMenuButton } from "./MenuButton";
import styled from 'styled-components';
const navItemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -20 },
};

const navVariant = {
    hidden: showDescription=>({ 
        transition:{ 
            staggerChildren:showDescription?0.4:0.2, 
            when:"afterChildren",
            ease:"easeOut"
        }
    }),
    visible: showDescription=>({ 
        transition:{ 
            staggerChildren:showDescription?0.4:0.2, 
            when:"beforeChildren",
            ease:"easeOut"
        } 
    }),
};
export function NavMenu({...props}) {
    // Nav controls page routing/switching

    
    return (
        <motion.div initial="hidden" custom={props.showDescription} variants={navVariant}>
            {/* list elements will shift position on page switch */}
            <motion.div variants={navItemVariant}>
                <NavItem header="About Me" description={[
                    "efficient.", 
                    "analytical", 
                    <Bold>collaboration.</Bold>]} {...props}/>
            </motion.div>
            <motion.div variants={navItemVariant} >
                <NavItem header="Projects" description={[
                    <Bold>representation learning</Bold>, 
                    "knowledge graph", 
                    "website"]} {...props}/>
            </motion.div>
            <motion.div variants={navItemVariant} >
                <NavItem header="Experience" description={[
                    <Bold>machine learning</Bold>, 
                    <Bold style={{color:"#CBA1FF"}}>software for space</Bold>]} {...props}/>
            </motion.div>
        </motion.div>
    );
};

const StyledMenuBackdrop = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: left;
    background: #0D3951;
    height: 100vh;
    text-align: right;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    width:100%;
    z-index: 10;
`;

const MenuBackdropVariants = {
    visible:{
        x:0,
        opacity:1,
        transition:{
            when:"beforeChildren",
            duration:0.2,
        }
    },
    hidden:{
        x:"100vw",
        opacity:0,
        transition:{
            when:"afterChildren"
        }
    }

}

export function NavBurgerMenu({curPage, openPage}){
    const [isMenuOpen, OpenMenu] = useState(false)
    return (
        <motion.div initial="hidden" animate={isMenuOpen?"visible":"hidden"}>
            <StyledMenuBackdrop onClick={()=>{isMenuOpen&&OpenMenu(!isMenuOpen)}} variants={MenuBackdropVariants}>
                <NavMenu showDescription={false} isAnimate={false} curPage={curPage} openPage={openPage}/>
            </StyledMenuBackdrop>
            <BurgerMenuButton isMenuOpen={isMenuOpen} OpenMenu={()=>{OpenMenu(!isMenuOpen)}}/>
        </motion.div>
    );
};