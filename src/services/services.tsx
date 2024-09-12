"use client"
import api from "../api/api"

export const getAllItens = () => {
    return new Promise((resolve, reject) => {
        try {
            const response = api.get('/skins')
            resolve(response)
        } catch (error) {
            reject(error)
        }
    })
   
}



export const getItem = async (params?: {category: string,  name?: string, min?: number, max?: number, float?: string} | null | any) => {
    try {
      console.log('Parâmetros:', params);
      // Certifique-se de passar os parâmetros corretamente para a chamada da API
      const response = await api.get('/skin', {
        params: params
      });
      return response;
    } catch (error) {
      console.error('Erro na requisição API:', error);
      throw error; // Re-throws the error to be caught in the calling function
    }
  };