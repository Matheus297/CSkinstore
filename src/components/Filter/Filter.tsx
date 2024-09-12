import React, { ReactNode, useContext } from 'react'
import { useEffect, useState } from "react"
import { Filter, FilterNav, LinkCustom, NavbarContent } from "./styles"
import { getItem } from "../../services/services"
import { useSearchParams } from 'next/navigation';
import { MainContext } from '@/context/contextAPI';



interface Props {
    children?: ReactNode
}


export const FilterComponent = ({ children }: Props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const searchParams = useSearchParams();

    const MainContextProvider = useContext(MainContext);

    if (!MainContextProvider) {
        throw new Error('MainContext deve ser usado dentro de um MainProvider');
    }

    const { setItens, setIsLoading} = MainContextProvider;

    const category = searchParams.get('category');

    useEffect(() => {
        if (category) {
          setIsLoading(true)
          const params = { category };
    
          getItem(params)
            .then((resp: any) => {
              setItens(resp?.data);
              setIsLoading(false)
              
            })
            .catch((error) => {
                setIsLoading(false)
            });
        }
      }, [category]);

    
    return (
        <Filter>
            <FilterNav>
                <NavbarContent id="navbarBasicExample">
                            <LinkCustom isActive={category === 'sniper'} href={{
                                    query: { category: 'sniper' }
                                }}>
                                <h1>Rifle de precisão</h1>
                            </LinkCustom>
                            <LinkCustom isActive={category === 'assalt'}
                                href={{
                                    query: { category: 'assalt' }
                                }} 
                                passHref
                            >
                                <h1>Rifle de assalto</h1>
                            </LinkCustom>
                            <LinkCustom
                                isActive={category === 'sub'}
                                href={{
                                    query: { category: 'sub' }
                                }} 
                                passHref
                            >
                                <h1>Metralhadora</h1>
                            </LinkCustom>
                            <LinkCustom
                                isActive={category === 'lmg'}
                                href={{
                                    query: { category: 'lmg' }
                                }} 
                                passHref
                            >
                                <h1>Rifle pesado</h1>
                            </LinkCustom>
                            <LinkCustom
                                isActive={category === 'shotgun'}
                                href={{
                                    query: { category: 'shotgun' }
                                }} 
                                passHref
                            >
                                <h1>Escopeta</h1>
                            </LinkCustom>
                            <LinkCustom
                                isActive={category === 'gloves'}
                                href={{
                                    query: { category: 'gloves' }
                                }} 
                                passHref
                            >
                                <h1>Luva</h1>
                            </LinkCustom>
                            <LinkCustom isActive={category === 'knifes'}
                                href={{
                                    query: { category: 'knifes' }
                                }} 
                                passHref
                            >
                                <h1>Faca</h1>
                            </LinkCustom>
                </NavbarContent>
            </FilterNav>
        </Filter>
    )
}