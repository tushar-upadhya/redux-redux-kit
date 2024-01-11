import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData"; // Importing data for the cards
import "./style.css"; // Importing styles
import { useDispatch } from "react-redux"; // Hook to dispatch actions
import { ADD } from "../redux/actions/action"; // Importing the ADD action

// Component to display cards
const Cards = () => {
  const [data, setData] = useState(CardsData); // State to hold card data

  const dispatch = useDispatch(); // Hook to dispatch actions

  // Function to dispatch the ADD action with the card data
  const send = (e) => {
    dispatch(ADD(e));
  };

  // Rendering the cards
  return (
    <div className="container mt-3">
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", border: "none" }}
                className="mx-2 mt-4 card_style"
              >
                <Card.Img
                  variant="top"
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className="mt-3"
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price : ₹ {element.price}</Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      onClick={() => send(element)}
                      className="col-lg-12"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
