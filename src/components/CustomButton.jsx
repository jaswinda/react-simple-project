import React from 'react'

export default function CustomButton({name, onPress}) {
  return (
    <button 
    style={{backgroundColor: 'red', color: 'white', padding: '40px 60px', borderRadius: '5px', border: 'none', cursor: 'pointer'}}
    onClick={onPress}>{name}</button>
  )
}
