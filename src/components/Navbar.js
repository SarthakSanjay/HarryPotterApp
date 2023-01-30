import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top  " style={{padding:"0px" }}>
            <div className="container-fluid " style={{
                background: "#0be38d" ,
            }} >
                <Link className="navbar-brand" to="/"><img src="https://i.pinimg.com/originals/5d/11/63/5d116306afbaf0e293af630b6937bc64.png" style={{ width: "50px" }} alt='img'/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " style={{color:"white"}}>
                        <li className="nav-item" >
                            <Link className="nav-link " aria-current="page" to="/">Characters</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/students">Student</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/staff">Staff</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/house" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                House
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/house/gryffindor">Gryffindor</Link></li>
                                <li><Link className="dropdown-item" to="/house/slytherin">Slytherin</Link></li>
                                <li><Link className="dropdown-item" to="/house/hufflepuff">Hufflepuff</Link></li>
                                <li><Link className="dropdown-item" to="/house/ravenclaw">Ravenclaw</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/spells">Spells</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>)
}

export default Navbar