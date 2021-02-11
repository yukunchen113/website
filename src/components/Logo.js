import React from 'react';
import styled from "styled-components"
import {motion} from "framer-motion"

const StyledLogo = styled(motion.div)`
    position:fixed;
    z-index:9;
    top: 0.5rem;
    font-size: min(7.5vw, 36px);
    font-weight: 800;
    padding: 0px;
    color: #FFFFFF;
    user-select: none;
    cursor:pointer;
    text-decoration: none;
`;

export default function Logo({openPage, children}) {
    return (
        <StyledLogo id="logo">
            <div onClick={()=>{openPage("home")}}>
                {children}
            </div>
        </StyledLogo>
    );
}