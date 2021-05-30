import React, { Fragment, useState } from "react"
import WhatsappIcon from "../../Assets/img/Whatsapp.png"
import Modal from "../Utils/Modal"

export default function Whatsapp() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Fragment>
      <div className="whatsapp-app" onClick={() => setModalShow(!modalShow)}>
        {/* <ReactWhatsapp message="test" number="+628980789580" /> */}
        <p>Pemesanan</p>
        <div className="img-box">
          <img src={WhatsappIcon} alt="whatsapp" />
        </div>
      </div>
      {modalShow && <Modal setModalShow={setModalShow} />}
    </Fragment>
  )
}
