import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../Tabs.scss';

function TabMain() {
  const [tabMainValue, setTabMainValue] = React.useState({
    title: '',
    description: '',
    duration: 0,
    level: 0
  });

  return(
    <>
      <FloatingLabel
        controlId="floatingTitle"
        label="Название рецепта"
        className="tab__label"
      >
        <Form.Control
          onChange={(event) => setTabMainValue({...tabMainValue, title: event.target.value})}
          className="tab__input"
          type="text"
          placeholder="Название рецепта"
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingDescription"
        label="Описание"
        className="tab__label"
      >
        <Form.Control
          onChange={(event) => setTabMainValue({...tabMainValue, description: event.target.value})}
          className="tab__input"
          type="text"
          placeholder="Описание"
        />
      </FloatingLabel>

      <div className="tab__input-wrap">
        <FloatingLabel
          controlId="floatingDuration"
          label="Время приготовления (минуты)"
          className="tab__label"
        >
          <Form.Control
            onChange={(event) => setTabMainValue({...tabMainValue, duration: +event.target.value})}
            className="tab__input"
            type="text"
            placeholder="Время приготовления (минуты)"
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingLevel"
          label={`Сложность: ${tabMainValue.level}`}
          className="tab__label"
        >
          <Form.Range
            min={0}
            max={5}
            step={1}
            value={tabMainValue.level}
            onChange={(event) => setTabMainValue({...tabMainValue, level: +event.target.value})}
            className="tab__range"
            placeholder="Сложность"
          />
        </FloatingLabel>
      </div>
    </>
  )
}

export default TabMain;
