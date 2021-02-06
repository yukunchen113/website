import React, {useState} from "react";
import styled from 'styled-components';
import {navComponents, socials, selection_arrow} from './NavigationContent';
import Burger from './Burger';
import produce from 'immer';
import { useMediaQuery } from 'react-responsive';
import { motion } from "framer-motion";
import { AnimatedPlanetButton, AnimatedAutoencoderButton } from "./AnimatedSVGs";
function NavLink({children, link}) {
    // show description accouns for whether the headers should be spread out to account for description or not
    // styles
    const NavHeader = styled(motion.a)`
        font-size: min(8.8vmin, 36px);
        font-weight: 500;
        cursor:pointer;
        color:#FFFFFF;
        text-decoration:none;
        &:hover{
            color:rgb(203, 161, 255);
        }
    `;

    const NavArrow = styled.img`
        height:0.7em;
        padding-right: 0.25em;
    `;

    //processing and return    
    let arrow_distance=0.25;//should be from 1 to 0.25, control this with animation somehow, sometime in future
    return (
        <NavHeader whileHover={{fontSize:"38px"}} whileTap={{fontSize:"34.2px"}} href={link}>
            <NavArrow style={{paddingRight: `${arrow_distance}em`}} src={selection_arrow} alt="navigation-arrow" />
            {children}
        </NavHeader>
    );
}
function Nav({showDescription, showDescriptionUnderneath, children, motionDelay}){
    // this is a single nav link with description
    // no media information (abstracted)
    // if show description underneath, will be a certain percentage of height of page
    
    //=============================//
    // Style and Component Creation//
    //=============================//
    
    // handles padding of each description item given underneath or not
    const NavDescriptionItem = styled.div`
        ${()=>{
            if (showDescription && showDescriptionUnderneath){
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
    
    // handles padding between heading and description when not underneath
    const NavDescription = styled.div`
        padding:${()=>!showDescription || showDescriptionUnderneath?"0":"0.25em"};
        padding-left:${()=>!showDescription || showDescriptionUnderneath?"0":"0.5em"};
    `;

    // handles overall styling of heading+description (within container) given different devices (mobile, desktop) 
    let StyledNav = styled.div`
        ${() => {
            if (showDescription){
                if (!showDescriptionUnderneath){
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
        padding-top: ${(showDescription?(showDescriptionUnderneath?'275px':'0px'):'6vh')}
    `;

    let description = children.description;
    description = description.map((item,idx)=> 
        <React.Fragment key={idx+1}>{showDescription?<NavDescriptionItem>{item}</NavDescriptionItem>:null}</React.Fragment>);
    
    //========//
    // Motion //
    //========//
    const parentMotionVariant = {
        visible:{ 
            opacity:1,
            transition: {
                when: "beforeChildren",
                delay:motionDelay,
                staggerChildren: 0.25,
            } 
        },
        hidden:{ opacity:0 }
    }
    const childMotionVariant = {
        hidden:{opacity:0, y:-10},
        visible:{opacity: 1, y:0, transition:{ease:"easeOut"}}
    }

    return (
        <motion.div variants={parentMotionVariant}>
            <StyledNav>
                <motion.div variants={childMotionVariant}>
                    <React.Fragment key={0}> 
                        <NavLink link={children.link}>
                            {children.heading}
                        </NavLink>
                    </React.Fragment>
                </motion.div>
                <NavDescription>
                    {description.map((item,idx)=> 
                        <motion.div variants={childMotionVariant} key={idx+1}>{item}</motion.div>)}
                </NavDescription>
            </StyledNav>
        </motion.div>
    );
}
export function Socials() {
    // style
    const SocialStyle = styled.div`
        display:flex;
    `;

    // processing
    let soc = produce(socials, draft=>draft);
    soc = soc.map(social => 
        <motion.div key={social.id} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
            <a href={social.link}><img src={social.icon} style={{paddingRight:"8px"}} alt="socials"/>
        </a></motion.div>);
    return (
        <SocialStyle>
            {soc}
        </SocialStyle>
    );
}
function TopNav() {
    // controls multiple Nav components under certain events eg. slide out on click
    const StyledTopNav = styled.nav`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: #0D3951;
        height: 100vh;
        text-align: right;
        padding: 2rem;
        position: fixed;
        top: 0;
        right: 0;
        width:100%;
        transition: transform 0.3s linear;
        opacity: ${({ open }) => open ? '1' : '0'};
        transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'}
    `;

    const [open, setOpen] = useState(false);
    let nav = produce(navComponents, draft=>draft);
    nav = nav.map(item => 
        <React.Fragment key={item.id}>
            <Nav showDescription={false} showDescriptionUnderneath={false}>{item.content}</Nav>
        </React.Fragment>);
    return (
        <div>
            <Burger open={open} setOpen={setOpen}/>
            <StyledTopNav open={open}>
                {nav}
            </StyledTopNav>
        </div>
    );
}
function Logo({children}) {
    const StyledLogo = styled(motion.a)`
        position: absolute;
        left: 1rem;
        top: 1rem;
        font-size: min(7.5vw, 36px);
        font-weight: 800;
        padding: 0px;
        color: #FFFFFF;
        text-decoration: none;
        `;
    
    return (
        <StyledLogo href="#" id="logo">
            {children}
        </StyledLogo>
    );
}

export function SideBar() { 
    // constants
    const mobileWidth = 1156;
    const mobileHeight = 700;
    let isMaxWidth = useMediaQuery({maxWidth: mobileWidth}) 
    let isMaxHeight = useMediaQuery({maxHeight: mobileHeight})
    let isMobile = isMaxWidth || isMaxHeight

    // style
    const HeroDesign = styled(motion.div)`
        ${()=>{

            if (isMobile) {
                return `
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width:200px;
                `;
            } else {
                return `
                    margin: 0;
                    padding: 0;
                    grid-column:2;
                    grid-row:1; 
                    `
            }
        }}

    `;
    
    // this styles/positions body content of the sidebar - nav + heros
    const StyledSidebar = styled(motion.div)`
        padding-top:32vh;
        display: grid;
        ${()=>!isMobile&&`
            grid-template-columns:fit-content auto;
            grid-gap:4vw;
            justify-content:start;
            `}
    `;
    
    // positioning and layout of social buttons
    const StyledSocial = styled(motion.div)`
        position:${()=>isMobile?"static":"absolute"};
        bottom: ${()=>isMobile?"0":"1rem"}; /*large gap from bottom, mobile only */
        padding-bottom: ${()=>isMobile?"50vh":"0rem"}; /*large gap from bottom, mobile only */
        padding-top: ${()=>isMobile?"40vh":"1em"};
        display: grid;
        justify-items: ${()=>isMobile?"center":"start"};
        padding-left:1rem;
    `;

    // controls multiple Nav components under certain events eg. media->showDescriptionUnderneath=True
    let nav = produce(navComponents, draft=>draft);

    // controls motion of main components
    //TODO this parent stagger isn't propogating to children, and a delay is currently manually being passed through
    const parentMotionVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.3,
            }
        }
    };
    const logoMotionVariant = {
        hidden:{ opacity:0},
        visible:{opacity:1}
    };
    const bodyMotionVariant = {
        hidden:{ opacity:0 },
        visible:{ 
            opacity:1,
            transition: {
                when: "beforeChildren",
                staggerChildren: isMobile?0:1,
            } 
        }
    };
    const socialMotionVariant = {
        hidden:{ opacity:0 },
        visible:{ opacity:1 }
    };

    return (
        <motion.div initial="hidden" animate="visible" style={{overflowX : 'hidden'}} variants={parentMotionVariant}>
            <motion.div variants={logoMotionVariant}>
                <Logo>Yukun Chen</Logo>
                {isMobile && <TopNav/>}
            </motion.div>
            <StyledSidebar variants={bodyMotionVariant}>
                <motion.div>
                    {nav.map((item, idx) => <Nav key={idx} motionDelay={idx*4*0.3} showDescription={true} showDescriptionUnderneath={isMobile}>{item.content}</Nav>)}
                </motion.div>
                <HeroDesign style={{paddingTop:isMobile?"0px":"20px", paddingLeft:isMobile?0:"220px", gridRow:isMobile?1:null}} alt="neural-net-brain">
                    <AnimatedAutoencoderButton/>
                </HeroDesign>                        
                <HeroDesign style={{width:isMobile?"275px":null, paddingTop:isMobile?"73px":"140px"}} alt="planet-orbit">
                    <AnimatedPlanetButton/>
                </HeroDesign>
            </StyledSidebar>
            <StyledSocial variants={socialMotionVariant}>
                <Socials/>
            </StyledSocial>
        </motion.div>
    );
}

