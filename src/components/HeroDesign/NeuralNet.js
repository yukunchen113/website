import React from "react";
import { motion } from "framer-motion";
import {NoHighlightMobileButtonTap} from "../Constants"
const rootVariants = {
    hidden: { 
        opacity: 1,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        } 
    },
    visible: {
        opacity: 1,
        transition: {
            delay:0,
            when: "beforeChildren",
            staggerChildren: 0.1,
        }
    }
};
const layerVariants = {
    hidden:{ 
        opacity:1, 
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
    visible:{ opacity:1, 
        transition: {
            ease: "easeOut",
            staggerChildren: 0.1,
        },
    }
};
const nodeVariants = {
    hidden:{ y:5, scale:0.3 },
    visible:{ y:0, scale:1 }
};
export function AnimatedNeuralNet(){
    return (
        <motion.svg variants={rootVariants} width="187" height="198" viewBox="0 0 187 198" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="74" cy="191.402" r="6" fill="#00FFA4"/>
                <motion.circle variants={nodeVariants} cx="114.025" cy="191.402" r="6" fill="#00FFA4"/>
            </motion.svg>

            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="53.5" cy="167.902" r="8.5" fill="#174F6C"/>
                <motion.circle variants={nodeVariants} cx="93.5245" cy="167.902" r="8.5" fill="#174F6C"/>
                <motion.circle variants={nodeVariants} cx="133.549" cy="167.902" r="8.5" fill="#174F6C"/>
            </motion.svg>
            
            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="34" cy="139.402" r="11" fill="#113D54"/>
                <motion.circle variants={nodeVariants} cx="74.0245" cy="139.402" r="11" fill="#113D54"/>
                <motion.circle variants={nodeVariants} cx="114.049" cy="139.402" r="11" fill="#113D54"/>
                <motion.circle variants={nodeVariants} cx="154.074" cy="139.402" r="11" fill="#113D54"/>
            </motion.svg>
            
            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="13.4509" cy="105.853" r="13.4509" fill="#0D3951"/>
                <motion.circle variants={nodeVariants} cx="53.4754" cy="105.853" r="13.4509" fill="#0D3951"/>
                <motion.circle variants={nodeVariants} cx="93.5" cy="105.853" r="13.4509" fill="#0D3951"/>
                <motion.circle variants={nodeVariants} cx="133.525" cy="105.853" r="13.4509" fill="#0D3951"/>
                <motion.circle variants={nodeVariants} cx="173.549" cy="105.853" r="13.4509" fill="#0D3951"/>
            </motion.svg>
            
            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="13.4509" cy="70.8527" r="13.4509" fill="#674A7E" fillOpacity="0.8"/>
                <motion.circle variants={nodeVariants} cx="53.4754" cy="70.8527" r="13.4509" fill="#674A7E" fillOpacity="0.8"/>
                <motion.circle variants={nodeVariants} cx="93.5" cy="70.8527" r="13.4509" fill="#674A7E" fillOpacity="0.8"/>
                <motion.circle variants={nodeVariants} cx="133.525" cy="70.8527" r="13.4509" fill="#674A7E" fillOpacity="0.8"/>
                <motion.circle variants={nodeVariants} cx="173.549" cy="70.8527" r="13.4509" fill="#674A7E" fillOpacity="0.8"/>
            </motion.svg>
            
            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="34" cy="37.4018" r="11" fill="#674A7E" fillOpacity="0.6"/>
                <motion.circle variants={nodeVariants} cx="74.0245" cy="37.4018" r="11" fill="#674A7E" fillOpacity="0.6"/>
                <motion.circle variants={nodeVariants} cx="114.049" cy="37.4018" r="11" fill="#674A7E" fillOpacity="0.6"/>
                <motion.circle variants={nodeVariants} cx="154.074" cy="37.4018" r="11" fill="#674A7E" fillOpacity="0.6"/>
            </motion.svg>
            
            <motion.svg variants={layerVariants}>
                <motion.circle variants={nodeVariants} cx="53.9019" cy="8.5" r="8.5" fill="#674A7E" fillOpacity="0.4"/>
                <motion.circle variants={nodeVariants} cx="93.9264" cy="8.50002" r="8.5" fill="#674A7E" fillOpacity="0.4"/>
                <motion.circle variants={nodeVariants} cx="133.951" cy="8.50002" r="8.5" fill="#674A7E" fillOpacity="0.4"/>
            </motion.svg>
            
            
            
            
        </motion.svg>
        );
}


export function AnimatedNeuralNetButton(){
    return (
        <NoHighlightMobileButtonTap initial="hidden" animate="visible" whileHover={{scale:1.1}} whileTap={["hidden", "visible"]} style={{cursor:"pointer"}}>
            <AnimatedNeuralNet/>
        </NoHighlightMobileButtonTap>
    );
}
