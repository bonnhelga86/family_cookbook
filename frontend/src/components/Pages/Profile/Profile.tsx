import React from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import * as auth from "../../../utils/authApi";
import CurrentUserContext from '../../../context/CurrentUserContext';
import { ICurrentUser, ISystemMessage } from "../../../utils/interfaceList"
import './Profile.scss';

function Profile({ setCurrentUser }: {setCurrentUser: React.Dispatch<React.SetStateAction<ICurrentUser>>}) {
  const currentUser = React.useContext<ICurrentUser>(CurrentUserContext);
  const [initialInputValue, setInitialInputValue] = React.useState<ICurrentUser>(currentUser);
  const [inputValue, setInputValue] = React.useState<ICurrentUser>(currentUser);
  const [isSubmitActive, setIsSubmitActive] = React.useState(false);
  const [systemMessage, setSystemMessage] = React.useState<ISystemMessage>({message: '', type: null, messageClass: ''});

  async function updateUser() {
    try {
      const updateResponse = await auth.updateUser(inputValue.name, inputValue.email);
        if (updateResponse) {
          setSystemMessage({
            message: 'Данные успешно изменены!',
            type: 'success',
            messageClass: 'profile__system-message_active profile__system-message_success'
          });
          setCurrentUser({name: updateResponse.name, email: updateResponse.email});
        }
    } catch (error) {
      setSystemMessage({
        message: 'Что-то пошло не так...',
        type: 'error',
        messageClass: 'profile__system-message_active profile__system-message_error'
      });
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser();
  };

  React.useEffect(() => {
    setInputValue({name: currentUser.name, email: currentUser.email})
  }, [currentUser]);

  React.useEffect(() => {
    if(inputValue.name !== initialInputValue.name || inputValue.email !== initialInputValue.email ) {
      setIsSubmitActive(true);
    } else {
      setIsSubmitActive(false);
    }
  }, [inputValue]);

  return (
    <section className="profile" aria-label="Профиль пользователя">
      <Card className="profile__content">
        <Card.Body className="profile__form-wrap">
          <Card.Title className="profile__title">Личный кабинет</Card.Title>

          <Form
            noValidate
            name="user-change-form"
            onSubmit={(event) => handleSubmit(event)}
            className="profile__form"
          >

          <FloatingLabel
            controlId="floatingName"
            label="Логин"
            className="profile__label"
          >
            <Form.Control
              value={inputValue.name}
              onChange={(event) => setInputValue({...inputValue, name: event.target.value})}
              className="profile__input"
              type="text"
              placeholder="Введите логин"
            />
          </FloatingLabel>


            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="profile__label"
            >
              <Form.Control
                value={inputValue.email}
                onChange={(event) => setInputValue({...inputValue, email: event.target.value})}
                className="profile__input"
                type="email"
                placeholder="Введите Email"
              />
            </FloatingLabel>

            {/* <FloatingLabel
              controlId="floatingPassword"
              label="Введите новый пароль"
              className="profile__label"
            >
              <Form.Control
                onChange={(event) => setInputValue({...inputValue, password: event.target.value})}
                className="profile__input"
                type="password"
                placeholder="Введите новый пароль"
              />
            </FloatingLabel> */}

            {/* <FloatingLabel
              controlId="floatingCheckPassword"
              label="Подтвердите действие паролем"
              className="profile__label"
            >
              <Form.Control
                onChange={(event) => setInputValue({...inputValue, repeat_password: event.target.value})}
                className="profile__input"
                type="password"
                placeholder="Введите пароль"
              />
            </FloatingLabel> */}

            <Form.Text className={`profile__system-message ${systemMessage.messageClass}`}>
              {systemMessage.message}
            </Form.Text>

            <Button
              className={`profile__button ${!isSubmitActive && 'profile__button_disabled'}`}
              type="submit"
            >
              Редактировать
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Profile;
