export type Movie = {
    original_title: string,
    release_date: Date,
    poster_path: string,
    overview: string
}

export type FormattedMovie = {
    original_title: string,
    release_date: string,
    poster_path: string,
    overview: string
}