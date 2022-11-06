import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Message from '../components/call/Message';
import Search from '../assets/Vector.png'
import { BsMicFill, BsFillChatLeftFill, BsSearch } from 'react-icons/bs'
import SearchCampaign from '../components/campaigns/searchCampaign';

const customStyles = {
  overlay: {
    backgroundColor: '#25252580'
  },
  content: {
    top: '50%',
    color: '#252525',
    left: 'auto',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 10,
    width: '326px',
    height: '338px',
    backgroundColor: '#000000',
    borderRadius: '37px',
    border: 'none',
  },
};


const NewModal = () => {
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
    <div className='flex'>
      <BsSearch onClick={openModal} height={15} width={15} className='' />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex-1 bg-[#000000]'>
        <div className='text-white sticky top-0' onClick={closeModal}>X</div>
         <SearchCampaign />
        </div>
      </Modal>
    </div>
  );
}

export default NewModal