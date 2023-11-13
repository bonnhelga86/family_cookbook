import React from "react";
import { useNavigate } from 'react-router-dom';
import Sign from "../../Sections/Sign/Sign";
import * as auth from "../../../utils/authApi";

function SignIn({ setIsLoggedIn, setCurrentUser }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState({email: '', password: ''});

  async function loginUser() {
    try {
      const loginResponse = await auth.login(inputValue.email, inputValue.password);
        if (loginResponse) {
          const tokenCheckResponse =  await auth.tokenCheck();
          if (tokenCheckResponse) {
            setIsLoggedIn(true);
            setCurrentUser({name: tokenCheckResponse.name, email: tokenCheckResponse.email});
            navigate('/recipes', {replace: true});
          }
        }
    } catch (error) {
      console.log(error);
        // setIsFormError(true);
        // setErrorMessage(error);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    loginUser();
  }

  return (
    <section className="sign" aria-label="Секция авторизации">
      <Sign handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />
    </section>
  );
}

export default SignIn;
