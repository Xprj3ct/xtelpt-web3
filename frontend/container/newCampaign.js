import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BsMicFill, BsFillChatLeftFill } from 'react-icons/bs'
import NewNotification from '../components/call/NewNotification';

const customStyles = {
  overlay: {
    backgroundColor: '#25252580'
  },
  content: {
    top: '39%',
    color: '#252525',
    left: 'auto',
    right: '66%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 10,
    height: '630px',
    backgroundColor: '#252525',
    borderRadius: '37px',
    width: '326px',
    height: '338px',
    border: 'none',
  },
};

const NewCampaign = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = '#000';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div>
          <div className='' onClick={openModal}>NOTIFICATION </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className='flex-1 bg-[#252525]'>
            <div className='text-white sticky top-0' onClick={closeModal}>X</div>
              <NewNotification />
            </div>
          </Modal>
        </div>
      );
}

export default NewCampaign