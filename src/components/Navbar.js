import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src="https://i.pinimg.com/originals/5d/11/63/5d116306afbaf0e293af630b6937bc64.png" style={{width:"50px"}} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/characters">Characters</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/student">Student</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/staff">Staff</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/house">House</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/spells">Spells</a>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </nav>)
}

export default Navbar