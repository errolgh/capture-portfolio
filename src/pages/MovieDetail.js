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
        setMovie(currentMovie[0])
    }, [movies, url])

    return(
        <>
            {movie && (
                <StyledDetails>
                    <StyledHeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie"/>
                    </StyledHeadLine>
                    <StyledAwards >
                        {movie.awards.map(award => (
                            <Award 
                                title={award.title} 
                                description={award.description} 
                                key={award.title}
                            />
                        ))}
                    </StyledAwards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie"/>
                    </ImageDisplay>
                </StyledDetails>
            )}
        </>
    )
}

const StyledDetails = styled.div`
    color: white;
`

const StyledHeadLine = styled.div`
    min-height: 90vh;
    margin-top: 20vh;
    position: relative;
    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`


const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`

const Award = ( {title, description} ) => {
    return (
        <div>
            <StyledAward>
                <h3>{title}</h3>
                <div className="line" />
                <p>{description}</p>
            </StyledAward>
        </div>
    )
}

const ImageDisplay = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`