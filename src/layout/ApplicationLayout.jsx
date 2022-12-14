import styled from 'styled-components'

import Header from './web/Header'

const ApplicationLayout = ({ children }) => {
    return <Container>
        <Header />
        {children}
    </Container>
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export default ApplicationLayout
