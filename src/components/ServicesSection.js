import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles'
import { scrollReveal } from '../animation'
import { useScroll } from './useScroll'


export default function ServicesSection() {
    const [ element, controls ] = useScroll()
    return(
        <StyledServices variants={ scrollReveal } animate={controls} initial="hidden" ref={element}>
            <StyledDescription>
                <h2>High <span>quality</span> service.</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <img src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={diaphragm} />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon">
                            <img src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={home2} alt="Camera" />
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const StyledCard = styled.div`
    flex-basis: 20rem;
    flex-wrap: wrap;
    .icon{
        display: flex;
        align-items: center;

        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`