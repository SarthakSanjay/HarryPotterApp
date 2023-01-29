import React from 'react'


const Spells = (props) => {

        
        
   return (
        <div className="card " style={{ backgroundColor: `black`, width: "250px" ,border:"2px solid violet" , marginTop:"100px"}}>
           

            <div className="card-body">
                <h4 className="card-title" style={{ color: "white" }}>{props.title}</h4>
                <p className='card-text' style={{ color: "white" }}> {props.desc}</p>
               



            </div>
        </div>
    )
}

export default Spells