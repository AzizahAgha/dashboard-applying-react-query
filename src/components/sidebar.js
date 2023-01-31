
import React,{ useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

export const SideBar=[
    {
      icon:DashboardIcon,
      heading:"Dashboard",
    },
    {
      icon:PersonOutlinedIcon,
      heading:"Fundraisers",
    },
    {
      icon:ShoppingCartTwoToneIcon,
      heading:"Donate Button Posts",
    },
    {
      icon:LocalShippingTwoToneIcon,
      heading:"Donations",
    },
    {
      icon:NotificationsActiveOutlinedIcon,
      heading:"Registrations",
    },
    {
      icon:CalendarMonthIcon,
      heading:"Internal Codes",
    },
    {
      icon:StackedBarChartOutlinedIcon,
      heading:"Reports",
    },
    {
      icon:PsychologyOutlinedIcon,
      heading:"In Memory",
    },
    
];
  

// export const SideBar=()=>{
//     const [show,setShow]=useState(false);
//     const [selected,setSelected]=useState(0);

// return(
//     <div>
//          <div className={show?'hide':'sidebar'}>
//           <div className="top">
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon onClick={()=>setShow(true)}/>
//           </IconButton>
//             <span className="logoo">Lorem</span>
//           </div>
//           <br></br>
          
         
//   {/* --------------------------------------------------------------------------------   */}


//           <div className="menuu">
//             {SideBarData.map((item,index)=>{
//               return(
//                 <div className={selected===index?'menuItem active':'menuItem'}
//                 key={index}
//                 onClick={()=>setSelected(index)}
//                 >
                 
//                   <item.icon className={selected===index?'iconactive':''}/>
//                   <span>
//                     {item.heading}
//                   </span>
//                 </div>
//               )
//             })}

//             <div>

//             </div>   

//           </div>

//   {/* --------------------------------------------------------------------------------   */}    
//           <div className="bottom">
//             {/* <div className="co1 coloroption"></div>
//             <div className="co2 coloroption"></div>
//              */}
//              <div className="menusetting" >
//              <SettingsOutlinedIcon  />
//                 <Link className="span">Settings</Link>
//              </div>
            
//           </div>
//         </div>
//     </div>
// )
// }