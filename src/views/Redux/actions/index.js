// import axios from 'axios';

export const login = token => ({
  type: 'ADD_AUTH', 
  token
})

// export const login =  data => {
//   console.log(data)
//   const headers = {
//     'Content-Type': 'application/json',
//   }

//   let token_generated = '';

//   axios.post('http://0.0.0.0:8000/api-token-auth/', data, {headers: headers})
//   .then(response => {
//     console.log(response.data);
//     // this.props.dispatch(login(response.data))
//     token_generated = response.data.token;
//   })
//   .catch(error => {
//     console.log(error)
//     // dispatch({type: ERROR_FINDING_USER})
//   });
//   return {
//     type: 'ADD_AUTH', 
//     token: token_generated
//   }
// }

export const actualizarWappalyzerEscaneado = (applications, meta, urls) => ({
  type: 'UPDATE_WAPP_ESCANEADO',
  applications,
  meta,
  urls
})

export const detalleSitioWeb = (applications, id, uri) => ({
  type: 'DETALLE_SITIO_WEB',
  applications,
  id,
  uri
})


// export const adicionarSitioWeb = sitiosweb => ({
//   type: 'ADICIONAR_SITIO_WEB',
//   sitiosweb
// })

export const adicionarSitioWeb = (
  {
    id = '',
    scheme = '',
    netloc = '',
    path = ''
  } = {}
) => ({
  type: 'ADICIONAR_SITIO_WEB',
  sitioweb: {
    id,
    scheme,
    netloc,
    path
  }
});

export const borrarSitiosWeb = () => ({
  type: 'DELETE_SITIOS_WEB',
  sitiosweb : []
});

// export const startAdicionarSitioWeb = (sitiowebData = {}) => {
//   return (dispatch) => {
//     const {
//       id = '',
//       netloc = '',
//       path = 0
//     } = sitioWebData;
//     const expense = { id, netloc, path };

//     // return database.ref('sitioweb').push(sitioweb).then((ref) => {
//     //   dispatch(adicionarSitioWeb({
//     //     id: ref.key,
//     //     ...expense
//     //   }));
//     // });
//   };
// };

// export const detalleSitioWeb = (
//   {
//     id = '', 
//     uri = '',
//     applications = ''
//   } = {}
//   ) => ({
//   type: 'DETALLE_SITIO_WEB', 
//   id,
//   uri,
//   applications
// })