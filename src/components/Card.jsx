import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_name, image, details, price, id } = product
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl p-5 ">
            <NavLink to={`/details/${id}`}>
                <figure>
                    <img
                        src={image}
                        alt={product_name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{price}</p>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Card;