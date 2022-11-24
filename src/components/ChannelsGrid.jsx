

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Languages } from '../Data/Languages'
import './ChannelsGrid.css'
import { ChannelNames } from './../Data/ChannelNames'
import IoIosArrowDropdownCircle from 'react-icons/io'
import { Typography } from '@mui/material';
import MediaQuery from 'react-responsive'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ReactComponent as Dropdown } from './../assets/dropdown.svg'
import { useEffect } from 'react';
import Skeleton from '@mui/material/Skeleton';

import { createTheme, ThemeProvider } from '@mui/material';
const ChannelsGrid = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: 'rgba(255,255,255,0)',
            },
        },
    });
    const blurredColor = 'hsla(0,0%,100%,.1)'
    const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--components-dark-theme')
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    // const [firstHalfArray, setFirstHalfArray] = React.useState([...ChannelNames[0]].splice(0, Math.ceil(ChannelNames[0].length / 2)))
    // const [secondHalfArray, setSecondHalfArray] = React.useState([...ChannelNames[0]].splice(Math.ceil(ChannelNames[0].length / 2)))
    const [fullArray, setFullArray] = React.useState(ChannelNames[0])
    const handleChange = (index) => {
        setSelectedIndex(index);
        // setFirstHalfArray([...ChannelNames[index]].splice(0, Math.ceil(ChannelNames[index].length / 2)))
        // setSecondHalfArray([...ChannelNames[index]].splice(Math.ceil(ChannelNames[index].length / 2)))
        setFullArray(ChannelNames[index]);
    }

    const handleCombo = (index) => {

        setSelectedIndex(index);
        // setFirstHalfArray([...ChannelNames[index]].splice(0, Math.ceil(ChannelNames[index].length / 2)))
        // setSecondHalfArray([...ChannelNames[index]].splice(Math.ceil(ChannelNames[index].length / 2)))
        setFullArray(ChannelNames[index]);
    }
    const searchResults = () => {
        let searchQuery = document.getElementById('search').value.toLowerCase();
        let results = []
        if (searchQuery !== '') {
            for (let index = 0; index < ChannelNames.length; index++) {
                const tempChannel = ChannelNames[index];
                for (let i = 0; i < tempChannel.length; i++) {
                    const result = tempChannel[i].toLowerCase();
                    if (result.includes(searchQuery)) {
                        results.push(tempChannel[i]);
                    }
                }
            }
            setFullArray(results);
            // setFirstHalfArray([...results].splice(0, Math.ceil(results.length / 2)));
            // setSecondHalfArray([...results].splice(Math.ceil(results.length / 2)));
        } else {
            handleChange(selectedIndex);
        }
    }

    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (

        <div class="ccc_column ccc_countryList" style={{ width: '100%' }}>

            <div class="v-virtual-scroll">
                <div class="v-virtual-scroll__container" >
                    <Box sx={{ margin: '2%' }}>
                        <Grid container spacing={1}>
                            {/* Side panel that will run on 921 pixels width and will be replaced by combo box below the specified width */}


                            <MediaQuery minWidth={921}>
                                <Grid item xs={6} md={4} style={{ paddingRight: "8px" }}>

                                    {loading ? <Skeleton sx={{ bgcolor: 'RGB(255,255,255,0.4)' }} style={{ borderRadius: '9px' }} animation="wave" variant="rectangular" width={'100%'} height={'84vh'} /> :
                                        <div className='leftPanel'>
                                            <List>
                                                {Languages.map((element, index) => {
                                                    let temp = element.slice(0, 25)

                                                    return (


                                                        <ListItem className='listItem' sx={{ maxHeight: '3px', padding: 0.5, margin: "3px 0px" }} onClick={() => { handleChange(index) }} key={index} id={index} disablePadding >
                                                            <div id='selection' className={selectedIndex === index ? 'divSelected' : 'divUnselectedColored'}>
                                                                <ListItemButton  sx={{ backgroundColor: blurredColor, maxHeight: '40px', paddingLeft: 1, paddingRight: 1, color: 'white', borderRadius: "4px" }}  >

                                                                    {selectedIndex === index ?
                                                                        <>
                                                                            <ListItemText  disableTypography style={{ whiteSpace: 'nowrap', color: backgroundColor, fontWeight: 700 }} primary={<Typography type="body2" style={{ color: backgroundColor, fontWeight: '900' }}>{temp}</Typography>} />
                                                                            <ListItemIcon style={{ paddingLeft: '11%' }} >
                                                                                <ArrowForwardIosRoundedIcon style={{ color: backgroundColor }} />
                                                                            </ListItemIcon>
                                                                        </>
                                                                        :
                                                                        <ListItemText className='text' style={{ fontWeight: '', whiteSpace: 'nowrap', color: 'white' }} primary={<Typography type="body2" style={{ color: 'white', fontWeight: '200' }}>{temp}</Typography>} />
                                                                    }
                                                                </ListItemButton>
                                                            </div>
                                                        </ListItem>


                                                    )

                                                })}


                                            </List>
                                        </div>
                                    }

                                </Grid>
                            </MediaQuery>

                            <MediaQuery minWidth={921}>
                                
                                <Grid id='rightPanel' item sx={{ width: '66.667%' }}>



                                    {loading ? <Skeleton sx={{ bgcolor: 'RGB(255,255,255,0.4)' }} style={{ borderRadius: '9px' }} animation="wave" variant="rectangular" width={'100%'} height={'84vh'} /> :

                                        <div className='rightPanelDesktop' >
                                            <div class="ccc_column ccc_channelList">

                                                <div class="ccc_searchBar">
                                                    <input className='inputText' id="search" onKeyUp={searchResults} type="text" name="searchbar" placeholder="Search your favorite channel here …" />
                                                    <i class="fa-solid fa-magnifying-glass iconCss"></i>

                                                </div>

                                                <MediaQuery minWidth={541}>
                                                    <Box
                                                        sx={{
                                                            display: 'grid',
                                                            columnGap: '12px',
                                                            rowGap: 1,
                                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                                            maxHeight: 'calc(84vh - 4.2%)',
                                                            minWidth: '100%',
                                                            height:'95%',
                                                            alignContent: 'flex-start'
                                                        }}
                                                        style={{ overflow: 'auto', marginTop: '10px' }}
                                                    >


                                                        {fullArray.map((element, index) => {
                                                            return (
                                                                <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.1, overflow:'hidden' }}>
                                                                    <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography noWrap className='typographyChannels' type="body2" >{element}</Typography>} />
                                                                </ListItem>
                                                            )
                                                        })}




                                                        {/* <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1.5 }}>

                                                        <Grid container item xs={6} direction="row">

                                                            <div className='divUnselected'  >

                                                                <List disablePadding  >
                                                                    {firstHalfArray.map((element, index) => {
                                                                        return (
                                                                            <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, marginTop: 1 }}>
                                                                                <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" style={{ color: 'white', fontWeight: '900' }}>{element}</Typography>} />
                                                                            </ListItem>
                                                                        )
                                                                    })}

                                                                </List>

                                                            </div>
                                                        </Grid>

                                                        <Grid container item xs={6} direction="column">
                                                            <List disablePadding >
                                                                {secondHalfArray.map((element, index) => {
                                                                    return (
                                                                        <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, marginTop: 1 }}>
                                                                            <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" style={{ color: 'white', fontWeight: '900' }}>{element}</Typography>} />
                                                                        </ListItem>
                                                                    )
                                                                })}

                                                            </List>
                                                        </Grid>

                                                    </Grid> */}
                                                    </Box>
                                                </MediaQuery>

                                                <MediaQuery maxWidth={540} minWidth={0}>

                                                    <Box
                                                        sx={{
                                                            display: 'grid',

                                                            rowGap: 1,
                                                            gridTemplateColumns: 'repeat(1, 1fr)',
                                                            height: '98.5%',
                                                            alignContent: 'flex-start'


                                                        }}
                                                        style={{ minWidth: '100%', overflow: 'auto', marginTop: '10px' }}
                                                    >


                                                        {fullArray.map((element, index) => {
                                                            return (
                                                                <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, overflow:'hidden' }}>
                                                                    <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" style={{ color: 'white', fontWeight: '900' }}>{element}</Typography>} />
                                                                </ListItem>
                                                            )
                                                        })}
                                                    </Box>
                                                </MediaQuery>
                                            </div>

                                        </div>
                                    }
                                </Grid>
                            </MediaQuery>

                            <MediaQuery maxWidth={920}>

                                <Grid id='rightPanel' item sx={{ width: '100%' }}>


                                    {/* COMBO BOX that will run below 920Width */}
                                    <MediaQuery maxWidth={920}>

                                        {loading ? <Skeleton sx={{ bgcolor: 'RGB(255,255,255,0.4)' }} style={{ borderRadius: '4px' }} animation="wave" variant="rectangular" width={'100%'} height={'5vh'} /> :
                                            <div className='comboBox' >

                                                <div className="ccc_searchBar" style={{ padding: 0 }} >

                                                    <Box sx={{ minWidth: 120 }}>
                                                        <FormControl fullWidth size="small">
                                                            
                                                                <Select

                                                                    id="demo-simple-select"
                                                                    value={selectedIndex}
                                                                    IconComponent={() =>
                                                                        <div className='comboDropdown' >

                                                                            <Dropdown></Dropdown>
                                                                        </div>
                                                                    }
                                                                >
                                                                    {Languages.map((element, index) => {
                                                                        return (
                                                                            <MenuItem className='combo' key={index} onClick={() => { handleCombo(index) }} id={index} value={index}> <Typography className ='typographyCombo' style={{fontWeight: '300'}}> {element.slice(0,25)} </Typography> </MenuItem>
                                                                        )
                                                                    })}

                                                                </Select>
                                                            
                                                        </FormControl>
                                                    </Box>

                                                    {/* <select style={{ width: '100%', color: 'white' }}>
                                                {

                                                    Languages.map((element, index) => {
                                                        return (
                                                            <option onClick={() => { handleChange(index) }}>{element}</option>
                                                        )
                                                    })
                                                }

                                            </select> */}


                                                </div>
                                            </div>
                                        }
                                        <br></br>
                                    </MediaQuery>
                                    {loading ? <Skeleton sx={{ bgcolor: 'RGB(255,255,255,0.4)' }} style={{ borderRadius: '4px' }} animation="wave" variant="rectangular" width={'100%'} height={'84vh'} /> :

                                        <div className='rightPanelDesktop' style={{ minWidth: '100%', overflowY: "hidden", background: backgroundColor, minHeight: '84vh', maxHeight: '84vh', overflow: 'hidden', borderRadius: '4px' }}>
                                            <div class="ccc_column ccc_channelList" style={{ padding: 6 }}>

                                                <div class="ccc_searchBar">
                                                    <input className='inputText' id="search" onKeyUp={searchResults} type="text" name="searchbar" placeholder="Search your favorite channel here …" />
                                                    <i class="fa-solid fa-magnifying-glass iconCss"></i>

                                                </div>

                                                <MediaQuery minWidth={541}>
                                                    <Box
                                                        sx={{
                                                            display: 'grid',
                                                            columnGap: '12px',
                                                            rowGap: 1,
                                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                                            height: '98%',
                                                            minWidth: '100%',
                                                            alignContent: 'flex-start'
                                                        }}
                                                        style={{ overflow: 'auto', marginTop: '10px' }}
                                                    >


                                                        {fullArray.map((element, index) => {
                                                            return (
                                                                <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, overflow:'hidden' }}>
                                                                    <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" className='typographyChannels'>{element}</Typography>} />
                                                                </ListItem>
                                                            )
                                                        })}




                                                        {/* <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 1, md: 1.5 }}>

                                                        <Grid container item xs={6} direction="row">

                                                            <div className='divUnselected'  >

                                                                <List disablePadding  >
                                                                    {firstHalfArray.map((element, index) => {
                                                                        return (
                                                                            <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, marginTop: 1 }}>
                                                                                <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" style={{ color: 'white', fontWeight: '900' }}>{element}</Typography>} />
                                                                            </ListItem>
                                                                        )
                                                                    })}

                                                                </List>

                                                            </div>
                                                        </Grid>

                                                        <Grid container item xs={6} direction="column">
                                                            <List disablePadding >
                                                                {secondHalfArray.map((element, index) => {
                                                                    return (
                                                                        <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, marginTop: 1 }}>
                                                                            <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" style={{ color: 'white', fontWeight: '900' }}>{element}</Typography>} />
                                                                        </ListItem>
                                                                    )
                                                                })}

                                                            </List>
                                                        </Grid>

                                                    </Grid> */}
                                                    </Box>
                                                </MediaQuery>

                                                <MediaQuery maxWidth={540} minWidth={0}>

                                                    <Box
                                                        sx={{
                                                            display: 'grid',

                                                            rowGap: 1,
                                                            gridTemplateColumns: 'repeat(1, 1fr)',
                                                            height : '98.5%',
                                                            alignContent: 'flex-start'


                                                        }}
                                                        style={{ minWidth: '100%', overflow: 'auto', marginTop: '10px' }}
                                                    >


                                                        {fullArray.map((element, index) => {
                                                            return (
                                                                <ListItem key={index} disablePadding sx={{ background: 'hsla(0,0%,100%,.17)', borderRadius: '4px', padding: 0.7, overflow:'hidden' }}>
                                                                    <ListItemText sx={{ color: 'white', paddingLeft: 1 }} primary={<Typography type="body2" className='typographyChannels'>{element}</Typography>} />
                                                                </ListItem>
                                                            )
                                                        })}
                                                    </Box>
                                                </MediaQuery>
                                            </div>

                                        </div>
                                    }
                                </Grid>
                            </MediaQuery>
                        </Grid>
                    </Box>

                </div>

                <div class="ccc_column ccc_channelList">

                </div>
            </div>
        </div>
    )
}

export default ChannelsGrid