import React from 'react';
import { motion } from "framer-motion";
import { NavItem } from "./NavItem";
import { Bold } from "./Constants";

const navVariant = {
    visible: { transition:{ staggerChildren:1 } },
};

const navItemVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
};

export function Nav({curPage, openPage}) {
    // Nav controls page routing/switching
    return (
        <motion.div initial="hidden" variants={navVariant}>
            {/* list elements will shift position on page switch */}
            <motion.div variants={navItemVariant}>
                <NavItem header="About Me" description={[
                    "efficient.", 
                    "analytical", 
                    <Bold>collaboration.</Bold>]} curPage={curPage} openPage={openPage}/>
            </motion.div>
            <motion.div variants={navItemVariant} >
                <NavItem header="Projects" description={[
                    <Bold>representation learning</Bold>, 
                    "knowledge graph", 
                    "website"]} curPage={curPage} openPage={openPage}/>
            </motion.div>
            <motion.div variants={navItemVariant} >
                <NavItem header="Experience" description={[
                    <Bold>machine learning</Bold>, 
                    <Bold style={{color:"#CBA1FF"}}>software for space</Bold>]} curPage={curPage} openPage={openPage}/>
            </motion.div>
        </motion.div>
    );
};