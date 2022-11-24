import React from 'react'
import SetupIntro from '../components/SetupIntro'
import SetupPlatform from '../components/SetupPlatform'
import './Setup.css'

//import SetupPlatform from '../components/SetupPlatform'
const Setup = () => {
  return (<>
    <div id='ccc_apps'>
      <SetupIntro></SetupIntro>
      <br></br>
      <SetupPlatform></SetupPlatform>
      
      

    </div>
  </>
  )
}

export default Setup