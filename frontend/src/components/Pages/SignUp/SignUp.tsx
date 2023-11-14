import React from "react";
import { useNavigate } from 'react-router-dom';
import Sign from "../../Sections/Sign/Sign";
import * as auth from "../../../utils/authApi";
import { ICurrentUser, IInputValue } from "../../../utils/interfaceList";

function SignUp(
  {
    setIsLoggedIn,
    setCurrentUser
  }:
  {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentUser: React.Dispatch<React.SetStateAction<ICurrentUser>>
  }
) {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState<IInputValue>
  (
    {name: '', email: '', password: '', repeat_password: ''}
  );

  async function registerUser() {
    try {
      const registerResponse = await auth.register(inputValue.name, inputValue.email, inputValue.password);
      if (registerResponse) {
        const loginResponse = await auth.login(inputValue.email, inputValue.password);
        if (loginResponse) {
          const tokenCheckResponse =  await auth.tokenCheck();
          if (tokenCheckResponse) {
            setIsLoggedIn(true);
            setCurrentUser({name: tokenCheckResponse.name, email: tokenCheckResponse.email});
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

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <section className="sign" aria-label="Секция регистрации">
      <Sign handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} />
    </section>
  );
}

export default SignUp;
