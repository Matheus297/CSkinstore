"use client"
import React, { createContext, useState, ReactNode, SetStateAction, Dispatch, useEffect } from 'react';
import { ItemI } from '../model/items';

export interface MainContextProps {
  itens: ItemI[];
  setItens: Dispatch<SetStateAction<ItemI[]>>;
  ascFilter: boolean,
  setAscFilter: Dispatch<SetStateAction<boolean>>,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
}

export const MainContext = createContext<MainContextProps | undefined>(undefined);

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [itens, setItens] = useState<ItemI[]>([])
  const [ascFilter, setAscFilter] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const handleChange = () => {
      const sortedItems = [...itens]; 
  
      if (ascFilter) {
        sortedItems.sort((a, b) => b.price - a.price); 
        sortedItems.sort((a, b) => a.price - b.price); 
      }
  
      setItens(sortedItems); 
    };
  
    handleChange(); 
  }, [ascFilter]); 


  return (
    <MainContext.Provider value={{ itens, setItens, ascFilter, setAscFilter, isLoading, setIsLoading }}>
      {children}
    </MainContext.Provider>
  );
};