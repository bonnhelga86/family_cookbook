import {  Route, Routes, Navigate  } from 'react-router-dom';
import Main from '../Pages/Main/Main';
import Recipes from '../Pages/Recipes/Recipes';
import Profile from '../Pages/Profile/Profile';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';

function CustomRoutes({ isLoggedIn, setIsLoggedIn }) {
  return (
    <Routes>
      {/* <Route path="/signup" element={
        <SignRoute element={Register} isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />}
      />

      <Route path="/signin" element={
        <SignRoute element={Login} isLoggedIn={isLoggedIn} handleLoggedIn={handleLoggedIn} />}
      /> */}

      <Route path="/signup" element={ <SignUp setIsLoggedIn={setIsLoggedIn} /> }/>

      <Route path="/signin" element={ <SignIn setIsLoggedIn={setIsLoggedIn} /> }/>

      <Route path="/" element={ <Main /> }/>

      <Route path="/recipes" element={ <Recipes isLoggedIn={isLoggedIn} /> }/>

      <Route path="/profile" element={ <Profile /> }/>

      {/* <Route path="/movies" element={
        <ProtectedRoute element={Movies} isLoggedIn={isLoggedIn} /> }
      />

      <Route path="/saved-movies" element={
        <ProtectedRoute element={SavedMovies} isLoggedIn={isLoggedIn} /> }
      />

      <Route path="/profile" element={
        <ProtectedRoute
          element={Profile}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          setCurrentUser={setCurrentUser}
        />
      }/> */}

      {/* <Route path="/not-found" element={ <NotFound /> }/> */}

      <Route path="*" element={<Navigate to="/" replace /> }/>

    </Routes>
  );
}

export default CustomRoutes;
