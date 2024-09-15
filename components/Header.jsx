import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { LoGO_URL } from '../utils/constant';
import { FaLocationDot } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { BiSolidOffer, BiSolidLogInCircle } from 'react-icons/bi';
import { IoFootballSharp } from 'react-icons/io5';
import { FaCartPlus } from 'react-icons/fa';
import Location from '../components/Location';
import { clearCart, removeItemById } from '../utils/cardSlice'; // Ensure correct path
import Logo from '../components/Logo.png';
import { Badge, IconButton } from '@mui/material'; // Import Badge from MUI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 



const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch();

  const [btnName, setBtnName] = useState('Login');

  // Handle login/logout button toggle
  const handleButtonClick = () => {
    setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
  };

  return (
    <div className="mt-2">
      <ul className="flex items-center justify-evenly ">
        <img className='hover:scale-110 transition-transform' src={Logo} alt="Logo" style={{ width: '160px', height: '105px' }} />

        <li>
          <Link to="" className="flex items-center hover:text-gray-400 text-lg font-bold">
            <FaLocationDot className="mr-2" />
            <span>
              <Location />
            </span>
          </Link>
        </li>

        <li>
          <Link to="/" className="flex items-center hover:text-gray-400 text-lg font-bold">
            <FaHome className="mr-2" />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/Offers" className="flex items-center hover:text-gray-400 text-lg font-bold">
            <BiSolidOffer className="mr-2" />
            <span>Offers</span>
          </Link>
        </li>

        <li>
          <Link to="/AboutMe" className="flex items-center hover:text-gray-400 text-lg font-bold">
            <IoFootballSharp className="mr-2" />
            <span>ABOUT ME</span>
          </Link>
        </li>

        <li>
          <Link to="/LoginRegister" className="flex items-center hover:text-gray-400 text-lg font-bold">
          <button
            onClick={handleButtonClick}
            className="rounded flex items-center hover:text-gray-400 text-lg font-bold"
          >
            <BiSolidLogInCircle className="mr-2" />
            {btnName}
          </button>
            
          </Link>

        </li>

        <li>
          <Link to="/Cart" className="flex items-center hover:text-gray-400 text-lg font-bold">
           {/* Use cartItems.length to show cart count */}

            <IconButton aria-label="cart"  >
            <Badge badgeContent={cartItems.length} color="secondary">
              <FaCartPlus /><span className='text-black ml-2'>Cart</span>
            </Badge>
          </IconButton>
          </Link>
         
        </li>
      </ul>
    </div>
  );
};

export default Header;
