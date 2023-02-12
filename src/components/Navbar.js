import React from 'react'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:'black',textAlign:"center"}}>
                <div className="container-fluid">
                <h1 style={{display:"block"}}>  <a className="navbar-brand" href="/" id="name" style={{color:"#16FF00"}}>DJ's Player<i className="fa-sharp fa-solid fa-headphones"></i></a></h1><br /> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse na" style={{display:"block"}} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <br />
                            <li className="nav-item " >
                                <a className="nav-link active" aria-current="page" href="/" style={{color:"#16FF00"}} >About-Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" style={{color:"#16FF00"}}>Contact-Me</a>
                            </li>
                        </ul>
                      
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
