import React from 'react'
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex mx-2'>
        <Button name="All" />
        <Button name="Live" />
        <Button name="Music" />
        <Button name="Sports" />
        <Button name="Cricket" />
        <Button name="Movies" />
        <Button name="Cooking" />
        <Button name="News" />
        <Button name="Fashion" />
        <Button name="Tailer" />
        <Button name="Kapil Sharma" />
        <Button name="Football" />
        <Button name="Hockey" />
        <Button name="BasketBall" />
        {/* <Button name="Drama" /> */}
    </div>
  )
}

export default ButtonList;