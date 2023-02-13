import React,{useState} from "react";
import axios from "axios";
import {useQuery} from 'react-query'
import { Link } from "react-router-dom";
import {Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chart from "react-apexcharts";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import {grey} from '@mui/material/colors';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import Menu from '@mui/material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import img1 from './images/fav.png'
import img3 from './images/bird.png'
import img4 from './images/snail.png'
import {SideBar} from "./sidebar";
import { options } from "./charts";
import { baroptions } from "./charts";


const fetchPosts=(page)=>{
  return axios.get(` http://localhost:4002/data?_limit=18&_page=${page}`)
}


export default function Dashboard(){
    const [selected,setSelected]=useState(0);
  const [show,setShow]=useState(false);
  const [val, setVal] = React.useState(dayjs('2023-01-17'));

 

  //-----------------------------icon menu------------------------------
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
//-----------------------------paper-----------------------------------------      

const Item = styled(Paper)(({ theme }) => ({

    ...theme.typography.body2,
    
    textAlign: 'center',
    padding: theme.spacing(0),
    
boxShadow: "0px 0px 9px 4px rgb(0 0 0 / 4%), 0px 5px 0px 10px rgb(0 0 0 / 0%), 0px 8px 30px -26px rgb(0 0 0 / 16%)",
    borderRadius:"0%",
    border:"2px solid rgb(218,218,218)",
    color: "#ff0000, #247BA0,#ffff00"
    // color: theme.palette.text.secondary,
  }));

  //---------------------------------data------------------------------------------------
  const [value,setValue]=useState({
    sum:[],
    length:[],
    average:[],
    donation:[],
  })

  const [page,setPage]=useState(1)

  const onSuccess=(data)=>{
    console.log('Perform side effect after data fetching',data)
    const donation=[]
    {data?.data.map(item=>{
      donation.push(item.donation)
    })
    const sum =Math.floor( donation.reduce((a, b) => a + b, 0))
    console.log("sum",sum)
    const length=data?.data.length
    console.log("length",length)
    const average=Math.floor((sum/length))
    console.log("avg",average)
     
    setValue({
      sum:sum,
      length:length,
      average:average,
     })  
    }          
}

  const {isLoading,isError,error,data} = useQuery(['data',page],
  ()=>fetchPosts(page),{
    onSuccess
  })
    
    if (isLoading) {
        return <h2>Loading...</h2>
      }
    
      if(isError){
          return <h2>{error.message}</h2>
      }



  return(
    
    <div className="dashboard">

    <div className={show?'hide':'sidebar'}>
     <div className="top">
     <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="menu"
       sx={{ mr: 2 }}
     >
       <MenuIcon onClick={()=>setShow(true)}/>
     </IconButton>
       <span className="logoo">givepanel</span>
     </div>
     <br></br>
     
    
{/* --------------------------------------------------------------------------------   */}


     <div className="menuu">
       {SideBar.map((item,index)=>{
         return(
           <div className={selected===index?'menuItem active':'menuItem'}
           key={index}
           onClick={()=>setSelected(index)}
           >
            
             <item.icon className={selected===index?'iconactive':''}/>
             <span>
               {item.heading}
             </span>
           </div>
         )
       })}

       <div>

       </div>   

     </div>

{/* --------------------------------------------------------------------------------   */}    
     <div className="bottom">
       {/* <div className="co1 coloroption"></div>
       <div className="co2 coloroption"></div>
        */}
        <div className="menusetting" >
        <SettingsOutlinedIcon  />
           <Link className="span">Settings</Link>
        </div>
       
     </div>
   </div>


      <div className="main">

            <div className="headdiv">
            <div className="div">
           {show?<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={()=>setShow(false)}/>
          </IconButton>:null}
            <h5 className="left">Dashboard</h5>
            </div>
            <div className="div">
            <Link class="whatsnew" to='/list' >What's New</Link>
            <div className="headdivv">
            <Avatar sx={{ bgcolor: grey[900] ,width: '37px',height: '36px',borderRadius:'5px',fontSize:'0.9rem' }} className="black" variant="square"> TN</Avatar>
            <span className="down">Tiger Nixon</span>
             
            
            <React.Fragment>
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: -1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            < ArrowDropDownIcon />
          </IconButton>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
          <MenuItem>
          <Avatar /> Profile
          </MenuItem>
          <MenuItem>
          <Avatar /> My Team
          </MenuItem>

          <Divider />

          <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon> 
            Settings
          </MenuItem>

          <MenuItem>
          <ListItemIcon>
             <Logout fontSize="small" />
          </ListItemIcon>
            Logout
          </MenuItem>
          </Menu>
          </React.Fragment>
          </div>
          </div>
           
          </div>
            
            <hr className="hrr"></hr>
            
            <div className="headdiv">
            <LocalizationProvider  dateAdapter={AdapterDayjs} className="time" >
              <DatePicker
             
                  views={['month','year']}
                  minDate={dayjs('2022-03-01')}
                  maxDate={dayjs('2023-01-01')}
                  value={val}
                  onChange={(newValue) => {
                  setVal(newValue);
                  }}
                renderInput={(params) => <TextField {...params} />}
                dayOfWeekFormatter={(day) => `${day}.`}
                 toolbarFormat="ddd DD MMMM"
                InputProps={{ sx: { borderRadius: '67px',fontSize:'12px',fontWeight:'700',backgroundColor:'white' } }}

              />
            </LocalizationProvider> 
            <Link class="buttonn" to='/list' ><AddIcon/>Upload Data</Link>  
            </div>


{/* -----------------------------------------topmost cards------------------------------------ */}

            <div className="middle-container">
            <Box sx={{  width: "100%",justifyContent:'center',boxShadow:0}} >
            <Container maxWidth="md lg">
            <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 3, md: 3,lg:2 }} alignItems="center">
            
            <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="headdivv">
               <img class="image2" src={img1} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topic">Total Raised</Link>
                  <h4 className="values">${value.sum}</h4>
                  {/* <h4 className="values">${data.length}</h4> */}
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="headdivv">
               <img class="image2" src={img4} alt="emp" width="" />
               {/* <em>Employess</em> */}
               <div className="menuuu">
                  <Link className="topic">Total Donation</Link>
                  <h4 className="values">{value.length}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item>
               <div className="headdivv">
               <img class="image2" src={img3} alt="emp" width="" />
               
               {/* <em>Employess</em> */}
               <div className="menuuu ">
                  <Link className="topic">Averge</Link>
                  <h4 className="values">${value.average}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

{/* ---------------------------------------charts---------------------------------------- */}

               <Grid item xs={12} md={6} lg={6}>
               <div className="headdiv">
               <h4 className="head">Revenue</h4>
               <Link className="head2">View Full Report</Link>
               </div>
               <Item>
               <Chart
                options={options}
                series={options.series}
                type="line"
                width="100%"
                height="250"
                justifyContent="center"
               />
               </Item>
               </Grid>
               
               

               <Grid item  xs={12} md={6} lg={6}>
               <div className="headdiv">
               <h4 className="head">Donations</h4>
               <Link className="head2">View Full Report</Link>
               </div>
               
               <Item>
               <Chart
                // options={pieOption.options}
                // series={pieOption.series}
                options={baroptions}
                series={baroptions.series}
                type="bar"
                width="100%"
                height="175%"
               />
               </Item>   
               </Grid>
            </Grid>
            </Container>
            </Box>   

            <div className="mid">

               <div className="headdiv">
               <h4 className="head">Top Fundraiser </h4>
               <Link className="head2">View All</Link>
               </div>
             </div>
            
        

            <Box sx={{  width: "100%",justifyContent:'center',boxShadow:0}} >
            <Container maxWidth="md lg">
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 3, md: 3,lg:2 }} alignItems="center">

           
{/* -------------------------------bottom cards---------------------------- */}
            
             
               {data?.data.map((post,key)=>{
                    return(
                        
                      <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Item >
                        <div className="cardd">
                        <div className="headdiv">
                        <div className="values">${post.donation}</div>
                        <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
                        </div>
                        </div>
                        <hr className="hrrr"></hr>
                        <div className="headdivv">
                        <img class="image1" src={post.image} alt="emp" width="" />
                        <div className="menuuu" >
                        <Link className="topicc">{post.employee_name}</Link>
                        <h4 className="valuess">{post.date}</h4>
                        </div>
                        </div>
                        </Item>
                      </Grid>        
                          
                    );
                 }
                       
                    
                    )}      
               


               
            {/* <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">${value.donation[0]}</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr className="hrrr"></hr>
               <div className="headdivv">
               <img class="image1" src={value.img[0]} alt="emp" width="" /> */}
        
               
               {/* {data?.data.map((post,key)=>{
                    return(
                      <div className="menuuu" >
                        <Link className="topicc">{post.employee_name}</Link>
                      </div>
                    );
                 }
              )} */}
              
              {/* <div className="menuuu" >
                <Link className="topicc">{value.name[0]}</Link>
                <h4 className="valuess">{value.date[0]}</h4>
               </div>
                 
               </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">${value.donation[1]}</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr className="hrrr"></hr>
               <div className="headdivv">
               <img class="image1" src={value.img[1]} alt="emp" width="" /> */}
               {/* <em>Employess</em> */}

               {/* <div className="menuuu">
               <Link className="topicc">{value.name[1]}</Link>
                <h4 className="valuess">{value.date[1]}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">${value.donation[2]}</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr className="hrrr"></hr>
               <div className="headdivv">
               <img class="image1" src={value.img[2]} alt="emp" width="" /> */}
               {/* <em>Employess</em> */}

               {/* <div className="menuuu">
               <Link className="topicc">{value.name[2]}</Link>
                <h4 className="valuess">{value.date[2]}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>



               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">${value.donation[3]}</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr className="hrrr"></hr>
               <div className="headdivv">
               <img class="image1" src={value.img[3]} alt="emp" width="" /> */}
               {/* <em>Employess</em> */}

               {/* <div className="menuuu">
               <Link className="topicc">{value.name[3]}</Link>
                <h4 className="valuess">{value.date[3]}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">${value.donation[4]}</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr className="hrrr"></hr>
               <div className="headdivv">
               <img class="image1" src={value.img[4]} alt="emp" width="" /> */}
               {/* <em>Employess</em> */}

               {/* <div className="menuuu">
               <Link className="topicc">{value.name[4]}</Link>
                <h4 className="valuess">{value.date[4]}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
               <Item >
               <div className="cardd">
               <div className="headdiv">
               <div className="values">${value.donation[5]}</div>
               <div className="inf"><InfoOutlinedIcon className="iconss"/></div>
               </div>
               </div>
               <hr className="hrrr"></hr>
               <div className="headdivv">
               <img class="image1" src={value.img[5]} alt="emp" width="" /> */}
               {/* <em>Employess</em> */}

               {/* <div className="menuuu">
               <Link className="topicc">{value.name[5]}</Link>
                <h4 className="valuess">{value.date[5]}</h4>
                  </div>
                  </div>
               </Item>
               </Grid> */}


            </Grid>
            </Container>
            </Box>

          
            
        </div>
        </div>

</div>
  )
}
