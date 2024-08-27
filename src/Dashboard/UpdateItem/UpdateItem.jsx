import React, { useEffect, useState } from 'react';
import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../Component/SectionTitle';
import { useForm } from 'react-hook-form';
import { useLoaderData, useParams } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const UpdateItem = () => {
  const { register, handleSubmit, reset } = useForm();
  // const [menu, setMenu] = useState([]);

  const { name, category } = useLoaderData();
  console.log(name);
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  // useEffect(() => {
  //   fetch(`http://localhost:9000/menu/${id}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setMenu(data);
  //       // setLoading(false);
  //     });
  // }, []);

  // axios.get(`http://localhost:9000/menu/${id}`).then(res => {
  //   console.log(res.data);
  const { data: jobs = [], refetch } = useQuery({
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/menuData/${id}`);
      console.log(data);
      return data;
    },
    queryKey: ['jobs'],
  });
  console.log(jobs);

  const onSubmit = async data => {
    console.log(data);
  };
  return (
    <div className="px-28">
      <SectionTitle
        heading={'update an item'}
        subHeading={'refresh info'}
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

export default UpdateItem;
