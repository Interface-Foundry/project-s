// nothing to do here, but we need products node in redux store
export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_CLIENT_ID':
      return [
        ...action.response
      ]
    default:
      return state
  }
}
