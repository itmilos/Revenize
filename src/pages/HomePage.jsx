import styled from 'styled-components'

const HomePage = () => {
    return <Container>
        <Content>
            <img alt='left-orb' src={'https://i.imgur.com/r0VFFep.png'} className='blurry-gradient2'/>
            <img alt='right-orb' src={'https://i.imgur.com/r0VFFep.png'} className='blurry-gradient'/>
        </Content>
    </Container>
}

const Container = styled.div`
    width: calc(100% - 100px);
    padding: 81px 50px 50px;
    text-align: center;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        padding: 130px 20px 20px;
    }
`

const Content = styled.div`
    border-color: chartreuse;
    padding: 40px;
    border-radius: 12px;
    border-style: double;
    background: #B3FFAB;
    background: -webkit-linear-gradient(to right, #12FFF7, #B3FFAB);
    background: linear-gradient(to right, #12FFF7, #B3FFAB);
    filter: drop-shadow(1px 1px 3px #12FFF7);
    padding: 92px;
    @media (max-width: 768px) {
        width: calc(100%-20px);
        padding: 1px;
    }
`

export default HomePage