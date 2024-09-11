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