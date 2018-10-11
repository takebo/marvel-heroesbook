const initialState = {
  search: null,
  favorites: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FAVORITE':
      return {
        ...state,
        favorites: state.favorites.concat({...action.hero, fav: 'active'})
      }
    case 'SEARCH':
      return {
        ...state,
        search: null
      }

    default:
      break
  }

  return state
}

export default reducer
