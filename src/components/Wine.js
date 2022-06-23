import React from "react";
import axios from "axios";
import Button from '@mui/material/Button';

const img = {
    width: '50%'
}

const Wine = (props) => {

    const handleDelete = (e) => {
        axios.delete(`http://localhost:3500/api/wines/${e.target.id}`)
    }

    let wineList = props.wines.map(item => {
        return (
            <div key={item._id} className="wine" >
                <img src={item.label} alt="#" style={img} />
                <h3>{item.fullName}</h3>
                <h5>{item.grapeType}</h5>
                <h5>{item.region}</h5>
                <Button id={item._id} onClick={handleDelete} variant="outlined">Delete</Button>
            </div>
        )
    })
    return (
        <div className="wineList">
            {wineList}
        </div>
    )
}

export default Wine