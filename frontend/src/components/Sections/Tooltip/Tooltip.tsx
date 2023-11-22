import '../Popup/Popup.scss';
import { IPopup } from '../../../utils/interfaceList';

function Tooltip({ popupName, isPopupOpen, children }: IPopup) {

  return(
    <div className={`popup popup-${popupName} popup_events-none ${isPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        {children}
      </div>
    </div>
  )
}

export default Tooltip;
