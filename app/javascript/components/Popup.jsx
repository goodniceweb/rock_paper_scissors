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

const renderHeader = (loading, opponent, resultMessage) => {
  const headerText = loading ? `Waiting ${opponent.name}'s Choose` : resultMessage
  return (
    <h2 className="popup__header text-color--primary">{headerText}</h2>
  )
}

const renderButton = (closePopup) => (
  <div className="popup__ok-button app-button app-button--primary" onClick={closePopup}>
    Ok
  </div>
)

const messageMapping = Object.freeze({
  won: 'You won!',
  lost: 'You lost :(',
  tie: "It's tie",
})

const generateHeaderResult = (result, fallback) => {
  return messageMapping[result] || fallback
}

const Popup = ({
  popupOverlayClasses,
  handleOverlayClick,
  closePopup,
  opponent,
  userChoise,
  loading,
  resultMessage,
}) => {
  resultMessage = opponent.result ? generateHeaderResult(opponent.result, resultMessage) : resultMessage
  return (
    <div className={classNames(popupOverlayClasses)} onClick={handleOverlayClick}>
      <div className="popup__container">
        <div className="popup__close-button" onClick={closePopup}>X</div>
        {renderHeader(loading, opponent, resultMessage)}
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
          {!loading && renderButton(closePopup)}
        </div>
      </div>
    </div>
  )
}

Popup.defaultProps = {
  popupOverlayClasses: ['popup__overlay', 'hidden'],
  loading: true,
  resultMessage: 'Something went wrong',
}

Popup.propTypes = {
  userChoise: PropTypes.string.isRequired,
  popupOverlayClasses: PropTypes.array,
  handleOverlayClick: PropTypes.func.isRequired,
  closePopup: PropTypes.func.isRequired,
  opponent: PropTypes.shape({
    name: PropTypes.string.isRequired,
    choise: PropTypes.string,
    result: PropTypes.string,
  }),
  loading: PropTypes.bool,
  resultMessage: PropTypes.string,
}

export default Popup

