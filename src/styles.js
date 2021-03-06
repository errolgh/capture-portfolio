import styled from 'styled-components'
import { motion } from 'framer-motion'

// name this const the same as the parent div (wrapper div for component)
export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`

export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    z-index: 2;
    h2{
        font-weight: lighter;
    }
`

export const StyledImage = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const StyledHide = styled.div`
    overflow: hidden;
`
