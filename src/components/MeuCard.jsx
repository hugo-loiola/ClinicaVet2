import React from "react";
import { Card } from "react-bootstrap";

const MeuCard = (props) => {
  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
        transition: "transform 0.3s ease",
        border: "1px solid #0D8CFF",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {props.children}
    </Card>
  );
};

export default MeuCard;
