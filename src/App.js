import React, {useState, useEffect} from 'react';
import {motion} from "framer-motion";
import {Nav} from "./components/Navigation";

const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};
  

export default function App() {
    const [curPage, openPage] = useState("home");
    useEffect(()=>{
        console.log("current page: "+curPage)
    },[curPage]);
    return (
        // Top level animates in the app
        <motion.div initial="hidden" animate="visible" variants={list}>
            <Nav curPage={curPage} openPage={openPage}/>
        </motion.div>
    );
};