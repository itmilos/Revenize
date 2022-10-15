import {isMobile} from 'react-device-detect'

import MobileHomePage from './pages/mobile/MobileHomePage'
import WebAppLayout from './layout/web/WebAppLayout'

function App() {
  if (isMobile) {
    return (
        <div>
          <MetaTags>
            <title>revenize.co</title>
            <meta name="description" content="We help brands succeed on Amazon" />
            <meta property="og:title" content="revenize" />
            <meta property="og:image" content="https://link.storjshare.io/juj6zd243wmql4m2by2pea2zonkq/qraft-nft%2Frevenize-meta-picture.png" />
          </MetaTags>
          <MobileHomePage />
        </div>
    )
  } else {
    return (
        <div>
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <WebAppLayout />
        </div>
    )
  }
}

export default App
