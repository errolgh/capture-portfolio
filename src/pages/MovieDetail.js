import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import movieState from '../movieState'
import { useState, useEffect } from 'react'


export default function MovieDetail(){
    const history = useHistory()
    const url = history.location.pathname
    const [ movies, setMovies ] = useState(movieState)
    const [movie, setMovie ] = useState(null)

    useEffect(()=>{
        const currentMovie = movies.filter(stateMovie => stateMovie.url === url)
        setMovie(currentMovie)
    }, [movies, url])

    return(
        <div>
            <h1>MovieDetail</h1>
        </div>
    )
}