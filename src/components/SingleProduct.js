import React from "react";

const SingleProduct = ({ prod, cart, setCart }) => {
  console.log(prod);
  return (
    <div className="products">
      <img src={prod.url} alt={prod.title} />
      <div className="productDesc">
        <span>{prod.id}</span>
        <span>{prod.title}</span>
      </div>

      <button 
      className="add remove"
      onClick={ () => {
        setCart(cart.filter( (c) => c.id !== prod.id ))
      } }>
        Remove from Cart
        </button>

      <button
        className="add"
        onClick={() => {
          setCart(...cart, prod);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default SingleProduct;
