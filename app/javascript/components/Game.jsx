import React from 'react'
import PropTypes from 'prop-types'
import RockImage from 'images/Rock.png'
import PaperImage from 'images/Paper.png'
import ScissorsImage from 'images/Scissors.png'

const renderOptions = ({ options, handleOptionClick }) => {
  const items = options.map((optionItem) => (
    <li className="game__item" key={optionItem.name} onClick={() => handleOptionClick(optionItem.name)}>
      <img className="game__item-image" src={optionItem.image} />
      <p className="game__item-caption text-color--primary">{optionItem.name}</p>
    </li>
  ))
  return (
    <ul className="game__options">{items}</ul>
  )
}

const Game = ({ options, handleOptionClick }) => {
  return (
    <div className="game__container">
      <h1 className="game__main-header text-color--primary">Rock – Paper – Scissors</h1>
      <p className="game__description">Rock Paper Scissors is a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome.</p>
      <h3 className="game__sub-header">Select your bet</h3>
      {renderOptions({ options: options, handleOptionClick: handleOptionClick})}
    </div>
  )
}

Game.defaultProps = {
  options: [
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
  options: PropTypes.array,
  handleOptionClick: PropTypes.func.isRequired,
}

export default Game

