
"use client";

import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // Importa o hook correto
import { FilterComponent } from "../../components/Filter/Filter";
import GridComponent from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import { Container } from "../styles";
import AvancedFilterComponent from '../../components/AvancedFilter/AvancedFilter';
import { MainContext } from '../../context/contextAPI';
import { getAllItens, getItem } from '@/services/services';



export default function Home() {
  const searchParams = useSearchParams()
  const search: any = searchParams.get('category')
  const MainContextProvider = useContext(MainContext);

  if (!MainContextProvider) {
    throw new Error('MainContext deve ser usado dentro de um MainProvider');
  }

  const { setItens, itens, setIsLoading } = MainContextProvider;
  
  useEffect(() => {
    setIsLoading(true)
      getAllItens()
        .then((resp: any) => {
          setItens(resp?.data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Erro ao obter itens', error);
        });
  }, []);

  useEffect(() => {
    const params = {
      category: search === '' ? null : search
    }

    const cleanParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== '' && value !== null && value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );

    if(search === 'category') {
      getItemByFilter(cleanParams);
    }
  }, [window.location.search]);

  const getItemByFilter = async (params?: {category?: string, name?: string, min?: number, max?: number, float?: string} | null) => {
    try {
      const response: any = await getItem(params);
      setItens(response?.data);
    } catch (error) {
      console.error('Erro ao obter itens', error);
    }
  };

  return (
      <Container>
        <Header />
        <FilterComponent />
        <AvancedFilterComponent />
        <GridComponent itens={itens} />
      </Container>
  );
}
