import { Box, Slider } from "@mui/material";
import styled from "styled-components";
import { NumericComponent } from "../InputCurrency/styles";

interface Props {
    $isActive?: boolean   
}


export const Container = styled.div`
    margin: 0 auto;
    max-width: 1800px;
`;

export const Content = styled.div`
    background: #111111;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;


export const SliderComponent = styled(Slider)`

    &.css-1ntcwl2-MuiSlider-root{
        color: #DE8502;
    }


    & .MuiSlider-markLabel{
        color: #ddd;
    }

    & .MuiSlider-markLabelActive{
        color: #fff;
    }

`;

export const InputTypeSearch = styled.input`
    height: 40px;
    background: #111111;
    color: #ddd;
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px;
    width: 100%;
    padding: 20px;
    margin-left: 10px;
    outline: none;

`;

export const WrapperButtonDesc = styled.button<Props>`
    height: 40px;
    background: #111111;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 8px;
    width: 140px;
    margin-left: 10px;
    outline: none;
    
    & img {
        transform: ${props => props.$isActive ? `rotateX(200deg)` : 'rotateX(0deg)'};
        transition: transform 0.6s ease-in-out; 
        box-shadow: none !important;
    }
    

`


export const WrapperButtonSearch = styled.button`
    height: 40px;
    background: #DE8502;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    border-radius: 8px;
    width: 250px;
    padding: 20px;
    margin-left: 10px;
    outline: none;

`
export const BoxStyleButtons = styled(Box)`
    display: flex;
    
`;

export const BoxStyleSlider = styled(Box)`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const BoxStyle = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 10px;


    @media only screen and (min-width: 200px) and (max-width: 961px) {
        flex-direction: column;
        
        ${NumericComponent} {
            margin-left: 10px;
            width: 100%;
            margin-top: 5px;
        }

        ${BoxStyleButtons} {
            display: flex;
            margin-top: 5px;
            width: 100%;
            justify-content: flex-end;
        }

        ${BoxStyleSlider} {
            margin-bottom: 20px;
            width: 400px;
        }
    }


`;





