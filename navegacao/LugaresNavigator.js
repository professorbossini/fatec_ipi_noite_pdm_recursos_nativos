import { createStackNavigator } from 'react-navigation-stack';
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import MapaTela from '../telas/MapaTela';
import NovoLugarTela from '../telas/NovoLugarTela';
import { createAppContainer } from 'react-navigation';


const LugaresNavigator = createStackNavigator({
    ListaDeLugares: ListaDeLugaresTela,
    DetalhesDoLugar: DetalhesDoLugarTela,
    NovoLugar: NovoLugarTela,
    Mapa: MapaTela
});

export default createAppContainer(LugaresNavigator);
