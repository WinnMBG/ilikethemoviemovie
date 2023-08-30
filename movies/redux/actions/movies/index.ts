import { getMovies } from "@/use_cases/methods"
import MovieService from '../../../service';

const service = new MovieService();

// ** GET Movies
export const getMoviesRedux = (params: any) => {
  return async dispatch => {
    const movies = await getMovies(service)
    dispatch({
        type: 'GET_MOVIES',
        data: movies
    })
  }
}

export const getVideosRedux = (params: any) => {
    return async dispatch => {
      const video = await service.getTrailerTMDB(params.id)
      dispatch({
          type: 'GET_VIDEOS',
          data: video
      })
    }
}