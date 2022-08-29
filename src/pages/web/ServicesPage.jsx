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
            margin: '15px'
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
            margin: '15px'

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