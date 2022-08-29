import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import AnimatedPage from './AnimatedPage'
import Heading from '../../components/Heading'
import Button from '../../components/Button'

import optimize from '../../assets/optimize.png'
import grow from '../../assets/grow.png'
import generate from '../../assets/generate.png'
import launch from '../../assets/launch.png'
import plan from '../../assets/plan.png'


const ExamplePage = () => {
    const [page, setPage] = useState(1)

    return <AnimatedPage>
        <LeftSide>
            {page === 1 && <Section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Heading type='small'>I - Plan</Heading>
                <ul >
                    <li >Assess market opportunity for your product or idea</li>
                    <li>Prioritize geographies where you can win</li>
                    <li>Develop forecast to anticipate profitability, sales and launch costs</li>
                    <li>Build actionable roadmap to launch</li>
                </ul>
            </Section>}

            {page === 2 && <Section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Heading type='small'>II - Launch</Heading>
                <ul>
                    <li>Set-up your business in Amazon Seller Central</li>
                    <li>Apply for intellectual property protections to mitigate risk from competitor attacks</li>
                    <li>Develop eye-catching branding to win customers in search results</li>
                    <li>Create listing with optimized keywords and superior imagery</li>
                    <li>Enroll in the right Amazon seller programs to drive revenues at launch</li>
                </ul>
            </Section>}

            {page === 3 && <Section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Heading type='small'>III - Generate</Heading>
                <ul>
                    <li>Adjust pricing to expand revenues and market share</li>
                    <li>Win organic reviews to drive ranking</li>
                    <li>Test and refine marketing strategies</li>
                </ul>
            </Section>}

            {page === 4 && <Section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Heading type='small'>IV - Grow</Heading>
                <ul>
                    <li>Expand into additional eCommerce channels and geographies</li>
                        <li>   Develop new products or launch entirely new businesses</li>
                            <li>Target new customers (e.g. B2B or B2C)</li>
                </ul>
            </Section>}

            {page === 5 && <Section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <Heading type='small'>V - Optimize operations</Heading>
                <ul>
                    <li>Offboard the tasks you don't want to do to us</li>
                    <li>Source new suppliers</li>
                    <li>Automate marketing and PPC spend</li>
                    <li>Resolve account health needs</li>
                </ul>
                <Button onClick={() => window.location.href = 'https://wbd48lfw3wk.typeform.com/to/hAhrwPNb'}>Revenize</Button>
            </Section>}


            {page !== 5 && <Button onClick={() => setPage(page => ++page)}>
                {page === 0 && 'Launch'}
                {page === 1 && 'Launch'}
                {page === 2 && 'Generate'}
                {page === 3 && 'Grow'}
                {page === 4 && 'Optimize'}
            </Button>}
        </LeftSide>
        <RightSide>
            {page ===1  && <ImageContainer
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: .3 }}
            >
                <MainImage src={plan} />
            </ImageContainer>}
            {page === 2 && <ImageContainer
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: .3 }}
            >
                <MainImage src={launch} />
            </ImageContainer>}
            {page === 3 && <ImageContainer
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: .3 }}
            >
                <MainImage src={generate} />
            </ImageContainer>}
            {page === 4 && <ImageContainer
                offset={30}
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: .3 }}
            >
                <MainImage src={grow} />
            </ImageContainer>}
            {page === 5 && <ImageContainer
                offset={30}
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '-100%', opacity: 0 }}
                transition={{ duration: .3 }}
            >
                <MainImage src={optimize} />
            </ImageContainer>}
        </RightSide>
    </AnimatedPage>
}

const LeftSide = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
`

const RightSide = styled.div`
    width: 50%;
    display: inline-block;
    vertical-align: top;
    position: relative;
`

const Section = styled(motion.div)`
    width: 100%;
`

const ImageContainer = styled(motion.div)`
    width: 350px;
    position: absolute;
    top: 50px;
    left: 80px;
    transform: perspective(500px) rotateY(-25deg);
`

const MainImage = styled.img`
    width: 100%;
    transform: perspective(500px) rotateY(-25deg);
    border-radius: 5px;
    padding: 20px;
    box-shadow:
        -2px 0 1px #fff,
        -2px 0 4px #fff,
        -10px 0 9px #232f3e,
        -10px 0 12px #232f3e
    ;
`

export default ExamplePage
