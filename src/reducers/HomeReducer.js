const initialValues = {
  estados:[],
  municipios:[],
  distritos:[]
}

const HomeReducer = (state=initialValues, action) =>{

  switch(action.type){
      case 'GET_ESTADOS': 
      return {...state, estados:action.estados};
      case 'GET_MUNICIPIOS':
      return {...state, municipios:action.municipios}   
      case 'GET_DISTRITOS': 
      return {...state, distritos:action.distritos}
      default:
        return state;
    }
  }

  export default HomeReducer
