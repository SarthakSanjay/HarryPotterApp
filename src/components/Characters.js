import React from 'react'


const Characters = (props) => {
    // if(props.house === "Gryffindor Slytherin Hufflepuff Ravenclaw
// ")
        let color = ''
        if(props.house === "Gryffindor"){
            color = "orange"
        }
        else if(props.house === "Slytherin"){
            color = "green"
        }
        else if(props.house === "Hufflepuff"){
            color = "violet"
        }   
        else{
            color = "grey"
        }
        
        
   return (
        <div className="card my-4" style={{ backgroundColor: `black`, width: "250px" ,border:"2px solid violet"}}>
            <img src={props.image ? props.image : "https://images.moviesanywhere.com/d489bfce9aef55a5271d8a7d7d42bdb6/d265259e-3386-4a1e-b95f-cc52f30ee6fb.jpg" }
            style={{height:"285px"}}
             className="card-img-top" alt="..." />
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: '0'
            }}>

            </div>
            <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">Actor: {props.actor}</span>

            <div className="card-body">
                <h4 className="card-title" style={{ color: "white" }}>{props.title}</h4>
                <h5 className='card-text' style={{color:`${color}`}}> {props.house}</h5>
               



            </div>
        </div>
    )
}

export default Characters