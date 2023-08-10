import React, { useState } from 'react';

interface IProps {
  data: string[]
  onClick?: (index: number) => {} | void
  selected?: number
  className?: string
  extraClass?: string
}

function Menu(props: IProps) {
  const [currentIndex, setCurrentIndex] = useState(props.selected)
  const handleToggle = (index: number) => { setCurrentIndex(index) }
  const cssClass = "grow text-center bg-[#b67332] rounded py-[6px] text-[#ffffff] cursor-pointer hover:bg-[#93441a]"
  const cssClassActivated = "grow text-center bg-[#93441a] rounded py-[6px] text-[#ffffff] cursor-pointer"
  const extra = props.extraClass !== undefined ? props.extraClass : ""
  const liElement = props.data.map((label, index) => 
    <li 
    className={ currentIndex === index ? `activated ${cssClassActivated}` : cssClass }
    key={`${index}-key`} onClick={() => {
      handleToggle(index)
      if(props.onClick) props.onClick(index)
    }}>{label}
    </li>
  )

  return (
    <ul className={`props.className menu ${extra}`}>
      {liElement}
    </ul>
  );
}

export default Menu 