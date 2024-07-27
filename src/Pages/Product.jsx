import React, { useContext } from 'react';
import all_product from '../Components/Assets/all_product';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { ShopContext } from '../Context/ShopContext';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  console.log("products:",{all_product})
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
     <BreadCrums product={product}/>
     <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
      </div>
  );
}

export default Product;
