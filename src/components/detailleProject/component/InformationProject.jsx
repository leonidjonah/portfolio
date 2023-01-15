import React from 'react'

function InformationProject(props) {
    return (
        <div className="col-md-4">
            <h3>Information du projet</h3>
            <strong className='text-center'></strong>
            <ul>
                <b className='text-center'><strong> {props.type}</strong></b>
                <li><strong>Categorie</strong>: {props.categorie}</li>
                <li><strong>Technologie</strong>: {props.technologie}</li>
                <li><strong>Debut du projet</strong>: {props.debut}</li>
                <li><strong>Duree du developpement</strong>: {props.duree}</li>
                <li><strong>Description</strong>: {props.description}</li>
            </ul>
        </div>
    )
}

export default InformationProject