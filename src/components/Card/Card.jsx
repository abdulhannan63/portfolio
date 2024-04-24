import React from 'react'
import './Card.css'
export const Card = ({path,title,desc}) => {
    return (
        <>
            <div className="card m-auto mb-2" style={{width:" 14rem"}}>
                <img src={path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{color:'white'}}>{title}</h5>
                    <p className="card-text" style={{color:'rgb(171, 167, 167)'}}>{desc}</p>
                    
                </div>
            </div>
        </>
    )
}
