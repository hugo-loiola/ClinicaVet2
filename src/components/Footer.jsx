import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
      className=" position-static bottom-0 py-3 text-white text-center bg-danger "
    >
      <p>
        Todos os direitos reservados® Feito por{" "}
        <a
          href="https://github.com/hugo-loiola"
          style={{ textDecoration: "none", color: "#000" }}
        >
          Hugo
        </a>
      </p>
    </div>
  );
};

export default Footer;
