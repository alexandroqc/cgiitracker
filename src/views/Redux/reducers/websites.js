const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_WEBSITE':
        return [
          ...state,
          {
            id: action.id,
            netloc: action.netloc,
            path: action.path,
            scheme: action.scheme
          }
        ]
      case 'ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos