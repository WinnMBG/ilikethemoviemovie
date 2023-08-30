

import { getMovies, getVideoById } from "@/use_cases/methods"
import MovieService from '@/service/service'
// import { configDotenv } from "dotenv";
// configDotenv();

// const service = new MovieService(process.env.TMDB_API_KEY!);


// ** GET Movies
export const getMoviesRedux = async (dispatch: any, service: MovieService) => {
    await service.getToken()
    const movies = await getMovies(service, 'A')
    dispatch({
        type: 'GET_MOVIES',
        data: movies
    })
}

export const getVideosRedux = async (dispatch: any, service: MovieService, id: string) => {
      await service.getToken()
      const video = await getVideoById(service, id)
      dispatch({
          type: 'GET_VIDEOS',
          data: video
      })
}