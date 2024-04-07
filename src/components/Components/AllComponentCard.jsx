import cartIcon from "../../assets/cart.png"
import React from "react";

export default function AllComponentCard({ component }) {
  console.log(component.productImgURL);
  return (
    <div className="comp_single_card">
        <div className="product_img_container">
        <img className="product_img" src={component.productImgURL} alt="" />
        </div>
        <div className="name_desc_container">
            <h4 className="product_name">{component.productName}</h4>
            <p className="product_desc">{component.description}</p>
        </div>
        <div className="card_footer">
            <img className="cart_icon" src={cartIcon} alt="" />
            <p className="product_price">{component.price}</p>
        </div>
    </div>
  );
}
