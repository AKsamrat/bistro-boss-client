import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrash, FaUser, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handleMakeAdmin = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to make this admin!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Make it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then(res => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Updated!',
              text: 'Your file has been Updated.',
              icon: 'success',
            });
          }
        });
      }
    });
  };
  return (
    <div className="px-28">
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Total Users : {users.length}
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left bg-orange-200 rounded-t-xl">
                <th className="p-3"> #</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{index + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.email} </p>
                  </td>
                  <td className="p-3">
                    {user?.role === 'admin' ? (
                      'Admin'
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user?._id)}
                        className="btn bg-orange-600 text-white btn-md text-2xl"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user?._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
<p>all users</p>;
