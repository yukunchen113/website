import React from 'react';
import {motion} from "framer-motion";
import styled from "styled-components";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import {GetWindowWidth, screenMaxSizes} from "./Constants"
const StyledSocials = styled.div`
    display:flex;
    justify-content: center;
    cursor: pointer;
    user-select:none;
    align-items: center;
    height:${props=>props.isMobile?"100vh":null}
`;

export default function Socials() {
    const isMobile = GetWindowWidth()<=screenMaxSizes.phone;
    return (
        <StyledSocials isMobile={isMobile}>
            <motion.a href={"https://github.com/yukunchen113"} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <img src={github} style={{paddingLeft:"8px"}} alt="github"/>
            </motion.a>
            <motion.a href={"https://www.linkedin.com/in/yukun-chen/"} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                <img src={linkedin} style={{paddingLeft:"8px"}} alt="github"/>
            </motion.a>
        </StyledSocials>
    );
};