import React from 'react';
import './Popup.scss';

function Popup({ popupName, isPopupOpen, onClose, onEscapeClose, hover=false, children }) {
  React.useEffect(() => {
    if (!isPopupOpen) return;

    if(!hover) {
      document.addEventListener('keyup', onEscapeClose);

      return() => {
        document.removeEventListener('keyup', onEscapeClose);
      }
    }
  }, [isPopupOpen])

  return(
    <div
        className={`popup popup-${popupName} ${isPopupOpen ? "popup_opened" : ""} ${hover ? 'popup_events-none' : ''}`}
        onClick={onClose}
    >
      <div className="popup__container">
        {!hover &&
          <button
            className={`${hover ? 'popup__close-none' : 'popup__close'}`}
            type="button"
            aria-label="Закрыть"
            onClick={onClose}
          />
        }

        {children}
      </div>
    </div>
  )
}

export default Popup;
