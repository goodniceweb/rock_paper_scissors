import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Popup from 'components/Popup'
import Game from 'components/Game'
import GameAPI from 'services/game_api'

const initialOpponentValue = { name: 'Curb' }
const initialUserChoiseValue = ''

const MainApp = (props) => {
  const [apiLoading, setApiLoading] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)
  const [userChoise, setUserChoise] = useState(initialUserChoiseValue)
  const [opponent, setOpponent] = useState(initialOpponentValue)
  const closePopup = () => {
    setOpponent(initialOpponentValue)
    setUserChoise(initialUserChoiseValue)
    setShowOverlay(false)
  }
  const popupOverlayClasses = ['popup__overlay']
  if (!showOverlay) {
    popupOverlayClasses.push('hidden')
  }

  const handleOverlayClick = (event) => {
    if (event.target?.classList?.contains('popup__overlay'))
      closePopup()
  }

  const handleOptionClick = (userChoise) => {
    setUserChoise(userChoise)
    setApiLoading(true)
    setShowOverlay(true)
    GameAPI.fetchResult(userChoise).then((response) => {
      setApiLoading(false)
      setOpponent({
        ...opponent,
        ...response,
      })
    })
  }


  return (
    <div id="app">
      <Popup
        userChoise={userChoise}
        popupOverlayClasses={popupOverlayClasses}
        handleOverlayClick={handleOverlayClick}
        closePopup={closePopup}
        opponent={opponent}
        loading={apiLoading}
      />

      <Game
        handleOptionClick={handleOptionClick}
      />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MainApp name="React" />,
    document.querySelector('#react-app').appendChild(document.createElement('div')),
  )
})
