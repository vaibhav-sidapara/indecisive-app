import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        contentLabel={props.selectedOption}
        closeTimeoutMS={100}
        ariaHideApp={false}
        className="modal"
    >
        <h1 className="modal--title">Selected Option</h1>
        <p className="modal--body">{props.selectedOption}</p>
        <button className="button" onClick={props.handleCloseModal}>Ok!</button>
    </Modal>
);

export default OptionModal;