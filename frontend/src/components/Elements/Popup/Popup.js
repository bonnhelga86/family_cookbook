import React from 'react';
import './Popup.scss';

// interface IPopup {
//   popupName: 'string',
//   isPopupOpen: boolean,
//   children
// }

function Popup({ size, popupName, isPopupOpen, setIsPopupOpen, children }) {

  function closePopup() {
    setIsPopupOpen(false);
  }

  function handleCloseClick(event) {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
      closePopup();
    }
  }

  function handleEscClose(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  }

  React.useEffect(() => {
    if (!isPopupOpen) return;

    document.addEventListener('keyup', handleEscClose);

    return() => {
      document.removeEventListener('keyup', handleEscClose);
    }

  }, [isPopupOpen])

  return(
    <div
        className={`popup popup-${popupName} ${isPopupOpen ? "popup_opened" : ""}`}
        onClick={handleCloseClick}
    >
      <div className={`popup__container popup__container_size_${size}`}>
        <button
          className='popup__close'
          type="button"
          aria-label="Закрыть"
          onClick={handleCloseClick}
        />
        {children}
      </div>
    </div>
  )
}

export default Popup;
