import styled from 'styled-components'
import { motion } from 'framer-motion'

const ServicesPage = ({ withMargin }) =>
    <Content
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '-100%', opacity: 0 }}
        transition={{ duration: .3 }}
        withMargin={withMargin}
    >

        <ul style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgb(16 50 97 / 50%)',
            padding: '1.77em',
            borderRadius: '30px',
            color: '#17488b',
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: '16px',
            margin: '15px'
        }}>
            <li>New Product Launch Strategies</li>
            <li>New Brand Launch Strategy</li>
            <li>Merchandising Strategy</li>
            <li>AMS Competitive Benchmarking</li>
            <li>Organizational Design</li>
            <li>Team Development & Recruiting</li>
            <li>Forecasting</li>
            <li>Identifying</li>
            <li>suppliers</li>
        </ul>

        <ul style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgb(16 50 97 / 50%)',
            padding: '1.77em',
            borderRadius: '30px',
            color: '#17488b',
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: '16px',
            margin: '15px'
        }}>
            <li>Sponsored Products / Brands</li>
            <li>AMS Search Optimization</li>
            <li>Bid Optimization</li>
            <li>Ad Send Optimization</li>
            <li>Display Ads</li>
            <li>Video Ads</li>
            <li>Amazon DSP</li>
            <li>A/B Testing & Measurement</li>
            <li>Performance Reporting & Checkups</li>
            <li>Amazon SEO</li>
        </ul>

        <ul style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgb(16 50 97 / 50%)',
            padding: '1.77em',
            borderRadius: '30px',
            color: '#17488b',
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: '16px',
            margin: '15px',
            backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg data-cssscan-pro-pattern-index=\'47\' data-cssscan-pro-pattern-opacity=\'2\' data-cssscan-pro-pattern-size=\'6px\' data-cssscan-pro-pattern-back-color=\'rgba(255%2C%20255%2C%20255%2C%200)\' data-cssscan-pro-pattern-front-color=\'%23000000\' xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\' patternTransform=\'scale(0.3)\'%3E%3Cpath data-color=\'outline\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'5\' stroke-opacity=\'0.02\' d=\'M0 0h100v50H0zM-50 50h100v50h-100zM50 50h100v50h-100z\'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23p)\' width=\'100%25\' height=\'100%25\'%3E%3C/rect%3E%3C/svg%3E")',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        }}>
            <li>Store Setup</li>
            <li>Amazon Search Engine Optimization</li>
            <li>Listing Optimization</li>
            <li>Enhanced Brand Content</li>
            <li>A+ Pages</li>
            <li>Amazon Storefront Design</li>
        </ul>

        <ul style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgb(16 50 97 / 50%)',
            padding: '1.77em',
            borderRadius: '30px',
            color: '#17488b',
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: '16px',
            margin: '15px',
            backgroundImage: 'url("data:image/svg+xml;charset=utf8,%3Csvg data-cssscan-pro-pattern-index=\'47\' data-cssscan-pro-pattern-opacity=\'2\' data-cssscan-pro-pattern-size=\'6px\' data-cssscan-pro-pattern-back-color=\'rgba(255%2C%20255%2C%20255%2C%200)\' data-cssscan-pro-pattern-front-color=\'%23000000\' xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\' patternTransform=\'scale(0.3)\'%3E%3Cpath data-color=\'outline\' fill=\'none\' stroke=\'%23000000\' stroke-width=\'5\' stroke-opacity=\'0.02\' d=\'M0 0h100v50H0zM-50 50h100v50h-100zM50 50h100v50h-100z\'%3E%3C/path%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'url(%23p)\' width=\'100%25\' height=\'100%25\'%3E%3C/rect%3E%3C/svg%3E")',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'

        }}>
            <li>Seller Central</li>
            <li>Inventory management</li>
            <li>Pricing Strategy</li>
            <li>Research new products and profitability analysis</li>
            <li>PPC (SP Exact)</li>
        </ul>
        <ul style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgb(16 50 97 / 50%)',
            padding: '1.77em',
            borderRadius: '30px',
            color: '#17488b',
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: '16px',
            margin: '15px'
        }}>
            <li>Account Health</li>
            <li>Account Appeals</li>
            <li>ASIN Appeals</li>
            <li>Seller Account Protection</li>
            <li>Reimbursements</li>
        </ul>


        <ul style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 12px 32px rgb(16 50 97 / 50%)',
            padding: '1.77em',
            borderRadius: '30px',
            color: '#17488b',
            fontFamily: '"Source Sans Pro", sans-serif',
            fontSize: '16px',
            margin: '15px'
        }}>
            <li>Technology Partner Identification</li>
            <li>ERP Integration</li>
            <li>Warehousing & Fulfillment Strategy</li>
            <li>BuyBox Monitoring</li>
        </ul>

    </Content>


const Content = styled(motion.div)`
    position: relative;
    width: 70%;
    min-height: calc(100vh - 404px);
    padding: 0 15%;
    z-index: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px
    grid-row-gap: 20px
    justify-items: stretch
    align-items: stretch
    ${({ withMargin }) => withMargin && 'margin-bottom: 100px;'}
    
`


//
//     box-shadow: inset 0 0 0 200px rgb(255 255 255 / 5%);
// filter: blur(10px);
// border: 1px solid orange;

export default ServicesPage