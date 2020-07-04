import { ADD_LUGAR } from "./lugares-actions";

import Lugar from '../modelo/Lugar'

const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {

    switch (action.type) {
        case ADD_LUGAR:
            const l = new Lugar(new Date().toString(), action.dadosLugar.nomeLugar);
            return {
                lugares: estado.lugares.concat(l)
            }
        default:
            return estado;
    }
}