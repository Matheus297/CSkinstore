import { NumericFormat } from "react-number-format";
import styled from "styled-components";


export const NumericComponent = styled(NumericFormat)`
    background-color: #111111;
    color: #fff;
    outline: none;
    border: none;
    border: 1px solid rgba(255, 255, 255,0.2);
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 20px;
    height: 40px;
    padding: 20px;

    &::placeholder {
        color: #ddd;
    }

`;
