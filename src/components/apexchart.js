import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { color, shadows } from '@mui/system';
import Chart from "react-apexcharts";
import {Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import dayjs from 'dayjs';
import {grey} from '@mui/material/colors';
import {DataGrid} from '@mui/x-data-grid'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddIcon from '@mui/icons-material/Add';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import img1 from './images/fav.png'
import img2 from './images/whale.png'
import img3 from './images/bird.png'
import img4 from './images/snail.png'
import { Link } from "react-router-dom";



export default function ApexChart(){

  const [selected,setSelected]=useState(0);
  const [show,setShow]=useState(false);
  const [val, setVal] = React.useState(dayjs('2023-01-17'));
  //------------------get api--------------------
  const [posts, setPosts]= useState([]);
  useEffect(()=>{
      getPosts();
  },[]);

  const getPosts=()=>{
      axios.get('http://localhost:4001/data').then(function(response){
          console.log(response.data);
          setPosts(response.data);
      });
      
  }

  //------------------line chart----------------------
   
  const [options,setOptions]=useState({
        chart: {
          id: "basic-bar"
        }, colors: ["#f44336", "#247BA0"],
        xaxis: {
          categories: []
        },
              yaxis: [
                {
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#ff0000'
                  },
                  labels: {
                    style: {
                      colors: '#ff0000',
                    }
                  },
                  title: {
                    text: "Income (lakhs)",
                    style: {
                      color: '#ff0000',
                    }
                  },
                  tooltip: {
                    enabled: true
                  }
                },
                {
                  seriesName: 'Income',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#00E396'
                  },
                  labels: {
                    style: {
                      colors: '#00E396',
                    }
                  },
                  title: {
                    text: "Previous Income (lakhs)",
                    style: {
                      color: '#00E396',
                    }
                  },
                },
                {
                  seriesName: 'Age',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#FEB019'
                  },
                  labels: {
                    style: {
                      colors: '#FEB019',
                    },
                  },
                  stroke: {
                   curve: 'straight'
                  },
                  title: {
                    text: "Age",
                    style: {
                      color: '#FEB019',
                    }
                  }
                },
              ],
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Fundamental Analysis of Employee',
          align: 'left'
        },
        subtitle: {
          text: 'Age/Salary Movements',
          align: 'left'
        }
      })

      const [series,setSeries]=useState([
        {
          name: "prev_salary",
          type:'bar',
          data: [],
          color:"#ff0000"
        },
        {
          name: "emp_salary",
          type:'bar',
          data: [],
          color: "#247BA0"
        }
        // ,
        // {
        //   name: "emp_age",
        //   type:'bar',
        //   data: [],
        //   color: "#247BA0"
        // },
    ])

//------------------------pie chart------------------------------

      const [pieOption,setPie]=useState({
        series: [],
       options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          colors: ["#ff0000", "#247BA0","#ffff00",'#ff6d00','#ffee58'],
          labels: [],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      // series: [{
      //   data: [21, 22, 10, 28, 16]
      // }],
      // options:{
      //   chart: {
      //     height: 350,
      //     type: 'bar',
      //   },
        
      //   plotOptions: {
      //     bar: {
      //       columnWidth: '45%',
      //       distributed: true,
      //     }
      //   },
      //   dataLabels: {
      //     enabled: false
      //   },
      //   legend: {
      //     show: false
      //   },
      //   xaxis: {
      //     categories: ['mar','it','prod','hr','acc'],
      //     labels: {
      //       style: {
             
      //         fontSize: '12px'
      //       }
      //     }
      //   }
      // },
    }
      
      )

