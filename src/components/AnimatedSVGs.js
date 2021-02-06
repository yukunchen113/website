import React from "react";
import { motion } from "framer-motion";

export function AnimatedAutoencoder(){
    const rootVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                delayChildren: 0.3,
                staggerChildren: 0.2,
            }
        }
    };
    const layerVariants = {
        hidden:{ opacity:0 },
        visible:{ opacity:1, 
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        }
    };
    const nodeVariants = {
        hidden:{ opacity:0, y:20 },
        visible:{ opacity:1, y:0 }
    };
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

export function AnimatedPlanet(){
    const rootVariants = {
        hidden: { opacity: 0, scale:0},
        visible: {
            opacity: 1,
            scale:1,
            transition: {
                type:"spring",
                damping:10,
                stiffness:100,
                velocity:7,

                when: "beforeChildren",
                staggerChildren: 0.08,
            }
        }
    };
    const objectVariants = {
        hidden:{ opacity:0 },
        visible:{ opacity:1, 
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        }
    };
    return (
        <motion.svg variants={rootVariants} width="324" height="296" viewBox="0 0 324 296" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/*--------PLANET--------*/}
            <motion.svg><rect y="95.5197" width="214.239" height="214.239" rx="107.119" transform="rotate(-21.217 0 95.5197)" fill="black"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="17" width="278" height="279">
                    <rect y="95.5197" width="214.239" height="214.239" rx="107.119" transform="rotate(-21.217 0 95.5197)" fill="#6F4392"/>
                </mask>
            </motion.svg>
            <motion.svg>
                <g mask="url(#mask0)">
                <motion.svg><rect x="-15.2027" y="77.5424" width="214.239" height="214.239" rx="107.119" transform="rotate(-21.217 -15.2027 77.5424)" fill="#C376FF"/></motion.svg>
                <motion.svg><rect x="-15.2027" y="77.5424" width="214.239" height="214.239" rx="107.119" transform="rotate(-21.217 -15.2027 77.5424)" fill="#49345A"/></motion.svg>
                </g>
            </motion.svg>

            {/*--------ORBIT--------*/}
            <motion.svg variants={objectVariants}><path fillRule="evenodd" clipRule="evenodd" d="M227.367 98.2532C227.094 97.8281 226.819 97.4054 226.541 96.985C260.169 92.8176 283.413 96.2494 288.065 108.232C297.174 131.696 231.546 179.062 141.481 214.027C128.819 218.942 116.349 223.351 104.241 227.233C110.65 224.939 117.129 222.523 123.658 219.988C220.54 182.377 291.682 132.835 282.559 109.333C278.35 98.4923 257.798 95.0858 227.367 98.2532Z" fill="#B38CE4"/></motion.svg>
            <motion.svg variants={objectVariants}>
                <mask id="path-5-inside-1" fill="white">
                <motion.svg variants={objectVariants}><path fillRule="evenodd" clipRule="evenodd" d="M96.9641 228.541L96.9809 228.536L96.9383 228.404L94.4938 215.421L92.8978 215.939L92.8978 215.939L87.2459 217.771L92.8825 229.719L92.9251 229.851L96.9641 228.541Z"/></motion.svg>
                </mask>
            </motion.svg>

            {/*--------SPACE-STATION--------*/}
            <motion.svg variants={objectVariants}>
                <path fillRule="evenodd" clipRule="evenodd" d="M96.9641 228.541L96.9809 228.536L96.9383 228.404L94.4938 215.421L92.8978 215.939L92.8978 215.939L87.2459 217.771L92.8825 229.719L92.9251 229.851L96.9641 228.541Z" fill="#AB91BF"/>
                <path d="M96.9809 228.536L97.2896 229.487L98.2404 229.179L97.9322 228.228L96.9809 228.536ZM96.9641 228.541L97.2724 229.493L97.2727 229.493L96.9641 228.541ZM96.9383 228.404L95.9555 228.589L95.9673 228.652L95.987 228.713L96.9383 228.404ZM94.4938 215.421L95.4765 215.236L95.2662 214.12L94.1854 214.47L94.4938 215.421ZM92.8978 215.939L91.9465 216.247L92.2548 217.198L93.2061 216.89L92.8978 215.939ZM92.8978 215.939L93.849 215.63L93.5407 214.679L92.5894 214.987L92.8978 215.939ZM87.2459 217.771L86.9376 216.819L85.8568 217.17L86.3415 218.197L87.2459 217.771ZM92.8825 229.719L93.8337 229.411L93.8141 229.35L93.7869 229.292L92.8825 229.719ZM92.9251 229.851L91.9738 230.159L92.2822 231.11L93.2334 230.802L92.9251 229.851ZM96.6723 227.585L96.6554 227.59L97.2727 229.493L97.2896 229.487L96.6723 227.585ZM95.987 228.713L96.0296 228.844L97.9322 228.228L97.8895 228.096L95.987 228.713ZM97.921 228.219L95.4765 215.236L93.511 215.606L95.9555 228.589L97.921 228.219ZM94.1854 214.47L92.5894 214.987L93.2061 216.89L94.8021 216.373L94.1854 214.47ZM91.9465 216.247L91.9465 216.247L93.849 215.63L93.849 215.63L91.9465 216.247ZM87.5543 218.722L93.2061 216.89L92.5894 214.987L86.9376 216.819L87.5543 218.722ZM93.7869 229.292L88.1504 217.344L86.3415 218.197L91.978 230.146L93.7869 229.292ZM91.9312 230.027L91.9738 230.159L93.8764 229.542L93.8337 229.411L91.9312 230.027ZM93.2334 230.802L97.2724 229.493L96.6557 227.59L92.6168 228.899L93.2334 230.802Z" fill="black" mask="url(#path-5-inside-1)"/>
                
                    <mask id="path-7-inside-2" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M94.6449 235.099L94.6281 235.105L94.6707 235.236L97.1153 248.219L98.7112 247.702L98.7112 247.702L104.363 245.87L98.7266 233.922L98.6839 233.79L94.6449 235.099Z"/>
                    </mask>
                
                <path fillRule="evenodd" clipRule="evenodd" d="M94.6449 235.099L94.6281 235.105L94.6707 235.236L97.1153 248.219L98.7112 247.702L98.7112 247.702L104.363 245.87L98.7266 233.922L98.6839 233.79L94.6449 235.099Z" fill="#AB91BF"/>
                <path d="M94.6281 235.105L93.6768 235.413L93.3686 234.462L94.3194 234.153L94.6281 235.105ZM94.6449 235.099L94.3363 234.148L94.3366 234.148L94.6449 235.099ZM94.6707 235.236L95.622 234.928L95.6417 234.989L95.6535 235.051L94.6707 235.236ZM97.1153 248.219L97.4236 249.171L96.3428 249.521L96.1325 248.404L97.1153 248.219ZM98.7112 247.702L98.4029 246.751L99.3542 246.442L99.6625 247.394L98.7112 247.702ZM98.7112 247.702L99.0196 248.653L98.0683 248.962L97.76 248.01L98.7112 247.702ZM104.363 245.87L105.267 245.443L105.752 246.471L104.671 246.821L104.363 245.87ZM98.7266 233.922L97.8221 234.348L97.7949 234.291L97.7753 234.23L98.7266 233.922ZM98.6839 233.79L98.3756 232.839L99.3268 232.53L99.6352 233.482L98.6839 233.79ZM94.3194 234.153L94.3363 234.148L94.9536 236.05L94.9367 236.056L94.3194 234.153ZM93.7195 235.545L93.6768 235.413L95.5794 234.796L95.622 234.928L93.7195 235.545ZM95.6535 235.051L98.098 248.034L96.1325 248.404L93.688 235.421L95.6535 235.051ZM96.8069 247.268L98.4029 246.751L99.0196 248.653L97.4236 249.171L96.8069 247.268ZM97.76 248.01L97.76 248.01L99.6625 247.394L99.6625 247.394L97.76 248.01ZM104.671 246.821L99.0196 248.653L98.4029 246.751L104.055 244.919L104.671 246.821ZM99.631 233.495L105.267 245.443L103.459 246.297L97.8221 234.348L99.631 233.495ZM97.7753 234.23L97.7326 234.098L99.6352 233.482L99.6778 233.613L97.7753 234.23ZM98.9922 234.741L94.9533 236.05L94.3366 234.148L98.3756 232.839L98.9922 234.741Z" fill="black" mask="url(#path-7-inside-2)"/>
                <rect x="94.5444" y="251.021" width="14.8476" height="5.02843" transform="rotate(-17.9591 94.5444 251.021)" fill="#00F09A" stroke="black"/>
                <rect x="82.1148" y="212.179" width="14.8476" height="5.02843" transform="rotate(-17.9591 82.1148 212.179)" fill="#00F09A" stroke="black"/>
                <rect x="92.3751" y="234.316" width="2.97418" height="4.12323" transform="rotate(-107.959 92.3751 234.316)" fill="#E6C7FF" stroke="black"/>
                <rect x="97.2487" y="232.737" width="2.97418" height="4.12323" transform="rotate(-107.959 97.2487 232.737)" fill="#E6C7FF" stroke="black"/>
            </motion.svg>
        </motion.svg>
    );
}

export function AnimatedAutoencoderButton(){
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{scale: 0.95, borderRadius: "100%"}} style={{cursor:"pointer"}}>
            <AnimatedAutoencoder/>
        </motion.div>
    );
}

export function AnimatedPlanetButton(){
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{scale: 0.95, borderRadius: "100%"}} style={{cursor:"pointer"}}>
            <AnimatedPlanet/>
        </motion.div>
    );
}