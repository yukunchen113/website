import { useEffect, useState } from 'react';
import styled from "styled-components";
export const Bold = styled.div`
    font-weight: 500;
`;

export const sideBarWidth = "max(23vw,315px)";

export const screenMaxSizes = {
    phone: 740,
    tablet: 1200,
};

export function GetWindowWidth(){
    // window get width is from https://youtu.be/dpw9EHDh2bM?t=2547
    const [width, setwidth] = useState(window.innerWidth);
    useEffect(()=>{
        const handleResize = () => setwidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[width, setwidth])
    return width;
}