const initialState = {
  name: 'Vadim'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ('SET_NAME'):
      return {
        name: action.payload
      }
  }
  return state
}

export default reducer
