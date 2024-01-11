import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]); // State to hold card details

  const { id } = useParams(); // Getting the id from the URL parameters

  const history = useNavigate(); // Hook for navigation

  const dispatch = useDispatch(); // Hook to dispatch actions

  const getData = useSelector((state) => state.cartReducer.carts); // Getting the cart data from the redux store

  // Function to compare the id from the URL with the ids in the cart data
  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id; // Comparing the ids
    });
    setData(compareData); // Setting the state with the matched data
  };

  // Function to dispatch the ADD action with the card data
  const send = (e) => {
    dispatch(ADD(e));
  };

  // Function to dispatch the DLT action with the id and navigate to the home page
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // Function to dispatch the REMOVE action with the item
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  // Using the useEffect hook to call the compare function when the id changes
  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Items Details Page</h2>

        <section className="container mt-3">
          <div className="itemsDetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />{" "}
                    {/* Displaying the image of the item */}
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            {" "}
                            <strong>Restaurant</strong> : {ele.rname}{" "}
                            {/* Displaying the restaurant name */}
                          </p>
                          <p>
                            {" "}
                            <strong>Price</strong> : ₹{ele.price}{" "}
                            {/* Displaying the price */}
                          </p>
                          <p>
                            {" "}
                            <strong>Dishes</strong> : {ele.address}{" "}
                            {/* Displaying the dishes */}
                          </p>
                          <p>
                            {" "}
                            <strong>Total</strong> :₹ {ele.price * ele.qnty}{" "}
                            {/* Calculating and displaying the total price */}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id) // If quantity is 1 or less, delete the item
                                  : () => remove(ele) // Else, remove one quantity of the item
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>{" "}
                            {/* Displaying the quantity */}
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)} // Adding the item to the cart
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★{" "}
                            </span>{" "}
                            {/* Displaying the rating */}
                          </p>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{ele.somedata} </span>{" "}
                            {/* Displaying the order review */}
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <i
                                className="fas fa-trash"
                                onClick={() => dlt(ele.id)} // Deleting the item when the trash icon is clicked
                                style={{
                                  color: "red",
                                  fontSize: 20,
                                  cursor: "pointer",
                                }}
                              ></i>{" "}
                            </span>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
