import React from 'react'

const Musicard= (props)=>{
    let song = props.song
    let Control = ()=>{
        if(document.getElementById(props.ids).innerHTML==='PLAY'){
            song.play();
            document.getElementById(props.ids).innerHTML = "PAUSE"
        }
        else if(document.getElementById(props.ids).innerHTML==="PAUSE"){
            song.pause();
            document.getElementById(props.ids).innerHTML = "PLAY"
        }
        console.log(props.ids)
        console.log(song.duration);
        console.log(song.currentTime)
    }
    return (
        <>
            <div className="container my-4 text-center "  >
            <div className="card grow" style={{width: "18rem"}}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body" style={{backgroundColor:"black"}}>
                    <h5 className="card-title">{props.songName}</h5>
                    <button id={props.ids} className="btn btn-success"  onClick={Control}>PLAY</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Musicard
