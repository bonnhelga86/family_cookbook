import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import CustomRoutes from '../Routes/CustomRoutes';
import CurrentUserContext from '../../context/CurrentUserContext';
import * as auth from "../../utils/authApi";
import { ICurrentUser } from "../../utils/interfaceList";

import './App.scss';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [currentUser, setCurrentUser] = React.useState<ICurrentUser>({name: '', email: ''});

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

  async function handleLogout() {
    try {
      const logoutResponse =  await auth.logout();
      if (logoutResponse) {
        setIsLoggedIn(false);
        setCurrentUser({name: '', email: ''});
        navigate('/', {replace: true});
        // return logoutResponse;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function checkAuth() {
    try {
      const tokenCheckResponse =  await auth.tokenCheck();
        if (tokenCheckResponse) {
          setIsLoggedIn(true);
          setCurrentUser({name: tokenCheckResponse.name, email: tokenCheckResponse.email});
          navigate('/recipes', {replace: true});
        }
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    checkAuth();
  }, [])

  return (
    <>
      {isLoggedIn != null &&
        <CurrentUserContext.Provider value={currentUser}>
          {((location.pathname !== '/signup') && (location.pathname !== '/signin'))
            && <Header
                  isLoggedIn={isLoggedIn}
                  handleLogout={handleLogout}
                />
          }

          <main className="content">
            <CustomRoutes
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setCurrentUser={setCurrentUser}
            />
          </main>

          {((location.pathname !== '/signup') && (location.pathname !== '/signin')) && <Footer />}

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
