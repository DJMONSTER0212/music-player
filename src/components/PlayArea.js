import React,{useState} from 'react'
import Musicard from './Musicard'


function PlayArea(props) {
  let ary = props.arrayobj;
  let i=0
  return (
    <div className='container'>
      <div className="row">
        {ary.map((element) =>{
          return <div className='col-md-4 my-4'>
            <Musicard ids={i++} songName={element.name} song={element.song} url={element.url}/>
          </div>
        })}
    </div>
    </div>
  )
}

export default PlayArea
