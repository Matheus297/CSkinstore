"use client"
import styled from "styled-components";

import DropDownWhite from '../../assets/icons/drop_down_white.png'
import Link from "next/link";


interface Props {
    isActive?: boolean
}


export const Filter = styled.section`
    background-color: #111111;
    justify-content: center;
`;

export const FilterNav = styled.nav`
    width: 100%;
    justify-content: center;
    background-color: #111111;


`;

export const SelectBox = styled.select`
    color: #ddd;
    background-color: #111111;
    border: none;
    width: 180px;
    margin-left: 10px;
    padding: 0 10px;
    appearance: none;
    outline: none;
    cursor: pointer;


    
    background-image: url(${DropDownWhite.src});    
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 20px;
    padding-right: 50px;

`;

export const LinkCustom = styled(Link)<Props>`
    color: rgba(255, 255, 255, 0.4);
    padding: 5px 20px;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    text-decoration: none; 

    &:active {
        color: ${props => props.isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.5)'};
    }
`;


export const NavbarContent = styled.div`
    background-color: #111111;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 20px;
    

    @media only screen and (min-width: 200px) and (max-width: 961px) {
        flex-direction: column;
        align-items: center;
        
        ${LinkCustom} {
            margin-top: 5px;
        }

    }

`;