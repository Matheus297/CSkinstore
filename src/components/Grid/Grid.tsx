import React, { useContext } from 'react'
import { ButtonBuy, ButtonCart, Card, CardImage, CardTitle, FloatNumber, FloatString, Container, GridContainer, Price, WrapperButtons, WrapperCardImage } from "./styles"

import BuyIcon from '../../assets/icons/comprar.png'
import CartIcon from '../../assets/icons/carrinho.png'
import Image from "next/image"
import { ItemI } from '../../model/items'
import GradientCircularProgress from '../loader/Loader'
import { MainContext } from '@/context/contextAPI'

interface GridProps {
    itens: ItemI[];
}

export const GridComponent = ({itens}: GridProps) => {

    const MainContextProvider = useContext(MainContext);

    if (!MainContextProvider) {
        throw new Error('MainContext deve ser usado dentro de um MainProvider');
    }

    const { isLoading, setIsLoading} = MainContextProvider;

    const floatNumberToString = (float: string): string => {
        const floatNumber = Number(float)
        if (floatNumber >= 0 && floatNumber <= 0.07) {
            return "Factory New";
        } else if (floatNumber > 0.07 && floatNumber <= 0.15) {
            return "Minimal Wear";
        } else if (floatNumber > 0.15 && floatNumber <= 0.38) {
            return "Field-Tested";
        } else if (floatNumber > 0.38 && floatNumber <= 0.45) {
            return "Well-Worn";
        } else if (floatNumber > 0.45 && floatNumber <= 1) {
            return "Battle-Scarred";
        } else {
            return "Invalid float value";
        }
    }

    const getColorRarity = (value: string): any => {
        switch(value) {
            case 'Contraband': {
                return '#d1a30b'
             }
            case 'Convert': {
               return '#E74A4A'
            }
            case 'Classified': {
                return '#D32CE6'
             }
            default:
                return '#fff'; // Cor padrão, se não houver correspondência
            }
    }

    const formattedCurrencyBRL = (value: number) => {
        const formatter = new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(value)
        return formatter
    }

    return (
        <Container isLoading={isLoading}>
            {!isLoading ? (
                <GridContainer>
                {itens && itens.map((item) => {
                    return (
                    <Card
                        key={item.id}
                    >
                        <CardTitle>{item?.name}</CardTitle>
                        <FloatString>{floatNumberToString(item.float)}</FloatString>
                        <WrapperCardImage color={getColorRarity(item.rarity)}>
                            <CardImage color={getColorRarity(item.rarity)} src={item.image} />
                        </WrapperCardImage>
                        <FloatNumber>{item.float}</FloatNumber>
                        <Price>{formattedCurrencyBRL(item.price)}</Price>
                        <WrapperButtons>
                            <ButtonBuy>
                              COMPRAR <Image style={{width: '22px', marginLeft: '10px'}} src={BuyIcon} alt='comprar' />
                            </ButtonBuy>
                            <ButtonCart>
                            <Image src={CartIcon} alt='carrinho' />
                            </ButtonCart>
                        </WrapperButtons>
                    </Card>
                    )
                })}
                </GridContainer>
            ): (
                <GradientCircularProgress />
            )}
        </Container>
    )
}


export default GridComponent