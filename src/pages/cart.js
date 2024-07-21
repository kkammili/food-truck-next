"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../app/styles/_cart.scss";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { updateItemCount } from "../../store/actions/cartActions";
import { updateItemCount } from '../store/actions/cartActions';

import Link from "next/link";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state?.cart?.cart) || {};

  const handleCountChange = (id, count) => {
    if (count >= 0) {
      dispatch(updateItemCount(id, count));
    }
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <section className="h-100">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0">Shopping Cart</h3>
              <Link href={"/"}>
                <div>
                  <p className="mb-0">Prev Page</p>
                </div>
              </Link>
            </div>

            {Object.entries(cartItems)?.map(([key, item]) => {
              return (
                <div key={key} className="card rounded-3 mb-4">
                  <div className="card-body p-4">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.url}
                          className="img-fluid rounded-3"
                          alt={item.title}
                        />
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <p className="lead fw-normal mb-2">{item.title}</p>
                      </div>
                      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-link px-2"
                          onClick={() => handleCountChange(key, item.count - 1)}
                        >
                          <i className="fas fa-minus"></i>
                        </button>

                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value={item.count}
                          onChange={(e) => handleCountChange(key, parseInt(e.target.value))}
                          type="number"
                          className="form-control form-control-sm"
                        />

                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-link px-2"
                          onClick={() => handleCountChange(key, item.count + 1)}
                        >
                          <i className="fas fa-plus"></i>
                        </button>
                      </div>
                      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 className="mb-0">
                          ${item.currPrice || item.price}
                        </h5>
                      </div>
                      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" className="text-danger">
                          <i className="fas fa-trash fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="card mb-4">
              <div className="card-body p-4 d-flex flex-row">
                <div data-mdb-input-init className="form-outline flex-fill">
                  <input
                    type="text"
                    id="form1"
                    onChange={() => {}}
                    className="form-control form-control-lg"
                  />
                  <label className="form-label">Discount code</label>
                </div>
                <button className="apply mg">Apply</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <button type="button" className="apply">
                  Proceed to Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
