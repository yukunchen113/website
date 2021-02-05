import autoencoder from '../images/autoencoder.svg'
import planet from '../images/planet.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import selection_arrow from "../images/selection_arrow.svg"
import styled from 'styled-components'

const BoldedNavComponents = styled.div`
    font-weight: 500;
`;

export const navComponents = [// first is the nav, rest is the description
    {id:0,content:{heading:"About Me", link:"#", description:["efficient.", "analytical.", <BoldedNavComponents>collaboration.</BoldedNavComponents>]}},
    {id:1,content:{heading:"Projects", link:"#", description:[<BoldedNavComponents>representation learning</BoldedNavComponents>, "knowledge graph", "website"]}},
    {id:2,content:{heading:"Experience", link:"#", description:[<BoldedNavComponents>machine learning</BoldedNavComponents>, <BoldedNavComponents style={{color:"#CBA1FF"}}>software for space</BoldedNavComponents>]}},
];


const herodesigns = {
    autoencoder,
    planet
};

const socials = [
    {id:0,
        icon:linkedin, 
        link:"https://www.linkedin.com/in/yukun-chen/"},
    {id:1,
        icon:github, 
        link:"https://github.com/yukunchen113"}
];

export {
    herodesigns,
    socials,
    selection_arrow

};
