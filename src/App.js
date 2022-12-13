
import './App.css';
import './components/Home.css'
import React, {useEffect } from 'react'
import Home from './components/Home';
import {getEstados} from './actions/index'
import {getMunicipios} from './actions/index'
import {getDistritos} from './actions/index'
import { useDispatch, useSelector } from 'react-redux'

function App(props) {
    const dispatch = useDispatch()
    const store = useSelector(state => state)
    useEffect(() => {
        dispatch(getEstados())
    }, [])
  return (
   <>
    <Home 
    dispatch = {dispatch}
    store = {store}
    getEstados = {getEstados}
    getDistritos = {getDistritos}
    getMunicipios = {getMunicipios}
    estados = {store.estados}
    municipios = {store.municipios}
    distritos = {store.distritos}
    />
   </>
  );
}

export default App;
