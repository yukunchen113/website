import React from 'react';
import { NavMenu, NavBurgerMenu } from "./NavMenu";
import {GetWindowWidth,rootPage,screenMaxSizes} from "../Constants"


export default function Navigation({curPage, openPage}){
    const mediaWidth = GetWindowWidth();
    const isTablet = mediaWidth<=screenMaxSizes.tablet;
    return (
        <div>
            {isTablet&&<NavBurgerMenu curPage={curPage} openPage={openPage}/>}
            {/* show nav when full screen or when it's tablet screen and page is home */}
            {(!isTablet||(isTablet&&curPage===rootPage))&&<NavMenu curPage={curPage} openPage={openPage} showDescription={true}/>}
        </div>
    );
};