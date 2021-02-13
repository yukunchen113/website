import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import {PageBackground} from "./Page"
import Navigation from "./Navigation/Navigation";
import Socials from "./Socials";
import Logo from "./Logo";
import {GetWindowWidth, rootPage, screenMaxSizes} from "./Constants";
import {AnimatedNeuralNetButton} from "./HeroDesign/NeuralNet"
import {AnimatedPlanetButton} from "./HeroDesign/Planet"
import { useStaticQuery, graphql, navigate } from "gatsby"

const StyledAppLayout = styled.div`
    display:flex;
    height:${props=>(props.isMobile?"100%":"100vh")};
    flex-direction:column;
    justify-content:space-between;
    align-items:${props=>(props.isMobile?"stretch":"flex-start")};
    position:${props=>(props.isTablet?null:`fixed`)};
    background-color: #09293A;
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
                opacity:${props.isHome?1:0};
                cursor:alias;
            `;
        } else {
            return `
                margin: 0;
                padding: 0;
                width:100%;
                grid-row:1;
                grid-column:2;
                opacity:${props.isHome?null:0};
                `
        }
    }}
`;

export default function App({location, children}) {
    const [curPage, openPage] = [location.pathname, navigate];
    const isMobile = GetWindowWidth()<=screenMaxSizes.phone;
    const isTablet = GetWindowWidth()<=screenMaxSizes.tablet;
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)
    return (
        // Top level animates in the app
        <motion.div style={{overflowX : 'hidden'}} initial="hidden" animate="visible">
            {/* Controllers: controls the pages */}
            <StyledAppLayout isTablet={isTablet} isMobile={isMobile}>
                <div style={{paddingLeft:"0.5em"}}>
                    <Logo openPage={openPage}>{data.site.siteMetadata?.title}</Logo>
                </div>
                <StyledMainContent isTablet={isTablet} isMobile={isMobile}>
                    <Navigation curPage={curPage} openPage={openPage}/>
                    <HeroDesign isMobile={isMobile} isTablet={isTablet} isHome={curPage===rootPage} style={{height:isMobile?"65vh":"20px", alignItems:isMobile?"end":null, paddingLeft:isMobile?0:"220px", gridRow:isMobile?1:null}} alt="neural-net-brain">
                        <AnimatedNeuralNetButton/>
                    </HeroDesign>
                    <HeroDesign isMobile={isMobile} isTablet={isTablet} isHome={curPage===rootPage} style={{width:isMobile?"275px":null, paddingTop:isMobile?"73px":"0px", display:"grid", alignItems:"end"}} alt="planet-orbit">
                        <AnimatedPlanetButton/>
                    </HeroDesign>
                </StyledMainContent>
                <Socials/>
            </StyledAppLayout>
            {/* Pages */}
            <PageBackground curPage={curPage}>
                <div style={{marginTop:"4rem"}}>
                    {curPage!==rootPage&&children}
                </div>
            </PageBackground>

        </motion.div>
    );
};

