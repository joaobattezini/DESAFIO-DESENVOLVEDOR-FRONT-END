import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import {
    Button,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown
} from 'reactstrap'

const Home = (props) => {
    const { estados, municipios, distritos, getDistritos, getMunicipios, dispatch, store } = props
    const [estadoSelect, setEstadoSelect] = useState('Estado');
    const [municipioSelect, setMunicipioSelect] = useState('Municipio');
    const handleEstado = (e, idEstado, nomeEstado) => {
        dispatch(getMunicipios(idEstado))
        setEstadoSelect(nomeEstado)
    }
    const handleMuncipio = (e, idMunicipio, nomeMunicipio) => {
        dispatch(getDistritos(idMunicipio))
        setMunicipioSelect(nomeMunicipio)
    }
    return (
        <div className='paiDeTodos'>
            <div className='divExercicio'><h1>Exercício REACT</h1></div>
            <div className='estadoSelect'>
            <UncontrolledDropdown className="filhoEstadoSelect" group>
                <Button className='buttonEstadoSelect'>
                    {estadoSelect}
                </Button>
                <DropdownToggle className='toggleEstadoSelect'
                    caret
                />
                <DropdownMenu>
                    {estados?.map((estado, index) => {
                        return (
                            <DropdownItem key={index}  onClick={e => handleEstado(e, estado.id, estado.nome)}>
                                {estado.nome}
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </UncontrolledDropdown>
            </div>
            <div className='municipioSelect'>
            <UncontrolledDropdown className="filhoMunicipioSelect" group>
                <Button className='buttonMunicipioSelect'>
                    {municipioSelect}
                </Button>
                <DropdownToggle className='toggleMunicipioSelect'
                    caret                  
                />
                <DropdownMenu>
                    {municipios?.map((municipio, index) => {
                        return (
                            <DropdownItem key={index*1000} onClick={e => handleMuncipio(e, municipio.id, municipio.nome)}>
                                {municipio.nome}
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </UncontrolledDropdown>
            </div>
            {distritos
                ? (<div>
                    <h1 className='divMicro'>Microrregiao : {distritos[0].municipio.microrregiao.nome}</h1>
                    <h1 className='divMeso'>Mesorregião : {distritos[0].municipio.microrregiao.mesorregiao.nome}</h1>
                    <h1 className='divUf'>UF : {distritos[0].municipio.microrregiao.mesorregiao.UF.sigla}</h1>
                    {/* <h1>Região do Municipio : {distritos[0].municipio.regiao-imediata}</h1> */}
                </div>
                ): ""}
        </div>
    );
}

export default Home