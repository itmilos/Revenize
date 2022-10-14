import styled from 'styled-components'
import {motion} from 'framer-motion'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Text from '../../components/Text'
import AnimatedSection from '../../components/AnimatedSection'

const LandingPage = () =>
    <AnimatedPage>
        <LeftSide>
            <AnimatedSection key='project-idea'>
                <Heading type='small'>Your Growth</Heading>
                <Text size='medium' marginBottom='30px'>During today’s economic challenges, our global team knows how to prioritize steps for you to grow
                </Text>

                {/*<Button onClick={() => history.push('/example')}>5 step</Button>*/}
            </AnimatedSection>
        </LeftSide>
        <RightSide
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 1.1 } }}
        >
        </RightSide>
    </AnimatedPage>

const LeftSide = styled.div`
    width: calc(70% - 50px);
    display: inline-block;
    vertical-align: top;
    padding: 0 50px 0 0;
`

const RightSide = styled(motion.div)`
    width: 30%;
    display: inline-block;
    vertical-align: top;
    padding-top: 50px;
`


export default LandingPage