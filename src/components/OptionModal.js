import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleCloseModal}
        contentLabel={props.selectedOption}
    >
        <h1>{props.selectedOption}</h1>
        <button onClick={props.handleCloseModal}>Ok!</button>
    </Modal>
);

export default OptionModal;