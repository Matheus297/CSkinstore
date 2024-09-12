import styled from "styled-components";


export interface Props {
    $isLoading?: boolean
}

export const Container = styled.div<Props>`
    margin: 0 auto;
    max-width: 1850px;
    background-color: #111111;
    height: 100%;

    ${props => props.$isLoading && `
        
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100vh - 50%);
    `}
`;


export const GridContainer = styled.div`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); 
      gap: 25px; 
      padding: 20px; 
      align-items: center; 
      justify-items: center; 
      align-items: center; 
      justify-items: center; 
`;

export const CardImage = styled.img`
    width: 100%;
    object-fit: contain; 
    position: relative; 
    z-index: 1; 
`;


export const WrapperCardImage = styled.div`
    width: 100%;
    height: 200px;
    border-bottom-color: ${props => props.color ? `${props.color}` : 'orange'};
    border-bottom-width: 1;
    border-bottom-style: solid;
    background: transparent;
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1; 
        filter: blur(10px); 
    }

    ${CardImage} {
                filter: ${({ color }) => color ? `drop-shadow(0px 20px 50px ${color})` : 'blue'};
    }
`;

export const Card = styled.div`
      background-color: #111111;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 280px;
      padding: 20px;
      overflow: hidden;
      transition: transform 0.6s ease-in-out;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(222,133,2, 0.7);
        cursor: pointer;
        
        &:hover img {
            transform: rotate(10deg); 
            transition: transform 0.6s ease-in-out;
            box-shadow: none !important;
        }


    }
`;


export const CardTitle = styled.h1`
    color: #fafafa;
    font-size: 1rem;
    font-weight: bold;

`;


export const FloatString = styled.p`
    color: #eeee;
    font-size: .8rem;
    font-style: italic;
`;


export const FloatNumber = styled.p`
    color: #eeee;
    font-size: .8rem;
    margin-top: 10px;

`;

export const Price = styled.span`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
`;

export const WrapperButtons = styled.div`
    margin-top: 20px;
    display: flex;
`;

export const ButtonBuy = styled.button`
    width: 100%;
    height: 40px;
    background-color: #DE8502;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;

    &:hover {
        border: 1px solid #fff;
    }
`;

export const ButtonCart = styled.button`
    width: 40%;
    height: 40px;
    background-color: #DE8502;
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 10px;
    margin-left: 5px;

    &:hover {
        border: 1px solid #fff;
    }
`;

export const Icon = styled.img`
    width: 40%;
    height: 40px;

`;