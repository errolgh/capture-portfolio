import styled from 'styled-components'
import { StyledAbout } from '../styles'

export default function FaqSection(){
    return(
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods</h4>
                <div>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Products Do You Offer?</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, earum.
                </p>
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