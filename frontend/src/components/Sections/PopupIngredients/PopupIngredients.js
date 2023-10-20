import React from 'react';
import Popup from '../Popup/Popup';
import './PopupIngredients.scss';

function PopupIngredients({ isPopupOpen, ingredientList }) {
  return(
    <Popup
      isPopupOpen={isPopupOpen}
      hover="true"
      popupName="ingredients"
    >
      <ul className="popup-ingredients__list">
        {ingredientList.map(ingredient => {
          return(
            <li className="popup-ingredients__item" key={ingredient.item}>
              {ingredient.item}
            </li>
          )
        })}
      </ul>
    </Popup>
  )
}

export default PopupIngredients;
