export const ADD_LUGAR = 'ADD_LUGAR';

export const addLugar = (nomeLugar, imagem) => {
    return {
        type: ADD_LUGAR, dadosLugar: { nomeLugar: nomeLugar, imagem: imagem }
    }
}