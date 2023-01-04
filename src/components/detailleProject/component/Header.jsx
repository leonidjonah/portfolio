import React from 'react'
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Details</h2>
                    <ol>
                        <li><Link to="/">Retour</Link></li>
                        <li>{props.title}</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Header