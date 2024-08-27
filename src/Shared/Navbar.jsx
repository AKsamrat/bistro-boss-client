import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import logo from '../assets/logo1.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import { MdLockOutline } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../Hooks/useCart';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleSignout = () => {
    logOut();
  };

  const Navitems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span> Menu</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/Order/salad"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Order Food</span>
        </NavLink>
      </li>

      {/* {user?.email && (
        <li>
          <NavLink
            to="/addJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>Add Job</span>
          </NavLink>
        </li>
      )} */}
      {/* {user?.email && (
        <li>
          <NavLink
            to="/myPostedJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>My jobs</span>
          </NavLink>
        </li>
      )} */}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? 'pending'
              : isActive
              ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
              : 'hover:text-[#00C2CB]'
          }
        >
          <span>Blogs</span>
        </NavLink>
      </li>
      {/* {user?.email && (
        <li>
          <NavLink
            to="/userProfile"
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-[#00C2CB]  bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                : 'hover:text-[#00C2CB]'
            }
          >
            <span>User Profile</span>
          </NavLink>
        </li>
      )} */}
    </>
  );

  return (
    <div>
      <div className=" text-white fixed z-10 w-full ">
        <header className="bg-[#1515157b] shadow-lg  flex justify-between items-center w-full dark:bg-[#120505]  px-8 ">
          <div>
            <Link
              to="/"
              className="  items-center gap-2  md:w-[180px] w-[150px] "
            >
              <h1 className=" text-[#00C2CB] font-bold text-2xl">
                BISTRO BOSS
              </h1>
              <p>RESTAURANT</p>
            </Link>
          </div>
          {/* middle */}
          {/* End */}
          <div className="flex justify-center items-center gap-3">
            <ul className=" justify-center items-center gap-6 hidden lg:flex">
              {Navitems}
            </ul>
            <Link to={'/dashboard/cart'}>
              <button className=" flex justify-center gap-1">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary bg-none">
                  +{cart.length}
                </div>
              </button>
            </Link>
            {user ? (
              <div className="  flex items-center  justify-end ml-4 bg-slate-400">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[4] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {/* <li>
                    <p className="text-green-600 font-bold">
                      {user?.displayName}
                    </p>
                  </li> */}
                    {Navitems}
                    <li>
                      <Link
                        className=" text-[#FF3811] font-bold "
                        onClick={handleSignout}
                      >
                        SignOut
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="  w-full md:w-auto   ">
                <div className="flex justify-center items-center pl-2 ">
                  <Link
                    to={'/login'}
                    onClick=""
                    className="btn bg-[#00C2CB] text-white flex justify-center items-center gap-2 text-xl"
                  >
                    <MdLockOutline />
                    LogIn
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
