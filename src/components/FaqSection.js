import styled from 'styled-components'
import { StyledAbout } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import { fade } from '../animation'

export default function FaqSection(){
    const [ element, controls ] = useScroll()
    return(
        <StyledFaq variants={ fade } ref={element} initial="hidden" animate={ controls }>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo nihil nam mollitia eaque sit necessitatibus nisi doloremque fuga impedit.
                            </p>
                        </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                            </p>
                        </div>
                </Toggle>
                <Toggle title="Different Payment Methods">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                            </p>
                        </div>
                </Toggle>
                <Toggle title="What Products Do You Offer?">
                        <div>
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                            </p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }

`