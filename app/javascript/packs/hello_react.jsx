import React, { useState } from 'react'
import classNames from 'classnames'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import RockImage from 'images/Rock.png'
import PaperImage from 'images/Paper.png'
import ScissorsImage from 'images/Scissors.png'

const renderChoices = (choices, setShowOverlay) => {
  const onClick = () => setShowOverlay(true)
  const items = choices.map((choiceItem) => (
    <li className="game__item" key={choiceItem.name} onClick={onClick}>
      <img className="game__item-image" src={choiceItem.image} />
      <p className="game__item-caption text-color--primary">{choiceItem.name}</p>
    </li>
  ))
  return (
    <ul className="game__choices">{items}</ul>
  )
}

const Game = props => {
  const [showOverlay, setShowOverlay] = useState(false)
  const popupOverlayClasses = ['popup__overlay']
  if (!showOverlay) {
    popupOverlayClasses.push('hidden')
  }

  const overlayClick = (event) => {
    if (event.target?.classList?.contains('popup__overlay'))
      setShowOverlay(false)
  }

  return (
    <div id="app">
      <div className={classNames(popupOverlayClasses)} onClick={overlayClick}>
        <div className="popup__container">
          <div className="popup__close-button" onClick={() => setShowOverlay(false)}>X</div>
          <h2 className="popup__header text-color--primary">Waiting Curb's Choose</h2>
          <div className="popup__content">
            <div className="popup__items">
              <div className="popup__item">
                <img className="popup__item-image" src={RockImage} />
                <p className="popup__item-caption text-color--primary">Your bet</p>
              </div>
              <div className="popup__item">
                <img className="popup__item-image" src={RockImage} />
                <p className="popup__item-caption text-color--primary">Curb</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="game__container">
        <h1 className="game__main-header text-color--primary">Rock – Paper – Scissors</h1>
        <p className="game__description">Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.</p>
        <h3 className="game__sub-header">Select your bet</h3>
        {renderChoices(props.choices, setShowOverlay)}
      </div>
    </div>
  )
}

Game.defaultProps = {
  choices: [
    {
      name: 'Rock',
      image: RockImage,
    },{
      name: 'Paper',
      image: PaperImage,
    },{
      name: 'Scissors',
      image: ScissorsImage,
    },
  ],
}

Game.propTypes = {
  choices: PropTypes.array
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Game name="React" />,
    document.querySelector('#react-app').appendChild(document.createElement('div')),
  )
})
