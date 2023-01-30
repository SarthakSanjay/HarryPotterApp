import React from 'react'
const Characters = (props) => {
    let color = ''
    if (props.house === "Gryffindor") {
        color = "orange"
    }
    else if (props.house === "Slytherin") {
        color = "#0be38d"
    }
    else if (props.house === "Hufflepuff") {
        color = "violet"
    }
    else {
        color = "grey"
    }
    return (
        <div className="card " style={{ backgroundColor: `black`, width: "250px", border: "2px solid #0be38d", marginTop: "100px" }}>
            <img src={props.image ? props.image : "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1666157629_3113021.jpg?format=webp&w=480&dpr=1.0"}
                style={{ height: "285px" }}
                className="card-img-top" alt="..." />
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: '0'
            }}>

            </div>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark" style={{ border: "2px solid #0be38d" }}>Actor: {props.actor}</span>

            <div className="card-body" style={{ borderTop: "2px solid #0be38d" }}>
                <h4 className="card-title" style={{ color: "white" }}>{props.title}</h4>
                <h5 className='card-text' style={{ color: `${color}` }}> {props.house}</h5>
            </div>
        </div>
    )
}

export default Characters