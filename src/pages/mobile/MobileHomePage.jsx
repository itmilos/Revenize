import styled from 'styled-components'
import {useState} from "react";
import AnimatedPage from "../web/AnimatedPage";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import {motion} from "framer-motion";
import Header from "../../layout/web/Header";

const MobileHomePage = () => {
    const [page, setPage] = useState(1)

    return <Container>
    <Header />
    <AnimatedPage>
        {page ===1 && <BigHeading2>We help brands succeed on Amazon</BigHeading2> }
        {page ===1 && <BigHeading>5-Step approach to win</BigHeading> }
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
    </AnimatedPage>
    </Container>
}

const BigHeading = styled.h1 `
    font-size: 1.1em;
    margin: 0;
`

const BigHeading2 = styled.h1 `
        line-height: 53px;
        font-size: 1.7em;
        -webkit-text-fill-color: transparent;
        background: linear-gradient(45deg,#ff9900,#b4710b 80%);
        -webkit-background-clip: text;
        margin: 0;
        `

const Container = styled.div``

const LeftSide = styled.div`
    width: 100%;
`


const Section = styled(motion.div)`
    width: 100%;
`


export default MobileHomePage