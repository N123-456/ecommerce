import React,{useContext} from 'react';
import all_product from './../Components/Assets/all_product';
import { ShopContext } from './../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/Items/Items';
import './CSS/ShopCategory.css';
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
     
      <div className="shopcategory-sort">
        Sort by <img className='shop-category' src={dropdown_icon} alt="" />
      </div>
      </div>
      <div className='shopcategory-products'>
{all_product.map((item,i)=>{
  if(props.category===item.category){
return <Items key={i} item={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
  }
  else{
    return null;
  }
})}

      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>


    </div>
  );
}

export default ShopCategory;
