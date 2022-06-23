import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';

const New = () => {

    const [newWine, setWine] = useState({
        fullName: '',
            grapeType: '',
            region: '',
            label: ''
    })

    const handleFullName = (e) => {
        setWine({
            fullName: e.target.value,
            grapeType: newWine.grapeType,
            region: newWine.region,
            label: newWine.label
        })
    }
    const handleGrapeType = (e) => {
        setWine({
            fullName: newWine.fullName,
            grapeType: e.target.value,
            region: newWine.region,
            label: newWine.label
        })
    }
    const handleRegion = (e) => {
        setWine({
            fullName: newWine.fullName,
            grapeType: newWine.grapeType,
            region: e.target.value,
            label: newWine.label
        })
    }
    const handleLabel = (e) => {
        setWine({
            fullName: newWine.fullName,
            grapeType: newWine.grapeType,
            region: newWine.region,
            label: e.target.value
        })
    }
    const handleSubmit = () => {
        axios.post('http://localhost:3500/api/wines/new', newWine)
        .then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <h1>Add New Wine</h1>
            <form action="">
                <TextField id="fullName" label="Name of Wine" type="search" variant="standard" onChange={handleFullName} />
                <TextField id="grapeType" label="Type of Grape" type="search" variant="standard" onChange={handleGrapeType} />
                <TextField id="region" label="Region of Wine" type="search" variant="standard" onChange={handleRegion} />
                <TextField id="label" label="Label of Wine" type="search" variant="standard" onChange={handleLabel} />
                <br /><br />
                <Link to="/">
                    <Button onClick={handleSubmit} variant="outlined">Done</Button>
                </Link>
            </form>
        </div>
    )
}

export default New