import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const [isValid, setIsValid] = useState(null);
    const { user, logout } = use(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        // console.log("User trying to logout");
        logout()
            .then(() => {
                alert("You logged out successfully");
            }).catch((error) => {
                console.log(error.message);
            });
    }
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.displayName}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img onLoad={() => setIsValid(true)}
                    onError={() => setIsValid(false)}
                    className='w-12 rounded-full'
                    src={`${(user && isValid) ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button> : <Link className='btn btn-primary px-10' to='/auth/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;