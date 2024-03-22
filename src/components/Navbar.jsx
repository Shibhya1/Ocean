import React from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const backgroundNav = {
        backgroundColor: "#152636"
    };


    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark" style={backgroundNav}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">OCean</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex ">
                            <Link className="nav-link fs-5 active text-white" aria-current="page" to="/">Home</Link>
                            <div className="p-3"></div>
                            <Link className="nav-link fs-5 active text-white" aria-current="page" to="/about">About</Link>
                            <div className="p-3"></div>
                            <Link className="nav-link fs-5 active text-white" aria-current="page" to="/contacts">Contacts</Link>
                            <div className="p-3"></div>
                            <Link className="nav-link fs-5 active text-white" aria-current="page" to="/programs">Programs</Link>
                            <div className="p-3"></div>
                            <Link className="nav-link fs-5 active text-white" aria-current="page" to="/educontent">Educational Content</Link>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

