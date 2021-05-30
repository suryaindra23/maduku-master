import React from "react"
import Logo from "../../Assets/img/Logo.png"

export default function Modal({ setModalShow }) {
  return (
    <div className="modal-app">
      <div className="upper-content">
        <i
          className="fas fa-chevron-left"
          onClick={() => setModalShow(false)}
        ></i>
        <div className="content">
          <img src={Logo} alt="logo" />
          <p>
            Jangan ragu untuk bertanya kepada kami. <br />
            Klik di bawah untuk memulai chat.
          </p>
        </div>
      </div>
      <a
        className="down-content"
        href="https://wa.me/message/3AIA7SEE4W4SI1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Logo} alt="logo" />
        <p>Sarang Maduku</p>
        <p>
          Online <span></span>
        </p>
      </a>
    </div>
  )
}
