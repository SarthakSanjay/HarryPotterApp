import React, { useState, useEffect } from 'react'
import Characters from './Characters'
const CharactersInformations = (props) => {

    const [name, setName] = useState([])
    const getChar = async () => {
        const url = `https://hp-api.onrender.com/api/characters/${props.category}`
        let data = await fetch(url)
        let parsedData = await data.json()

        setName(parsedData)
    }
    useEffect(() => {
        getChar()
    }, [])

    // console.log(count)

    return (
        <div className='container' >
            <div className='row '>
                {name.map((element) => {
                    return <div className='col-lg-3 d-flex justify-content-evenly'key={element.id}>
                        <Characters title={element.name} image={element.image} house={element.house} actor={element.actor} />
                       

                        </div>
                })}
            </div>
        </div>
    )
}

export default CharactersInformations