//------------------------------getting values---------------------------------

      const [value,setValue]=useState({
        employee:[],
        temp:[],
        intern:[],

      })

    
        useEffect(()=>{
            const age=[];
            const prevSalary=[];
            const salary=[];
            const name=[];
            const id=[];
            const dept=[];
            const status=[];
            axios.get('http://localhost:4001/data').then(response=>{
                console.log("response",response)
                response.data.map(item=>{
                    console.log("item",item)
                    age.push(item.employee_age)
                    salary.push(item.employee_salary)
                    name.push(item.employee_name)
                    id.push(item.id)
                    prevSalary.push(item.prev_salary)
                    dept.push(item.department)
                    status.push(item.status)
                    
                })
                const map = dept.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
                console.info([...map.keys()])
                console.info([...map.values()])
                 const num=[...map.values()]
                 const value=[...map.keys()]
                console.log("num",num)

                const aCount = new Map([...new Set(status)].map(
                  x => [x, status.filter(y => y === x).length]
              ));

              const intern=aCount.get('Intern')
              const employee=aCount.get('full-time')
              const temp=aCount.get('part-time')

                setOptions({
                    chart: {
                      id: "basic-bar"
                    },
                    xaxis: {
                      categories: id
                    }
                  })

                setSeries([
                    {
                        name: "prev_salary",
                        data: prevSalary,
                        color :"#f44336"
                      },
                      {
                          name: "current_salary",
                          data: salary,
                          color:  "#43a047"
                       }
                        //,
                        // {
                        //     name: "emp_age",
                        //     data: age,
                        //     color: "#247BA0"
                        //   }
                  ]) 

                  setPie({
                    series: num,
                    options:{labels: value},
                    colorSet: "#ff0000 ,#247BA0,#ffff00,#ff6d00,#ffee58"
                    // options:{
                    //   xaxis: {
                    //     categories: value
                    //   }
                    // }
                  })
                  

                  setValue({
                    employee:employee,
                    temp:temp,
                    intern:intern
                  })
                  
            }).catch(e=>{
                alert(e)
            })


        },[])

//-------------------------data for data grid---------------------------------------
        const columns = [
          { field: 'id', headerName: 'ID', width: 50,headerClassName: 'super-app-theme--header', },
          {
            field: 'employee_name',
            headerName: 'Employee name',
            width: 150,
            editable: true,
            headerClassName: 'super-app-theme--header',
          },
          {
            field: 'department',
            headerName: 'Department',
            width: 110,
            editable: true,
            headerClassName: 'super-app-theme--header',
          },
          {
            field: 'prev_salary',
            headerName: 'Prev Salary',
            type: 'number',
            width: 90,
            editable: true,
            headerClassName: 'super-app-theme--header',
          },
          {
            field: 'employee_salary',
            headerName: 'Current Salary',
            type: 'number',
            width: 130,
            editable: true,
            headerClassName: 'super-app-theme--header',
          },
          {
            field: 'employee_age',
            headerName: 'Age',
            type: 'number',
            width: 70,
            editable: true,
            headerClassName: 'super-app-theme--header',
          },
          {
            field: 'status',
            headerName: 'Status',
            width: 100,
            editable: true,
            headerClassName: 'super-app-theme--header',
          },
        
        ];

        const row= posts.map(post=>{
          return{
              
            employee_name: post.employee_name,
            employee_age:post.employee_age,
            prev_salary:post.prev_salary,
            employee_salary:post.employee_salary,
            department:post.department,
            status:post.status,
            id:post.id,
            

            
        }})

