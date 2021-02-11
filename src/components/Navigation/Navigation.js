import React from 'react';
import { NavMenu, NavBurgerMenu } from "./NavMenu";
import {GetWindowWidth,screenMaxSizes} from "../Constants"


export default function Navigation({curPage, openPage}){
    const mediaWidth = GetWindowWidth();
    const showBurgerMenu = mediaWidth<=screenMaxSizes.tablet;
    return (
        <div>
            {showBurgerMenu&&<NavBurgerMenu curPage={curPage} openPage={openPage}/>}
            {/* show nav when full screen or when it's tablet screen and page is home */}
            {(!showBurgerMenu||(showBurgerMenu&&curPage==="home"))&&<NavMenu curPage={curPage} openPage={openPage} showDescription={true}/>}
        </div>
    );
};