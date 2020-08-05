import React from "react";
import "./Publish.css";
import Button from "../Button/Button";
import UserFoto from "../../images/userAna.png";

function Publish() {
  return (
    <>
      <div className="center" name="publish">
        <div className="publishBar">
          <div>
            <img src={UserFoto} alt="" />
            <input
              type="text"
              placeholder="Conte alguma coisa..."
              className="publishInput"
            />
          </div>
          <Button name="Publicar"></Button>
        </div>
      </div>
    </>
  );
}

export default Publish;
