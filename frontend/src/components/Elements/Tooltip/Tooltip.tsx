import '../Popup/Popup.scss';
import { ITooltip } from '../../../utils/interfaceList';

function Tooltip({ popupName, isPopupOpen, children }: ITooltip) {

  return(
    <div className={`popup popup-${popupName} popup_events-none ${isPopupOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_size_small">
        {children}
      </div>
    </div>
  )
}

export default Tooltip;
