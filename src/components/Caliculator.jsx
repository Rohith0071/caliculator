import React from 'react'
import Keyboard from './Keyboard'
import Display from './Display'
import { useState } from 'react'

const Caliculator = () => {
    const [data,setData]=useState(0)
    function handleClick(e){
        let curVal=e.target.value
        //updating the display based user input
        if (data===0){
            setData(curVal)
        }else{
            setData(prev=>prev+""+curVal)
        }
        //caliculating results
        if (curVal =="="){
            let result=eval(data)
            setData(result)
        }else if(curVal=="AC"){
            setData(0)
        }else if(curVal=="C"){
            let sval=data
            if(sval.length>1){
                setData(sval.slice(0,sval.length-1))
            }else{
                setData(0)
            }
        }
    }
  return (
    <div>
        <div className="card my-3 mx-auto" style={{width:"250px"}}>
        <Display data={data}/>
        <div className="card-body">
        <Keyboard onClick={handleClick}/>
        </div>
        </div>
    </div>
  )
}

export default Caliculator
