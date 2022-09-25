import styled, { keyframes } from 'styled-components'

import { Link } from 'react-router-dom'

import phantom from '../../assets/phantom.svg'
import {isMobile} from "react-device-detect";
import MobileHomePage from "../../pages/mobile/MobileHomePage";

const Header = () => {

    return <StyledHeader>
        <h3 style={{float:'left',padding: '15px'}}>Revenize</h3>
        <Navigation>
            <div>
                {!isMobile && <StyledLink to='/'>Home</StyledLink> }
                 {!isMobile &&    <StyledLink to='example' cta={+true}>5-Step</StyledLink> }
                 {!isMobile &&    <StyledLink to='services'>Services</StyledLink> }
                 {!isMobile &&    <StyledLink to='about'>Who we are</StyledLink> }

                {isMobile &&    <PhantomLogo
                    src={phantom}
                    style={{
                        top:'8px'
                    }}
                    alt='phantom-logo'
                    onClick={() => window.location.href = 'https://wbd48lfw3wk.typeform.com/to/hAhrwPNb'}
                /> }

                {!isMobile &&    <PhantomLogo
                    src={phantom}
                    alt='phantom-logo'
                    onClick={() => window.location.href = 'https://wbd48lfw3wk.typeform.com/to/hAhrwPNb'}
                /> }
            </div>

        </Navigation>
    </StyledHeader>
}

const StyledHeader = styled.header`
    width: 100%;
    height: 80px;
    text-align: right;
`

const greenGlow = keyframes`
    from {
        filter: drop-shadow( 0 0 1px green) drop-shadow( 0 0 2px green) drop-shadow( 0 0 3px green);
    }
  
    to {
        filter: drop-shadow( 0 0 2px green) drop-shadow( 0 0 3px green) drop-shadow( 0 0 5px green);
    }
`

const redGlow = keyframes`
    from {
        filter: drop-shadow( 0 0 1px #ff9900) drop-shadow( 0 0 2px #ff9900) drop-shadow( 0 0 3px #ff9900);
    }
  
    to {
        filter: drop-shadow( 0 0 2px #ff9900) drop-shadow( 0 0 3px #ff9900) drop-shadow( 0 0 5px #ff9900);
    }
`

const PhantomLogo = styled.img`
    width: 30px;
    position: relative;
    top: 5px;
    transform: rotateY(180deg);
    cursor: pointer;
    animation: ${props => props.phatnomConnected ? greenGlow : redGlow} 2s ease-in-out infinite alternate;
`

const Navigation = styled.nav`
    padding: 20px 10%;
`

const StyledLink = styled(Link)`
    display: inline-block;
    line-height: 40px;
    padding: 0 20px;
    font-size: 16px;
    font-weight: 800;
    color: #000000;
    text-decoration: none;
    border-radius: 10px;
    margin-right: 5px;

    ${props => props.cta && `background-color: ${props.theme.color.darkPink};`}

    &:hover {
        color: ${props => props.cta ? props.theme.color.white : props.theme.color.green};
        ${props => props.cta && `background-color: ${props.theme.color.pink};`}
    }
`

export default Header
