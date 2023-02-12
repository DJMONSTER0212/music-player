import React from 'react'

const Musicard= ()=>{
    return (
        <>
            <div className="container my-4 text-center "  >
            <div className="card grow" style={{width: "18rem",border:"2px solid #FF1E1E"}}>
                <img src="https://wallpaperboat.com/wp-content/uploads/2021/09/20/78678/waifu-18.jpg" className="card-img-top" alt="..." />
                <div className="card-body" style={{backgroundColor:"black"}}>
                    <h5 className="card-title">Card title</h5>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Musicard
