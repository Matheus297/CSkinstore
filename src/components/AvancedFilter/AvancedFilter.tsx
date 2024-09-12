import React, { useContext, useState } from 'react'
import { BoxStyle, BoxStyleButtons, BoxStyleSlider, Container, Content, InputTypeSearch, SliderComponent, WrapperButtonDesc, WrapperButtonSearch } from './styles'
import CurrencyInput from '../InputCurrency/CurrencyInput';
import { getItem } from '../../services/services';
import { MainContext } from '../../context/contextAPI';


import FilterImage from '../../assets/icons/filter_asc.png'
import Image from 'next/image';


const marks = [
    {
      value: 0,
      label: 'FN',
    },
    {
      value: 30,
      label: 'FT',
    },
    {
      value: 60,
      label: 'WM',
    },
    {
      value: 100,
      label: 'BC',
    },
  ];
  

 const AvancedFilterComponent = () => {
    const [minValue, setMinValue] = useState<string>('')
    const [maxValue, setMaxValue] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [float, setFloat] = useState<string>('')

    const MainContextProvider = useContext(MainContext);

    if (!MainContextProvider) {
        throw new Error('MainContext deve ser usado dentro de um MainProvider');
    }

    const { setItens, setAscFilter, ascFilter, setIsLoading} = MainContextProvider;

    function valuetext(value: number) {
        value = value / 100
        setFloat(String(value))
        return value
      }

    const updateQueryParams = (params: any) => {
        const cleanParams = Object.fromEntries(
            Object.entries(params).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
            .map(([key, value]) => [key, String(value)])
        );
        
        const searchParams = new URLSearchParams(cleanParams);
        
        window.history.replaceState(null, '', `?${searchParams.toString()}`);
    };

    
    const onSubmit = () => {
        setIsLoading(false)
        const params = {
            name: name,
            min: Number(minValue) === 0 ? null : Number(minValue),
            max: Number(maxValue) === 0 ? null : Number(maxValue),
            float: String(float) === '0' ? null :  String(float)
        }

        const filteredParams = Object.entries(params)
        .filter(([key, value]) => value !== '' && value !== null && value !== undefined)
        .reduce((acc: any, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});

        getItem(filteredParams)
        .then((resp) => {
            setItens(resp?.data)
            setIsLoading(false)
        })
        updateQueryParams(params)


    }

    return (
        <Container>
            <Content>
            <BoxStyleSlider>
                        <SliderComponent
                            defaultValue={0}
                            step={1}
                            onChange={(e: any) => setFloat(e)}
                            valueLabelDisplay="auto"
                            valueLabelFormat={valuetext}
                            color={'warning'}
                            marks={marks}
                        />
                </BoxStyleSlider>
                <BoxStyle>
                    <InputTypeSearch value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Nome do item' />
                    <CurrencyInput value={minValue} setValue={setMinValue} />
                    <CurrencyInput value={maxValue} setValue={setMaxValue} />
                    <BoxStyleButtons>
                        <WrapperButtonDesc $isActive={ascFilter} onClick={() => setAscFilter(!ascFilter)}>
                            <Image src={FilterImage} alt='carrinho' />
                        </WrapperButtonDesc>
                        <WrapperButtonSearch onClick={() => onSubmit()}>BUSCAR</WrapperButtonSearch>
                    </BoxStyleButtons>   
                </BoxStyle> 
                
            </Content>
        </Container>
    )
}

export default AvancedFilterComponent