import React from 'react';

import useAuth from '../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAxiosSecure, { axiosSecure } from './../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';

const OrderCard = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();
  console.log(user?.email);
  const handleAddToCard = food => {
    if (user && user?.email) {
      ///todo
      const cartItem = {
        manuId: item?._id,
        email: user?.email,
        name: item?.name,
        image: item?.image,
        price: item?.price,
      };
      axiosSecure.post('/carts', cartItem).then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${item?.name} is Added to cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: 'You are not logged in',
        text: 'Please login to add to the card',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Login',
      }).then(result => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="h-[550px] px-5 mb-5">
      <div className="bg-[#F3F3F3] h-fit">
        <img className="w-full h-[300px]" src={item.image} alt="" />
        <div className="p-6">
          <h1 className="text-2xl font-semibold py-3 text-center">
            {item.name}
          </h1>
          <p className="text-center">{item.recipe}</p>

          <p className="font-semibold text-2xl text-yellow-500">
            Price : $ {item.price}
          </p>
          <div className=" uppercase mt-5 flex justify-center">
            <button
              onClick={() => handleAddToCard(item)}
              className="px-6 py-3 bg-[#E8E8E8] rounded-xl text-[#BB8506] border-b-2 border-[#BB8506] capitalize font-bold hover:bg-[#151515]"
            >
              add to card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
