import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RockImage from 'images/Rock.png'
import PaperImage from 'images/Paper.png'
import ScissorsImage from 'images/Scissors.png'
import LoaderImage from 'images/Loader.gif'

const IMAGE_MAPPING = Object.freeze({
  rock: RockImage,
  paper: PaperImage,
  scissors: ScissorsImage,
})

const getImage = (imageName) => IMAGE_MAPPING[imageName?.toLowerCase()] || LoaderImage

const Popup = ({ popupOverlayClasses, handleOverlayClick, closePopup, opponent, userChoise }) => {
  return (
    <div className={classNames(popupOverlayClasses)} onClick={handleOverlayClick}>
      <div className="popup__container">
        <div className="popup__close-button" onClick={closePopup}>X</div>
        <h2 className="popup__header text-color--primary">Waiting {opponent.name}'s Choose</h2>
        <div className="popup__content">
          <div className="popup__items">
            <div className="popup__item">
              <img className="popup__item-image" src={getImage(userChoise)} />
              <p className="popup__item-caption text-color--primary">Your bet</p>
            </div>
            <div className="popup__item">
              <div className="popup__item-image-wrapper">
                <img className="popup__item-image" src={getImage(opponent.choise)} />
              </div>
              <p className="popup__item-caption text-color--primary">{opponent.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Popup.defaultProps = {
  popupOverlayClasses: ['popup__overlay', 'hidden'],
}

Popup.propTypes = {
  userChoise: PropTypes.string.isRequired,
  popupOverlayClasses: PropTypes.array,
  handleOverlayClick: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  opponent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    choise: PropTypes.string,
  }),
}

export default Popup

