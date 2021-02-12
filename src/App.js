import React, {useState} from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import {PageBackground} from "./components/Page"
import Navigation from "./components/Navigation/Navigation";
import Socials from "./components/Socials";
import Logo from "./components/Logo";
import {GetWindowWidth, screenMaxSizes} from "./components/Constants";
import {AnimatedNeuralNetButton} from "./HeroDesigns/NeuralNet"
import {AnimatedPlanetButton} from "./HeroDesigns/Planet"

const StyledAppLayout = styled.div`
    display:flex;
    height:${props=>(props.isMobile?"100%":"100vh")};
    flex-direction:column;
    justify-content:space-between;
    align-items:${props=>(props.isMobile?"stretch":"flex-start")};
`;

const StyledMainContent = styled.div`
    display: grid;
    ${props=>!props.isMobile&&`
        grid-template-columns:fit-content auto;
        grid-gap:4vw;
        justify-content:start;
        `}
`;


const HeroDesign = styled(motion.div)`
    opacity:${props=>(props.isMobile||!props.isTablet)?1:0};
    ${props=>{
        if (props.isMobile) {
            return `
                display: grid;
                align-items:center;
                margin-left: auto;
                margin-right: auto;
                width:200px;
                user-select:none;
            `;
        } else {
            return `
                margin: 0;
                padding: 0;
                width:100%;
                grid-row:1;
                grid-column:2;
                `
        }
    }}
`;

export default function App() {
    const [curPage, openPage] = useState("home");
    const isMobile = GetWindowWidth()<=screenMaxSizes.phone;
    const isTablet = GetWindowWidth()<=screenMaxSizes.tablet;
    
    return (
        // Top level animates in the app
        <motion.div style={{overflowX : 'hidden', overflowY:isMobile?null:"hidden"}} initial="hidden" animate="visible">
            {/* Pages */}
            <PageBackground curPage={curPage}>
                <div style={{marginTop:"4rem"}}>
                    Put page routing here {curPage}
                </div>
            </PageBackground>

            {/* Controllers: controls the pages */}
            <StyledAppLayout isMobile={isMobile}>
                <div style={{paddingLeft:"0.5em"}}>
                    <Logo openPage={openPage}>Yukun Chen</Logo>
                </div>
                <StyledMainContent isMobile={isMobile}>
                    <Navigation curPage={curPage} openPage={openPage}/>
                    <HeroDesign isMobile={isMobile} isTablet={isTablet} style={{height:isMobile?"65vh":"20px", alignItems:isMobile?"end":null, paddingLeft:isMobile?0:"220px", gridRow:isMobile?1:null}} alt="neural-net-brain">
                        <AnimatedNeuralNetButton/>
                    </HeroDesign>
                    <HeroDesign isMobile={isMobile} isTablet={isTablet} style={{width:isMobile?"275px":null, paddingTop:isMobile?"73px":"0px", display:"grid", alignItems:"end"}} alt="planet-orbit">
                        <AnimatedPlanetButton/>
                    </HeroDesign>
                </StyledMainContent>
                <Socials/>
            </StyledAppLayout>
        </motion.div>
    );
};