//-----------------------sidebar data--------------------

      const SideBarData=[
          {
            icon:DashboardIcon,
            heading:"Dashboard",
          },
          {
            icon:PersonOutlinedIcon,
            heading:"Employees",
          },
          {
            icon:ShoppingCartTwoToneIcon,
            heading:"Products",
          },
          {
            icon:LocalShippingTwoToneIcon,
            heading:"Orders",
          },
          {
            icon:NotificationsActiveOutlinedIcon,
            heading:"Notifications",
          },
          {
            icon:CalendarMonthIcon,
            heading:"Calender",
          },
          {
            icon:StackedBarChartOutlinedIcon,
            heading:"Charts",
          },
          
      ];
        
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
            <span className="logoo">Lorem</span>
          </div>
          <br></br>
          
          {/* <div className="center"> */}
            {/* <ul className="ull">
              {/* <p className="titlee">TITLE</p> */}
              {/* <li className="lii"> */}
                {/* <DashboardIcon className="iconss" /> */}
               {/* <Link className="span" to='/apexchart' >Dashboard</Link> */}
              {/* </li> */}
              {/* <p className="titlee">MENU</p> */}
              {/* <li  className="lii">
              <PersonOutlinedIcon className="iconss"/> */}
                {/* <Link className="span" to='/rq-paginated'>Employees</Link>
              </li>
              <li  className="lii">
              <ShoppingCartTwoToneIcon className="iconss"/>
                <Link className="span">Products</Link>
              </li> */}
              {/* <li  className="lii">
              <LocalShippingTwoToneIcon className="iconss"/>
                <Link className="span">Orders</Link>
              </li> */}
              {/* <p className="titlee">SERVICE</p> */}
              {/* <li  className="lii">
              <NotificationsActiveOutlinedIcon className="iconss"/>
                <Link className="span">Notification</Link>
              </li> */}
              {/* <li  className="lii">
              <CalendarMonthIcon className="iconss"/>
                <Link className="span">Calender</Link>
              </li> */}
              {/* <li  className="lii">
              <StackedBarChartOutlinedIcon className="iconss"/>
                <Link className="span">Charts</Link>
              </li> */}
              {/* <p className="titlee">SETTINGS</p> */}
              {/* <li  className="lii">
              <PsychologyOutlinedIcon className="iconss"/>
                <Link className="span">Logs</Link>
              </li> */}
              {/* <li  className="lii">
              <SettingsOutlinedIcon  className="iconss"/>
                <Link className="span">Settings</Link>
              </li> */}
            {/* </ul>  */}
          {/* </div> */}

            
  {/* --------------------------------------------------------------------------------   */}


          <div className="menuu">
            {SideBarData.map((item,index)=>{
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
            <Avatar sx={{ bgcolor: grey[900] }} className="black" variant="square"> TN</Avatar>
            <span className="down">Tiger Nixon</span>
            <React.Fragment>
            <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
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
        {/* <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem> */}
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
                  <Link className="topic">Employees</Link>
                  <h4 className="values">{value.employee}</h4>
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
                  <Link className="topic">Temporary</Link>
                  <h4 className="values">{value.temp}</h4>
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
                  <Link className="topic">Intern Emp</Link>
                  <h4 className="values">{value.intern}</h4>
                  </div>
                  </div>
               </Item>
               </Grid>

               
               <Grid item xs={12} md={6} lg={6}>
               <div className="headdiv">
               <h4 className="head">Fundamental Analysis of Employee</h4>
               <Link className="head2">view</Link>
               </div>
               <Item>
               <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
                height="250"

                
                justifyContent="center"
               />
               </Item>
               </Grid>
               
               

               <Grid item  xs={12} md={6} lg={6}>
               <div className="headdiv">
               <h4 className="head">Department</h4>
               <Link className="head2">view</Link>
               </div>
               
               <Item>
               <Chart
                // options={pieOption.options}
                // series={pieOption.series}
                options={pieOption.options}
                series={pieOption.series}
                type="pie"
                width="100%"
                height="175%"
               />
               </Item>   
               </Grid>
               

            </Grid>

            
            </Container>
            </Box>

           <div className="mid">
           <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 3, md: 3,lg:3 }} alignItems="center">
           <Grid item xs={12} md={8} lg={8} >
           <Box sx={{ height: 290, width: '100%', '& .super-app-theme--header': {
          backgroundColor: '#F4D9E7',
        }, }}>
           <div className="headdiv">
               <h4 className="head3">List of Employees</h4>
               <Link to='/rq-super-heroes' className="head2">edit</Link>
               </div>
            
            <DataGrid
             sx={{
                  // boxShadow: 2,
                  // border: 2,
                //   borderColor: 'primary.light',
                //  '& .MuiDataGrid-cell:hover': {
                //   color: 'primary.main',
                //   },
             }}
             rows={row}
             columns={columns}
             pageSize={5}
             rowsPerPageOptions={[5]}
             checkboxSelection
             disableSelectionOnClick
             experimentalFeatures={{ newEditingApi: true }}
            />
       
          </Box>
           </Grid>

           <Grid item xs={12} md={4} lg={4}>
           <div className="headdiv">
               <h4 className="head">Age/Income</h4>
               <Link className="head2">view</Link>
               </div>
           <Item>
           <Chart
                options={options}
                series={series}
                type="bar"
                width="100%"
                height="240"

                
                justifyContent="center"
               />
               </Item>
           </Grid>
           </Grid>
            
         </div>
            
        </div>
           
          


        </div>
        </div>
    )
} 
