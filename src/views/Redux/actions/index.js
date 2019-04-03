
export const login = token => ({
  type: 'ADD_AUTH', 
  token
})

export const actualizarWappalyzerEscaneado = (applications, meta, urls) => ({
  type: 'UPDATE_WAPP_ESCANEADO',
  applications,
  meta,
  urls
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
})

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