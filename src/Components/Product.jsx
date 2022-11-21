import React, { Component } from "react";
import search from "../images/search.svg";
import rotate from "../images/360.svg";

class Product extends Component {
  render() {
    const {
      discount,
      picupfrom,
      discription,
      img,
      rate,
      to,
    } = this.props;

    return (
      <div className="product card h-100 p-1">
        <div className="image position-relative">
          <div className="position-absolute p-2 m-2 rounded-3 bg-light" >
            <img src={rotate} alt="360" className="rotate" />
          </div>
          <img src={img} className="card-img-top" alt="img" />
        </div>
        <div className="card-body">
          <p className="card-text fw-bold">{discription}</p>

          <div className="d-flex justify-content-between align-items-center my-3">
            <div className="price">
              <div className="new_price fw-bold">
                <span className="fs-4 me-1">{"9,999"}</span>
                LE
              </div>
              {discount && (
                <div className="old_price">
                  <span className="text-decoration-line-through text-black-50 fw-bold">
                    {"9,999"} LE
                  </span>
                  <span className="discount badge text-black px-3 ms-3">
                    {discount}%
                  </span>
                </div>
              )}
            </div>

            <img src={search} alt="" className="adidas" />
          </div>

          <div className="rate d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center gap-1">
              <div className="star active"></div>
              <div className="star active"></div>
              <div className="star active"></div>
              <div className="star active"></div>
              <div className="star"></div>
            </div>
            <div>
              <span className="fw-bold ms-3">"{rate}" of 5</span>
            </div>
          </div>

          {picupfrom ? (
            <div className="mt-3 text-center">
              Picup From : <span className="fw-bold">{picupfrom}</span>
            </div>
          ) : (
            <div className="information d-flex align-items-center justify-content-between mt-3">
              <div className="from">
                From UK:
              </div>
              <div className="to">
                to: <span className="fw-bold">{to}</span>
              </div>
              <div className="time">
                in: <span className="fw-bold">{"10"} Days</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Product;
