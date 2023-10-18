import React from 'react';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import CustomRoutes from '../Routes/CustomRoutes';
import CurrentUserContext from '../../context/CurrentUserContext';

import './App.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

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
        </CurrentUserContext.Provider>
      }
    </>
  );
}

export default App;
