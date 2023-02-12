import React from 'react'

const Musicard= (props)=>{
    return (
        <>
            <div className="container my-4 text-center "  >
            <div className="card grow" style={{width: "18rem"}}>
                <img src={props.url} className="card-img-top" alt="..." />
                <div className="card-body" style={{backgroundColor:"black"}}>
                    <h5 className="card-title">{props.songName}</h5>
                    <button className="btn btn-primary">PLAY</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Musicard
