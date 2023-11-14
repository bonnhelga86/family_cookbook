import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { IInputValue } from "../../../utils/interfaceList";
import './Sign.scss';

function Sign(
  {
    handleSubmit,
    inputValue,
    setInputValue
  }:
  {
    handleSubmit: React.FormEventHandler<HTMLFormElement>,
    inputValue: IInputValue,
    setInputValue: React.Dispatch<React.SetStateAction<IInputValue>>
  }
) {
  const location = useLocation();

   return (
    <section className="sign" aria-label="Секция авторизации">
      <Card className="sign__content">
        <Card.Header className="sign__header">
          <Card.Link className="sign__logo-link" as={Link} to="/">Family CookBook</Card.Link>
        </Card.Header>
        <Card.Body>
          <Card.Title className="sign__title">
            {(location.pathname === '/signup') ? 'Регистрация' : 'Авторизация'}
          </Card.Title>
          <Form
            noValidate
            name="sign-form"
            onSubmit={(event) => handleSubmit(event)}
            className="sign__form"
          >

          {(location.pathname === '/signup')
            && <FloatingLabel
                  controlId="floatingName"
                  label="Логин"
                  className="sign__label"
                >
                  <Form.Control
                    onChange={(event) => setInputValue({...inputValue, name: event.target.value})}
                    className="sign__input"
                    type="text"
                    placeholder="Введите логин"
                  />
                </FloatingLabel>
          }

            <FloatingLabel
              controlId="floatingInput"
              label="Email"
              className="sign__label"
            >
              <Form.Control
                onChange={(event) => setInputValue({...inputValue, email: event.target.value})}
                className="sign__input"
                type="email"
                placeholder="Введите Email"
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Пароль"
              className="sign__label"
            >
              <Form.Control
                onChange={(event) => setInputValue({...inputValue, password: event.target.value})}
                className="sign__input"
                type="password"
                placeholder="Введите пароль"
              />
            </FloatingLabel>

            {(location.pathname === '/signup')
              && <FloatingLabel
                    controlId="floatingRepeatPassword"
                    label="Повторите пароль"
                    className="sign__label"
                  >
                    <Form.Control
                      onChange={(event) => setInputValue({...inputValue, repeat_password: event.target.value})}
                      className="sign__input"
                      type="password"
                      placeholder="Повторите пароль"
                    />
                  </FloatingLabel>
            }

            <Button className="sign__button" type="submit">
              {(location.pathname === '/signup') ? 'Зарегистрироваться' : 'Войти'}
            </Button>

            <Form.Text className="sign__text" id="passwordHelpBlock" muted>
              {(location.pathname === '/signup') ? 'Уже зарегистрированы?' : 'Еще нет аккаунта?'}
              <Link
                className="sign__link"
                to={(location.pathname === '/signup') ? '/signin' : '/signup'}
              >
                {(location.pathname === '/signup') ? 'Войти' : 'Зарегистрироваться'}
              </Link>
            </Form.Text>

          </Form>
        </Card.Body>
      </Card>
    </section>
  );
}

export default Sign;
