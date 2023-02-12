import React from 'react'
import Musicard from './Musicard'

function PlayArea(props) {
  let ary = props.arrayobj;
  let i=0
  return (
    <div className='container'>
      <div className="row">
        {ary.map((element) =>{
          return <div className='col-md-4 my-1'>
            <Musicard key={i} songName={element.name} url={element.url}/>
          </div>
        })}
    </div>
    </div>
  )
  {i=i+1}
}

export default PlayArea
