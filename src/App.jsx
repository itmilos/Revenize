import {isMobile} from 'react-device-detect'

import MobileHomePage from './pages/mobile/MobileHomePage'
import WebAppLayout from './layout/web/WebAppLayout'
import MetaTags from 'react-meta-tags';

function App() {
  if (isMobile) {
    return (
        <div>
          <MetaTags>
            <title>revenize.co</title>
            <meta name="description" content="We help brands succeed on Amazon" />
            <meta property="og:title" content="revenize" />
            <meta property="og:image" content="../assets/revenize-meta-picture.png" />
          </MetaTags>
          <MobileHomePage />
        </div>
    )
  } else {
    return (
        <div>
          <MetaTags>
              <title>revenize.co</title>
              <meta name="description" content="We help brands succeed on Amazon" />
              <meta property="og:title" content="5 steps" />
              <meta property="og:image" content="../assets/revenize-meta-picture.png" />
          </MetaTags>
          <WebAppLayout />
        </div>
    )
  }
}

export default App
