import React from "react";
import { Col } from "react-bootstrap";

const Info = (props) => {
  return (
    <Col
      style={{
        border: "1px solid #0D8CFF",
        borderRadius: "5px",
        boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
      }}
      className="p-3"
    >
      {props.children}
    </Col>
  );
};

export default Info;
