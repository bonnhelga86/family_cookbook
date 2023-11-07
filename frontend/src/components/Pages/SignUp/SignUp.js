import React from "react";
import { useNavigate } from 'react-router-dom';
import Sign from "../../Sections/Sign/Sign";
import * as auth from "../../../utils/authApi";

function SignUp({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState({name: '', email: '', password: '', repeat_password: ''});

  async function registerUser() {
    try {
      const registerResponse = await auth.register(inputValue.name, inputValue.email, inputValue.password);
      if (registerResponse) {
        const loginResponse = await auth.login(inputValue.email, inputValue.password);
        if (loginResponse) {
          const tokenCheckResponse =  await auth.tokenCheck();
          if (tokenCheckResponse) {
            setIsLoggedIn(true);
            navigate('/recipes', {replace: true});
          }
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
    registerUser();
  }

  return (
    <section className="sign" aria-label="Секция регистрации">
      <Sign handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />
    </section>
  );
}

export default SignUp;
