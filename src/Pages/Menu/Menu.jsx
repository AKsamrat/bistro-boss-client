import { Helmet } from 'react-helmet-async';
import Cover from './Cover';
import img from '../../assets/menu/banner3.jpg';
import dessert from '../../assets/menu/dessert-bg.jpeg';
import pizzas from '../../assets/menu/pizza-bg.jpg';
import salads from '../../assets/menu/salad-bg.jpg';
import soups from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../Hooks/UseMenu.jsx';
import SectionTitle from '../../Component/SectionTitle';
import ManuCategory from './ManuCategory';
import SubCover from './SubCover.jsx';

const Menu = () => {
  const [menu] = useMenu();

  const desert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={img} title={'Our menu'}></Cover>
      {/* offered item===================== */}

      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <ManuCategory items={offered} title={'offered'}></ManuCategory>

      {/* dessert items =============== */}
      <SubCover
        title={'DESSERT'}
        details={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
        img={dessert}
      ></SubCover>
      <ManuCategory items={desert} title={'dessert'}></ManuCategory>

      {/* pizza items============================== */}
      <SubCover
        title={'PIZZA'}
        details={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
        img={pizzas}
      ></SubCover>
      <ManuCategory items={pizza} title={'pizza'}></ManuCategory>

      {/* salads items ========================= */}
      <SubCover
        title={'salad'}
        details={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
        img={salads}
      ></SubCover>
      <ManuCategory items={salad} title={'salad'}></ManuCategory>
      {/* soup items ========================= */}
      <SubCover
        title={'soups'}
        details={
          'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
        }
        img={soups}
      ></SubCover>
      <ManuCategory items={soup} title={'soup'}></ManuCategory>
    </div>
  );
};

export default Menu;
