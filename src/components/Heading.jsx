import styled from 'styled-components'

const Heading = ({ type, marginBottom, children }) => type === 'small' ?
    <SmallHeading marginBottom={marginBottom}>{children}</SmallHeading> :
    <BigHeading marginBottom={marginBottom}>{children}</BigHeading>

const commonHeadingProps = `
    font-family: Inter, sans-serif;
    color: whirete;
`

const BigHeading = styled.h1`
    ${commonHeadingProps}
    line-height: 53px;
    font-size: 54px;
    letter-spacing: -3px;
    -webkit-text-fill-color: transparent;
    background: linear-gradient(45deg,#ff9900,#b4710b 80%);
    -webkit-background-clip: text;
    margin: 0;

    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`}
`

const SmallHeading = styled.h2`
    ${commonHeadingProps}
    line-height: 40px;
    font-size: 32px;
    letter-spacing: -2px;
    color: #232f3e;
    margin-top: 20px;

    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`}
`

export default Heading