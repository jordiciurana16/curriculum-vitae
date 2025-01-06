import React, { useState } from "react";
import styles from "./Header.module.css";
import {
  BsEnvelopeFill,
  BsFillTelephoneFill,
  BsFillGeoAltFill,
  BsGlobe2,
  BsFillClipboardCheckFill,
} from "react-icons/bs";
import photo from "../../../public/profilefoto.png";

const Header = ({ isA4Format }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  // Copy to clipboard

  const copyToClipboard = (text, identifier) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(identifier);
        setTimeout(() => setCopySuccess(false), 3500); // Temporary display
      })
      .catch((error) => {
        console.error("Unable to copy to clipboard:", error);
      });
  };

  return (
    <header className={`${isA4Format ? " mt-4" : ""} bg-dark`}>
      <div className=" pt-1 pb-1 d-flex align-items-center container">
        <div
          className={` ${
            isA4Format ? styles.a4PhotoFrame : styles.photoFrame
          } rounded-circle ${
            isA4Format ? "position-sticky" : `d-none d-md-block`
          } `}
        >
          <img
            src={photo}
            alt="CV Photo"
            className={` ${
              isA4Format ? styles.a4ImageSize : styles.imageSize
            } ${styles.CVimg} rounded-circle `}
          />
        </div>
        <div className="text-center container">
          <div className={`row ${isA4Format ? "" : "pb-md-3"}`}>
            <h1 className="text-white display-4">Jordi Ciurana Sales</h1>
          </div>
          <div className={`row ${isA4Format ? "pb-2 position-sticky" : ""}`}>
            <div className="contact-section d-md-flex md-flex-column text-white justify-content-between">
              <div
                className={`contact-item text-nowrap ${
                  isA4Format ? styles.a4ContactLinks : styles.contactLinks
                } me-3`}
                onClick={() => copyToClipboard("jciuranas@gmail.com", "email")}
              >
                <span>
                  <BsEnvelopeFill
                    className={`${isA4Format ? "me-1" : "me-3"}`}
                  />
                  jciuranas@gmail.com
                </span>
              </div>
              <div
                className={`contact-item text-nowrap ${
                  isA4Format ? styles.a4ContactLinks : styles.contactLinks
                } me-3`}
                onClick={() => copyToClipboard("638 248 787", "telephone")}
              >
                <span>
                  <BsFillTelephoneFill
                    className={`${isA4Format ? "me-1" : "me-2"}`}
                  />
                  638 248 787
                </span>
              </div>
              <div
                className={`contact-item ${
                  isA4Format ? styles.a4ContactLinks : styles.contactLinks
                } me-3`}
              >
                <span>
                  <a
                    href="https://www.google.es/maps/place/Sant+Cugat+del+Vall%C3%A8s,+Barcelona/@41.4755648,2.0316823,13z/data=!4m6!3m5!1s0x12a496c2a6d57035:0xb16124d430411319!8m2!3d41.4720702!4d2.0865154!16s%2Fg%2F11cn638mkm?entry=ttu"
                    target="_blank"
                    className="text-decoration-none text-white text-nowrap"
                  >
                    <BsFillGeoAltFill
                      className={`${isA4Format ? "me-1" : "me-2"}`}
                    />
                    Sant Cugat del Vallès
                  </a>
                </span>
              </div>
              <div
                className={`contact-item ${
                  isA4Format ? styles.a4ContactLinks : styles.contactLinks
                } me-3`}
              >
                <span>
                  <a
                    href="https://jordiciurana16.github.io"
                    target="_blank"
                    className="text-decoration-none text-white text-nowrap"
                  >
                    <BsGlobe2 className={`${isA4Format ? "me-1" : "me-2"}`} />
                    www.jordiciurana16.github.io
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="position-fixed fixed-bottom d-flex justify-content-center text-center">
          {copySuccess === "email" && (
            <div className="alert alert-success" role="alert">
              <span>
                <BsFillClipboardCheckFill className="me-2" />
                Copied email to clipboard
              </span>
            </div>
          )}

          {copySuccess === "telephone" && (
            <div className="alert alert-success" role="alert">
              <span>
                <BsFillClipboardCheckFill className="me-2" />
                Copied telephone to clipboard
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
