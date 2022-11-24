import React from 'react'
import './SetupPlatform.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { MdAccessibilityNew, MdCast } from "react-icons/md";
import { TbWorld } from 'react-icons/tb'
import { FaMobile } from 'react-icons/fa'
import { FiMonitor } from 'react-icons/fi'
import { TbDevices,TbDevices2 } from 'react-icons/tb'
import { IoTvSharp } from 'react-icons/io5'
import { BsWindow, BsInboxesFill } from 'react-icons/bs';
import { BiDevices,BiWorld } from 'react-icons/bi'
import { DiHtml5DeviceAccess } from 'react-icons/di';

import SwipeableViews from 'react-swipeable-views';
import WebSetup from './WebSetup';
import Casting from './Casting';
// import MobSetup from './MobSetup';
// import Tv from './Tv';
import BoxStick from './BoxStick';
import MobSetup from './MobSetup';
import Tv from './Tv';
import { padding } from '@mui/system';
// import BoxStick from './BoxStick';

// import Casting from './Casting';

import Grid from '@mui/material/Grid';

import MediaQuery from 'react-responsive'
const SetupPlateform = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const iconSize = 122;
  const iconSizeResponsive = 64;

  const handleChangeIndex = (index) => {
    console.log(document.getElementsByClassName('bottomContainer'))
    setSelectedIndex(index);
    document.getElementsByClassName('mainContainerDesktop')[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })

  }
  return (


    <>
      <div className='mainContainerDesktop'>
        <MediaQuery minWidth={769}>
          <Box
            sx={{
              display: 'grid',
              gridAutoColumns: '1fr',
              gridAutoFlow: 'column',
              gap: '30px',
              justifyContent: 'center',
            }}

          >
            <Card id={0} className={0 == selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(0) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea style={{ height: '100%', padding: '7px' }}>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <BsWindow style={{ padding: '10px' }} className={0 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSize} />
                    <div >
                      <CardContent sx={{ padding: 0 }}>
                        <Typography sx={{ padding: 0, marginBottom: 0, fontSize: '17px' }} gutterBottom variant="h6" component="div" className={0 === selectedIndex ? 'selectedIcon' : 'selectedWhite'}>
                          Web
                        </Typography>
                      </CardContent>
                    </div>
                  </div>

                </div>
              </CardActionArea>
            </Card>

            <Card id={1} className={1 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(1) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea style={{ height: '100%', padding: '7px' }}>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <BiDevices style={{ padding: '10px' }} size={iconSize} className={1 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} />
                    <div >
                      <CardContent sx={{ padding: 0 }}>
                        <Typography className={1 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0, fontSize: '17px', marginBottom: 0 }} gutterBottom variant="h6" component="div">
                          Mobiles & Tablets
                        </Typography>
                      </CardContent>
                    </div>
                  </div>

                </div>
              </CardActionArea>
            </Card>

            <Card id={2} className={2 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(2) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea style={{ height: '100%', padding: '7px' }}>
                <div style={{ padding: 4, zIndex: 10 }}>
                  <div className='centerContent'>
                    <FiMonitor style={{ padding: '10px' }} className={2 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSize} />
                    <div >
                      <CardContent sx={{ padding: 0 }}>
                        <Typography className={2 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0, fontSize: '17px', marginBottom: 0 }} gutterBottom variant="h6" component="div">
                          TV
                        </Typography>
                      </CardContent>
                    </div>
                  </div>

                </div>
              </CardActionArea>
            </Card>

            <Card id={3} className={3 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(3) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea style={{ height: '100%', padding: '7px' }}>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <TbDevices2 style={{ padding: '10px' }} className={3 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSize} />
                    <div >
                      <CardContent sx={{ padding: 0 }}>
                        <Typography className={3 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0, fontSize: '17px', marginBottom: 0 }} gutterBottom variant="h6" component="div">
                          Box & Stick
                        </Typography>
                      </CardContent>
                    </div>
                  </div>

                </div>
              </CardActionArea>
            </Card>

            <Card id={4} className={4 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(4) }} sx={{ maxWidth: 400, maxHeight: '170px' }} >
              <CardActionArea style={{ height: '100%', padding: '7px' }}>
                <div style={{ padding: 4 }}>
                  <div className='centerContent'>
                    <MdCast style={{ padding: '10px' }} className={4 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSize} />
                    <div >
                      <CardContent sx={{ padding: 0 }}>
                        <Typography className={4 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0, fontSize: '17px', marginBottom: 0 }} gutterBottom variant="h6" component="div">
                          Casting
                        </Typography>
                      </CardContent>
                    </div>
                  </div>

                </div>
              </CardActionArea>
            </Card>
          </Box>

          <div className='bottomContainer'>
            <SwipeableViews index={selectedIndex} >
              <div> {0 === selectedIndex ? <WebSetup></WebSetup> : ''} </div>
              <div> {1 === selectedIndex ? <MobSetup></MobSetup> : ''} </div>
              <div>  {2 === selectedIndex ? <Tv></Tv> : ''} </div>
              <div>  {3 === selectedIndex ? <BoxStick></BoxStick> : ''} </div>
              <div>{4 === selectedIndex ? <Casting></Casting> : ''} </div>


            </SwipeableViews>
          </div>


        </MediaQuery>


        <MediaQuery minWidth={0} maxWidth={768}>

          <Box
            sx={{
              display: 'grid',
              rowGap: 1,
              gridTemplateColumns: 'repeat(1, 1fr)',
              gridAutoFlow: 'row'

            }}

            className='responsive'

          >
            <Card id={0} className={0 == selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(0) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <Grid style={{padding:'10px'}} container spacing={2}>
                  <Grid className='iconStyle' item xs={4}>
                    <BsWindow className={0 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSizeResponsive} />
                  </Grid>
                  <Grid className='responsiveStyle' item xs={8}>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography sx={{ padding: 0 }} gutterBottom variant="h6" component="div" className={0 === selectedIndex ? 'selectedIcon' : 'selectedWhite'}>
                        Web
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                {/* <div className='responsiveStyle'>
                  <div >
                    <BsWindow className={0 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0 }}>
                      <Typography sx={{ padding: 0, marginLeft: '50%' }} gutterBottom variant="h6" component="div" className={0 === selectedIndex ? '' : 'selectedWhite'}>
                        Web
                      </Typography>
                    </CardContent>
                  </div>
                </div> */}
              </CardActionArea>
            </Card>

            <Card id={1} className={1 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(1) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <Grid style={{padding:'10px'}} container spacing={2}>
                  <Grid className='iconStyle' item xs={4}>
                    <BiDevices size={iconSizeResponsive} className={1 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} />
                  </Grid>
                  <Grid className='responsiveStyle' item xs={8}>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={1 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Mobile & Tablet
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                {/* <div className='responsiveStyle'>
                  <div >
                    <BiDevices size={iconSizeResponsive} className={1 === selectedIndex ? '' : 'selectedWhite'} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%' }}>
                      <Typography className={1 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Mobile & Tablet
                      </Typography>
                    </CardContent>
                  </div>
                </div> */}
              </CardActionArea>
            </Card>

            <Card id={2} className={2 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(2) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>
                <Grid style={{padding:'10px'}} container spacing={2}>
                  <Grid className='iconStyle' item xs={4}>
                    <FiMonitor className={2 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSizeResponsive} />
                  </Grid>
                  <Grid className='responsiveStyle' item xs={8}>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={2 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        TV
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                {/* <div className='responsiveStyle'>
                  <div >
                    <IoTvSharp className={2 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%' }}>
                      <Typography className={2 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        TV
                      </Typography>
                    </CardContent>
                  </div>
                </div> */}
              </CardActionArea>
            </Card>

            <Card id={3} className={3 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(3) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>

                <Grid style={{padding:'10px'}} container spacing={2}>
                  <Grid className='iconStyle' item xs={4}>
                    <TbDevices2 className={3 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSizeResponsive} />
                  </Grid>
                  <Grid className='responsiveStyle' item xs={8}>
                    <CardContent sx={{ padding: 0 }}>
                      <Typography className={3 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Box & Stick
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>


                {/* <div className='responsiveStyle'>
                  <div >
                    <DiHtml5DeviceAccess className={3 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%' }}>
                      <Typography className={3 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        box & stick
                      </Typography>
                    </CardContent>
                  </div>
                </div> */}
              </CardActionArea>
            </Card>

            <Card id={4} className={4 === selectedIndex ? 'selectedCard' : 'unSelectedCard'} onClick={() => { handleChangeIndex(4) }} sx={{ minWidth: '90%', maxHeight: '85px' }} >
              <CardActionArea>

                <Grid style={{padding:'10px'}} container spacing={2}>
                  <Grid className='iconStyle' item xs={4}>
                    <MdCast className={4 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} size={iconSizeResponsive} />
                  </Grid>
                  <Grid className='responsiveStyle' item xs={8}>
                    <CardContent sx={{ padding: 0 }}>
                    <Typography className={4 === selectedIndex ? 'selectedIcon' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Casting
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                {/* <div className='responsiveStyle'>
                  <div >
                    <MdCast className={4 === selectedIndex ? '' : 'selectedWhite'} size={iconSizeResponsive} />
                  </div>
                  <div >
                    <CardContent sx={{ padding: 0, marginLeft: '50%' }}>
                      <Typography className={4 === selectedIndex ? '' : 'selectedWhite'} sx={{ padding: 0 }} gutterBottom variant="h6" component="div">
                        Casting
                      </Typography>
                    </CardContent>
                  </div>
                </div> */}
              </CardActionArea>
            </Card>
          </Box>

          <div className='bottomContainerResponsive'>
            <SwipeableViews index={selectedIndex} >
              <div> {0 === selectedIndex ? <WebSetup></WebSetup> : ''} </div>
              <div> {1 === selectedIndex ? <MobSetup></MobSetup> : ''} </div>
              <div>  {2 === selectedIndex ? <Tv></Tv> : ''} </div>
              <div>  {3 === selectedIndex ? <BoxStick></BoxStick> : ''} </div>
              <div>{4 === selectedIndex ? <Casting></Casting> : ''} </div>



            </SwipeableViews>
          </div>

        </MediaQuery>




      </div>
    </>
  )
}

export default SetupPlateform