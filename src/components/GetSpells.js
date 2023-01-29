import React, { useState, useEffect } from 'react'
import Spells from './Spells'
const GetSpells = (props) => {

    const [name, setName] = useState([])

    const getSpells = async () => {
        const url = `https://hp-api.onrender.com/api/${props.category}`
        let data = await fetch(url)
        let parsedData = await data.json()

        setName(parsedData)
    }
    useEffect(() => {
        getSpells()
    }, [])

    

    return (
        <div className='container' >
            <div className='row '>
                {name.map((element) => {
                    return <div className='col-lg-4 d-flex justify-content-evenly' key={element.id}>
                        <Spells title={element.name} desc={element.description} />
                       

                        </div>
                })}
            </div>
        </div>
    )
}

export default GetSpells