import useMenu from '../../Hooks/UseMenu';
import ordercover from '../../assets/shop/banner2.jpg';
import Cover from '../Menu/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderCard from './OrderCard';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Pagination, Grid } from 'swiper/modules';

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const [tabIndex, setTabindex] = useState(initialIndex);
  const desert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const drinks = menu.filter(item => item.category === 'drinks');
  console.log(soup);
  return (
    <div>
      <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover img={ordercover} title={'Order Food'}></Cover>
      <div className="max-w-7xl mx-auto my-14">
        <Tabs defaultIndex={tabIndex} onSelect={index => setTabindex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
              {salad?.map(item => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
              {pizza?.map(item => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8"> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              grid={{
                rows: 2,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {soup?.map(item => (
                <SwiperSlide key={item._id}>
                  <OrderCard item={item}></OrderCard>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* </div> */}
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
              {desert?.map(item => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-8">
              {drinks?.map(item => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
