/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import NewNavbar from './components/Navbar/New Navbar';
import Modal from './components/Modal/Modal';

import { Outlet } from 'react-router';
export default ({darkMode, setDarkMode, modal, selectModal, currentId, setCurrentId}) => {
    return (
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <NewNavbar darkMode={darkMode} setDarkMode={setDarkMode} selectModal={selectModal} />
          <Modal
            currentId={currentId}
            setCurrentId={setCurrentId}
            displayModal={modal}
            closeModal={selectModal}
          />
        <Outlet />
      </div>
    );
  };
  