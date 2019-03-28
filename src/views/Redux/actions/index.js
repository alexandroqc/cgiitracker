
export const login = token => ({
  type: 'ADD_AUTH', 
  token
})


export const listarSitioWeb = sitiosweb => ({
  type: 'LISTAR_SITIOS_WEB',
  sitiosweb
})