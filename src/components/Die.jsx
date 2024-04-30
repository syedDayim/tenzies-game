import React from 'react'

export default function Die(props) {
  let {value, onClick, isHeld} = props
  let unclicedStyle = 'flex justify-center items-center h-[50px] w-[50px] bg-[#fff] shadow-black cursor-pointer text-black die-face'
  let clickedStyle = 'flex justify-center items-center h-[50px] w-[50px] bg-[#59E391] shadow-black cursor-pointer text-black die-face'

  return (
    <>
      <div className={isHeld ? clickedStyle : unclicedStyle} onClick={ onClick }>
      <h2 className="die-num">{ value }</h2>
      </div>
    </>
  )
}
