// import initialState from '../initState'

const initialState = {
  someFeature: 1,
  messages: [
    {
      author: 'John',
      text: 'Hello guys!',
      timestamp: new Date()
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_MESSAGE_STARTED':
      const newList = [
        {
          author: 'Vadim',
          text: action.payload,
          timestamp: new Date(),
          fromMe: true
        },
        ...state.messages
      ]
      return {
        ...state,
        messages: [...newList]
      }

    case 'GET_POSTS_FAILURE':
      console.log(action.payload)
      return state

    case 'GET_POSTS_SUCCESS':
      return action.payload
  }
  // console.log(state)
  return state
}

export default reducer
