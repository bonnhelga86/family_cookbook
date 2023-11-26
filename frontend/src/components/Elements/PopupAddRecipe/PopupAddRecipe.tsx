import Popup from '../Popup/Popup';
import './PopupAddRecipe.scss';

function PopupAddRecipe(
  { isPopupOpen, setIsPopupOpen }:
  { isPopupOpen: boolean, setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>> }
) {
  return(
    <Popup
      popupName="add-recipe"
      isPopupOpen={isPopupOpen}
      setIsPopupOpen={setIsPopupOpen}
    >

    </Popup>
  )
}

export default PopupAddRecipe;
