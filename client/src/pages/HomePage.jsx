import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="homepagetotal">
      <h1 className="thetitle">
        <span>Band</span>⚡Connect
      </h1>
      <h2 className="saveurshow">SAVE YOUR SHOW</h2>
      <h2 className="findurhero">FIND YOUR HERO</h2>
      <div className="merguez">
        <div className="rockbox">
          <div className="menualone">
            <button
              type="button"
              className="menuclick"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
            >
              MENU
            </button>
          </div>
          <div className="doublep">
            <p className="thunderclood">
              the Thundercloud javagods saturday night
            </p>
            <p className="mulhouse">on mulhouse sunset drive ☢</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <ul>
              <li>
                <a href="#annonce">Annonce</a>
              </li>
              <li>
                <a href="#mon-compte">Mon compte</a>
              </li>
              <li>
                <a href="#a-propos">À propos de nous</a>
              </li>
              <li>
                <a href="#avoir">a voir</a>
              </li>
              <li>
                <a href="#arevoir">a voir</a>
              </li>
            </ul>
            <button type="button" className="close-btn" onClick={toggleModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
