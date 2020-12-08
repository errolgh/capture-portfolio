import home1 from '../img/home1.png'
import { motion } from 'framer-motion'
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles'

export default function AboutSection(){
    return(
        <StyledAbout> 
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2>true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="A photographer with their camera"/>
            </StyledImage>
        </StyledAbout>
    )
}