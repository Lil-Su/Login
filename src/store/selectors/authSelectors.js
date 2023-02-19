export const currentUserSelector = (stor) => {
  return stor.authReducer.curentUser
}

export const errorSelector = (stor) => {
  return stor.authReducer.error
}