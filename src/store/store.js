import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slices/counter/counterSlice'
import { todosApi } from './apis/todosApi'
import pokemonReducer from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  // A middleware is a function that is executed between the dispatching of an action and the moment it reaches the reducer.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(todosApi.middleware)
})