import styled from 'styled-components'
import { StyledAbout } from '../styles'
import Toggle from './Toggle'

export default function FaqSection(){
    return(
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <Toggle>
                <div className="question">
                    <h4>How Do I Start?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nemo nihil nam mollitia eaque sit necessitatibus nisi doloremque fuga impedit.
                        </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
            <Toggle>
                <div className="question">
                    <h4>Daily Schedule</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                        </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Toggle>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <div>
                    <h4>What Products Do You Offer?</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                    </p>
                </div>
            </div>
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