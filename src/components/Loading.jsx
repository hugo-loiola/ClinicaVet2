import React from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff  ",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <PulseLoader color="#0D8CFF" />
    </div>
  );
};

export default Loading;
