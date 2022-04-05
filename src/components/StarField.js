import React from 'react'
import { StarButton } from './StarButton';

export const StarField = (props) => {
    const{value,onChange} = props;
  return (
    <div>
        <StarButton active={value >=1} onClick={()=>onChange(1)}></StarButton>
        <StarButton active={value >=2} onClick={()=>onChange(2)}></StarButton>
        <StarButton active={value >=3} onClick={()=>onChange(3)}></StarButton>
        <StarButton active={value >=4} onClick={()=>onChange(4)}></StarButton>
        <StarButton active={value >=5} onClick={()=>onChange(5)}></StarButton>
    </div>
  )
}
