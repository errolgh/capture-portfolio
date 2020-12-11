import home1 from '../img/home1.png'
import { motion } from 'framer-motion'
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from '../styles'
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

export default function AboutSection(){
    return(
        <StyledAbout> 
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2 variants={ titleAnim }>
                            We work to make
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={ titleAnim }>
                            your <span>dreams</span> come
                        </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={ titleAnim }>
                            true.
                        </motion.h2>
                    </StyledHide>
                </motion.div>
                <motion.p variants={ fade }>
                    Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
                </motion.p>
                <motion.button variants={ fade }>Contact Us</motion.button>
            </StyledDescription>
            <StyledImage>
                <motion.img src={home1} alt="A photographer with their camera" variants={ photoAnim }/>
            </StyledImage>
            <Wave />
        </StyledAbout>
    )
}