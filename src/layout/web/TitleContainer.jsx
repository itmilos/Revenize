import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import Heading from '../../components/Heading'
import Text from '../../components/Text'

const AnimatedTitle = ({
    titleKey,
    heading,
    description
}) => <AnimatedDiv
        key={titleKey}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: .3 }}
    >
        <Heading>{heading}</Heading>
        <Text>{description}</Text>
    </AnimatedDiv>

const TitleContainer = () => {
    const location = useLocation()

    switch (location.pathname) {
        case '/':
            return <AnimatedTitle
                titleKey='t/'
                heading='We help brands succeed on Amazon'
                description=''
            />
        case '/example':
            return <AnimatedTitle
                titleKey='t/example'
                heading='5-Step approach to win'
                description='We win together with our approach'
            />
        case '/services':
            return <AnimatedTitle
                titleKey='t/example'
                    heading='Where we can help you'
                description=''
            />
        // case '/qr':
        //     return <AnimatedTitle
        //         titleKey='t/qr'
        //         heading='QR NFT'
        //         description='Show the people who are you'
        //     />
        case '/about':
            return <AnimatedTitle
                titleKey='t/about'
                heading='Who are we?'
                description='Get to know us a bit better'
            />
        case '/about2':
            return <AnimatedTitle
                titleKey='t/about2'
                heading='Who are we?'
                description='Get to know us a bit better'
            />
    }
}

const AnimatedDiv = styled(motion.div)`
    width: 70%;
    height: 84px;
    padding: 0 15% 0;
`

export default TitleContainer
