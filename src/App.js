/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from './App.module.css'

const App = () => {
  const emojiDictionary = {
    '🐶': 'dog',
    '🐰': 'rabbit',
    '🐻': 'bear',
    '🐼': 'panda',
    '🐯': 'tiger',
    '🐵': 'monkey',
    '🕷': 'spider',
    '🐿': 'squirrel',
    '🐙': 'octopus',
    '🦈': 'shark',
  }
  const emojis = Object.keys(emojiDictionary)
  const [currentEmoji, setCurrentEmoji] = useState('')
  
  const changeEmoji = e => (!emojiDictionary[e.target.value] && e.target.value) 
    ? setCurrentEmoji('emoji not found')
    : setCurrentEmoji(e.target.value)


  return (
    <div>
      <h2>search the emoji</h2>
      <input placeholder='Type emoji...' onChange={changeEmoji} />
      <figure>{currentEmoji}</figure>
      <p>{currentEmoji && emojiDictionary[currentEmoji]}</p>
      <div>{emojis.map(emoji => <span onClick={() => setCurrentEmoji(emoji)}>{emoji}</span>)}</div>
    </div>
  );
}

export default App;
