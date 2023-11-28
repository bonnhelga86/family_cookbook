import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popup from '../Popup/Popup';
import { tabList } from '../../../utils/tabList';
import './PopupAddRecipe.scss';

function PopupAddRecipe(
  { isPopupOpen, setIsPopupOpen }:
  { isPopupOpen: boolean, setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>> }
) {
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const [addRecipeFormValue, setAddRecipeFormValue] = React.useState({});

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  }

  return(
    <Popup
      size="large"
      popupName="add-recipe"
      isPopupOpen={isPopupOpen}
      setIsPopupOpen={setIsPopupOpen}
    >
      <Form
        noValidate
        name="add-recipe-form"
        onSubmit={(event) => handleSubmit(event)}
        className="add-recipe add-recipe__form"
      >
        <div className="add-recipe__tabs-wrap">
          <Tabs
            id="recipe-tab"
            activeKey={`tab_${activeTabIndex}`}
            className="add-recipe__list"
            fill
            variant="underline"
          >
          {tabList.map((tab, index) => {
            return (
              <Tab
                tabClassName="add-recipe__tab"
                key={index}
                title={tab.title}
                eventKey={`tab_${index}`}
                className="tab"
                disabled
              >
                {tab.content}
              </Tab>
            )
          })}
          </Tabs>
        </div>

        <div className="add-recipe__button-wrap">
          <Button
            onClick={() => setActiveTabIndex(activeTabIndex > 0 ? activeTabIndex - 1 : 0)}
            variant="danger"
            className={`add-recipe__button ${activeTabIndex === 0 && 'add-recipe__button_disabled'}`}
            type="button"
          >
            Назад
          </Button>

          {activeTabIndex === tabList.length-1
            ? <Button
                variant="danger"
                className="add-recipe__button"
                type="submit"
              >
                Сохранить
              </Button>
            : <Button
                onClick={() => setActiveTabIndex(activeTabIndex < tabList.length-1 ? activeTabIndex + 1 : tabList.length-1)}
                variant="danger"
                className="add-recipe__button"
                type="button"
              >
                Далее
              </Button>
          }
        </div>

      </Form>
    </Popup>
  )
}

export default PopupAddRecipe;
