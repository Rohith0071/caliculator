import Button  from './Button';
import React from 'react'

const Keyboard = (props) => {
  return (
    <div>
        <div className='container'>
        <div className="d-flex">
      <Button value="/" onClick={props.onClick}/>
      <Button value="%"onClick={props.onClick}/>
      <Button value="C" onClick={props.onClick}/>
      <Button value="AC" onClick={props.onClick}/>
      </div>
      <div className="d-flex">
      <Button value="7"onClick={props.onClick} />
      <Button value="8" onClick={props.onClick}/>
      <Button value="9"onClick={props.onClick}/>
      <Button value="*" onClick={props.onClick}/>
      </div>
      <div className="d-flex">
      <Button value="4" onClick={props.onClick} />
      <Button value="5" onClick={props.onClick}/>
      <Button value="6" onClick={props.onClick}/>
      <Button value="-" onClick={props.onClick}/>
      </div>
      <div className="d-flex">
      <Button value="1" onClick={props.onClick} />
      <Button value="2"onClick={props.onClick}/>
      <Button value="3" onClick={props.onClick}/>
      <Button value="+" onClick={props.onClick}/>
      </div>
      <div className="d-flex">
      <Button value="0"onClick={props.onClick} />
      <Button value="00" onClick={props.onClick}/>
      <Button value="." onClick={props.onClick}/>
      <Button value="=" onClick={props.onClick}/>
      </div>
      </div>
    </div>
  )
}

export default Keyboard
