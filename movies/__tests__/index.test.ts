import '@testing-library/jest-dom'
import MovieService from '@/service/service'
import { getMovies, getMovieById } from '@/use_cases/methods'
import { assert } from 'chai'
 
describe('Movies', () => {

  it('get movies data', async () => {
    const movieService = new MovieService()
    await movieService.getToken()
    assert(movieService !== undefined) 
    const movies = await getMovies(movieService, 'A')
    console.log('movies', movies?.length)
    assert(movies?.length !== null)
  })

  it('get movies by id', async () => {
    const movieService = new MovieService()
    assert(movieService !== undefined) 
    const movie = await getMovieById(movieService, '664031')
    assert(movie?.original_title === 'Sul più bello')
  })
})