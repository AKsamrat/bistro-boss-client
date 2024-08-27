import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { FcImageFile } from 'react-icons/fc';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async data => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
    console.log(res.data);
    console.log(res.data.data.display_url);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your data has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div className="px-28">
      <SectionTitle
        heading={'add and item'}
        subHeading={'whats new'}
      ></SectionTitle>
      <div className="bg-slate-100 p-16">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full ">
              <label htmlFor="address" className="text-sm ">
                Recipe Name
              </label>
              <input
                {...register('name', { required: true })}
                id="name"
                name="name"
                type="text"
                placeholder=" Recipe Name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="address" className="text-sm">
                Category
              </label>
              <select
                {...register('category', { required: true })}
                className="w-full py-3"
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desert">Desert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Price
              </label>
              <input
                {...register('price', { required: true })}
                id="lastname"
                name="price"
                type="text"
                placeholder="Price"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3"
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="bio" className="text-sm">
                Recipe Details
              </label>
              <textarea
                {...register('recipe', { required: true })}
                name="recipe"
                rows={10}
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 py-3 "
              ></textarea>
            </div>
            <div>
              <input
                {...register('image', { required: true })}
                name="image"
                type="file"
                className="file-input w-full max-w-xs"
              />
            </div>
          </div>
          <button className="btn mt-5 bg-yellow-500" type="submit">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
