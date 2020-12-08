import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

export default function AboutUs(){
    return(
        <motion.div exit="exit" variants={pageAnimation} intial="hidden" animate="show">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}