import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from 'react-icons/fa';
import { FaBook, FaSpoon, FaUser, FaUtensils } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  const isAdmin = true;
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-amber-100 p-4">
        <ul className=" space-y-3">
          {isAdmin ? (
            <>
              <li className="flex justify-start items-center gap-2 hover:bg-red-300">
                <FaHome></FaHome>
                <NavLink
                  to={'/dashbosrd/adminHome'}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                      : 'hover:text-[#00C2CB]'
                  }
                >
                  Admin Home
                </NavLink>
              </li>

              <li className="flex justify-start items-center gap-2">
                <FaUtensils></FaUtensils>
                <NavLink
                  to={'/dashboard/addItems'}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-white bg-[#501e82f9] px-2 py-3 rounded-lg font-semibold'
                      : 'hover:text-[#d962b9]'
                  }
                >
                  Add items
                </NavLink>
              </li>

              <li className="flex justify-start items-center gap-2">
                <FaList></FaList>
                <NavLink
                  to={'/dashboard/manageItems'}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                      : 'hover:text-[#00C2CB]'
                  }
                >
                  Manage items
                </NavLink>
              </li>

              <li className="flex justify-start items-center gap-2">
                <FaBook></FaBook>
                <NavLink
                  to={'/dashboard/manageBookings'}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                      : 'hover:text-[#00C2CB]'
                  }
                >
                  Manage Booking
                </NavLink>
              </li>

              <li className="flex justify-start items-center gap-2">
                <FaUser></FaUser>
                <NavLink
                  to={'/dashboard/allUsers'}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? 'pending'
                      : isActive
                      ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                      : 'hover:text-[#00C2CB]'
                  }
                >
                  All users
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
          <div className="divider"></div>

          {/* shared nav links  */}

          <li className="flex justify-start items-center gap-2 hover:bg-red-300">
            <FaHome></FaHome>
            <NavLink
              to={'/'}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                  : 'hover:text-[#00C2CB]'
              }
            >
              {' '}
              Home
            </NavLink>
          </li>
          <li className="flex justify-start items-center gap-2 hover:bg-red-300">
            <FaSpoon></FaSpoon>
            <NavLink
              to={'/order/salad'}
              className={({ isActive, isPending }) =>
                isPending
                  ? 'pending'
                  : isActive
                  ? 'text-[#00C2CB] bg-[#34d5dd18] px-2 py-3 rounded-lg font-semibold'
                  : 'hover:text-[#00C2CB]'
              }
            >
              {' '}
              Order
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
