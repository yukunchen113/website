import { useEffect, useState } from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
export const Bold = styled.div`
    font-weight: 500;
`;

export const sideBarWidth = "max(23vw,315px)";

export const screenMaxSizes = {
    phone: 740,
    tablet: 1050,
};

export const backgroundColor = "#09293A"

export const standardColumnSpace = `calc((${sideBarWidth} - 13.5rem) / 2)`

export const scrollBarWidth = "0.8vw"

export const rootPage = "/";

export function GetWindowWidth(){
    // window get width is from https://youtu.be/dpw9EHDh2bM?t=2547
    const [width, setwidth] = useState(typeof window !== "undefined"?window.innerWidth:1000);
    useEffect(()=>{
        const handleResize = () => setwidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])
    return width;
}

export function GetWindowHeight(){
    // window get width is from https://youtu.be/dpw9EHDh2bM?t=2547
    const [height, setheight] = useState(typeof window !== "undefined"?window.innerHeight:1000);
    useEffect(()=>{
        const handleResize = () => setheight(window.innerHeight);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[])
    return height;
}


export const NoHighlightMobileButtonTap = styled(motion.div)`
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
`;