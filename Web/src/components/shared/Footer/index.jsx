import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="fixed-bottom Footer">
      <footer class="bg-light text-center text-lg-start fixed-bottom">
        <div class="text-center p-3 Foot">
          ©2021 Projeto Netflix
          <a href="https://github.com/rafaelmasselli/Front-Netflix">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZcKR3b2Q6L7kLv3kV04kBtcs-FaYRsYfxRQ&usqp=CAU"
              className="image"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
