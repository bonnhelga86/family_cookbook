import Tooltip from '../Tooltip/Tooltip';
import { IIngredientList } from '../../../utils/interfaceList';
import './PopupIngredients.scss';

function PopupIngredients({ isPopupOpen, ingredientList }: {isPopupOpen: boolean, ingredientList: IIngredientList[]}) {
  return(
    <Tooltip
      popupName="ingredients"
      isPopupOpen={isPopupOpen}
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
    </Tooltip>
  )
}

export default PopupIngredients;
