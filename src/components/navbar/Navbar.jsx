import React from 'react'
import "./Navbar.scss"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Navbar() {
    return (
        <div className='navbar'>

         <div className="nav-container">
         <div className="nav-left">
            <img src="./public/emailicon.png" alt="" srcset="" />
         </div>
         <div className="nav-center">
            <input className='searchbar' type="text" placeholder='Search for Service you are looking for! '/>
            <button type="button" class="btn">Search</button>
         </div>
         <div className="navright">
          <NotificationsNoneIcon  className='notify-icon'/>
          <p>toggle </p>
          <h4>Vinay Jadaun</h4>
          <AddShoppingCartIcon className='cart-icon'/>
          <button type='button' className='account-btn' >V</button>
         </div>

         

       </div>

        </div>
    
  )
}

export default Navbar
