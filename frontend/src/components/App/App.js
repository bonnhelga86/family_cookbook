import React from 'react';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import CustomRoutes from '../Routes/CustomRoutes';
import CurrentUserContext from '../../context/CurrentUserContext';

import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  // function closePopup() {
  //   setIsPopupOpen(false);
  // }

  // function handleCloseClick(event) {
  //   if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
  //     closePopup();
  //   }
  // }

  // function handleEscClose(event) {
  //   if (event.key === 'Escape') {
  //     closePopup();
  //   }
  // }

  return (
    <>
      {isLoggedIn != null &&
        <CurrentUserContext.Provider value={currentUser}>
          <Header
            isLoggedIn={isLoggedIn}
          />

          <main className="content">
            <CustomRoutes
              isLoggedIn={isLoggedIn}
            />
          </main>

          <Footer />

          {/* <PopupIngredients
            isPopupOpen={isPopupOpen}
            onClose={handleCloseClick}
            onEscapeClose={handleEscClose}
          /> */}

        </CurrentUserContext.Provider>
      }
    </>
  );
}

export default App;
