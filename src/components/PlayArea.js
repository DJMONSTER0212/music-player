import React,{useState} from 'react'
import Musicard from './Musicard'

import song1 from './audios/song.mp3'
import song2 from './audios/song_2.mp3'
import song3 from './audios/song_3.mp3'
import song4 from './audios/song_4.mp3'
import song5 from './audios/song_5.mp3'
import song6 from './audios/song_6.mp3'
import song7 from './audios/song_7.mp3'
import song8 from './audios/song_8.mp3'
import song9 from './audios/song_9.mp3'
import song10 from './audios/song_10.mp3'
import song11 from './audios/song_11.mp3'
import song12 from './audios/song_12.mp3'
import song13 from './audios/song_13.mp3'
import song14 from './audios/song_14.mp3'
import song15 from './audios/song_15.mp3'
import song16 from './audios/song_16.mp3'
import song17 from './audios/song_17.mp3'
import song18 from './audios/song_18.mp3'
import song19 from './audios/song_19.mp3'
import song20 from './audios/song_20.mp3'
import song21 from './audios/song_21.mp3'
import song22 from './audios/song_22.mp3'
import song23 from './audios/song_23.mp3'
import song24 from './audios/song_24.mp3'
import song25 from './audios/song_25.mp3'
import song26 from './audios/song_26.mp3'
import song27 from './audios/song_27.mp3'
import song28 from './audios/Thoda Thoda Pyar_320.mp3'
import song29 from './audios/Bad Boy_320.mp3'
import song30 from './audios/Ed_Sheeran.mp3'
import song31 from './audios/kehna_galat_galat.mp3'
import song32 from './audios/Ra_Ra_Rakkamma.mp3'
let songs = [
  new Audio(song1),
  new Audio(song2),
  new Audio(song3),
  new Audio(song4),
  new Audio(song5),
  new Audio(song6),
  new Audio(song7),
  new Audio(song8),
  new Audio(song9),
  new Audio(song10),
  new Audio(song11),
  new Audio(song12),
  new Audio(song13),
  new Audio(song14),
  new Audio(song16),
  new Audio(song17),
  new Audio(song18),
  new Audio(song19),
  new Audio(song20),
  new Audio(song21),
  new Audio(song22),
  new Audio(song23),
  new Audio(song24),
  new Audio(song25),
  new Audio(song26),
  new Audio(song27),
  new Audio(song28),
  new Audio(song29),
  new Audio(song30),
  new Audio(song31),
  new Audio(song32)
]
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
