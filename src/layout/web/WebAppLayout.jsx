import styled, { keyframes } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'

import bg from '../../assets/index_scale_adoption.png'
import solana from '../../assets/s-logo.png'

import Header from './Header'
import TitleContainer from './TitleContainer'
import LandingPage from '../../pages/web/LandingPage'
import ExamplePage from '../../pages/web/ExamplePage'
import AboutPage2 from '../../pages/web/About2Page'
import ServicesPage from "../../pages/web/ServicesPage";

const ComputerHomePage = () => {
    const location = useLocation()

    return <Container>
        <Main>
            <Header />
            <AnimatePresence>
                <TitleContainer />
                <Content>
                    <Routes location={location} key={location.pathname}>
                        <Route path='/' element={<LandingPage />} />
                        <Route path='example' element={<ExamplePage />} />
                        <Route path='services' element={<ServicesPage />} />
                        <Route path='about' element={<AboutPage2 />} />
                    </Routes>
                </Content>
            </AnimatePresence>
        </Main>
        <SolanaLogo src={solana} />
        <BGImage src={bg} />
        {/*<MovingCircle src={circle} alt='background-circle' />*/}
    </Container>
}

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #f2f2f2;
    color: #232f3e;
    overflow: hidden;
`

const Main = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 3;
`

const Content = styled.div`
    width: 100%;
    position: relative;
    height: calc(100% - 124px);
    overflow-y: scroll;
`

const BGImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    width: 46%;
    opacity: .2;
`
const SolanaLogo = styled.img`
    width: 200px;
    position: absolute;
    bottom: 5%;
    left: 3%;
    z-index: 2;
    opacity: .3;
`

const pulse = keyframes`
    0% {
        transform : scale(.9) translateX(-30%) translateY(-10%) rotate(180deg);
        opacity   : .4;
    }
    50% {
        transform : scale(1.3) translateX(-30%) translateY(25%) rotate(0);
        opacity   : .6;
    }
    100% {
        transform : scale(.8) translateX(10%) translateY(15%) rotate(180deg);
        opacity   : .3;
    }
`

const MovingCircle = styled.img`
    height: 700px;
    width: 700px;
    position: absolute;
    left: -100px;
    bottom: -100px;
    z-index: 1;
    animation: ${pulse} 10s linear   alternate infinite;
`

export default ComputerHomePage