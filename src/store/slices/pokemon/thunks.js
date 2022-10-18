import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons())

        // TODO: realizar peticion http
        const res = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        console.log(res.data.results)

        const { data } = res

        dispatch(setPokemons( {pokemons: data.results, page: page +1}) )
    }
}