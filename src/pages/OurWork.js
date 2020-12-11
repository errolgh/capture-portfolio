import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { sliderContainer, pageAnimation, fade, photoAnim, lineAnim, slider } from '../animation'


export default function OurWork(){
    return(
        <StyledWork 
            exit="exit" 
            variants={pageAnimation} 
            initial="hidden" 
            animate="show"
            style={{background: '#fff'}}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider} ></Frame1>
                <Frame2 variants={slider} ></Frame2>
                <Frame3 variants={slider} ></Frame3>
                <Frame4 variants={slider} ></Frame4>
            </motion.div>

            <StyledMovie>
                <motion.h2 variants={ fade }>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <motion.img variants={photoAnim} src={athlete} alt="Athlete"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <motion.h2 variants={ fade }>The Racer</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="The Racer"/>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <motion.h2 variants={ fade }>Good Times</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <img src={goodtimes} alt="Good Times"/>
                    </Hide>
                </Link>
            </StyledMovie>
        </StyledWork>
    )
}

const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    background: white;
    h2{
        padding: 1rem 0rem;
    }
`

const StyledMovie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`


const Hide = styled.div`
    overflow: hidden;
`


const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
    background: #8effa0
`