import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Home from "./components/Home"
import Wine from "./components/Wine"
import New from './components/New'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const App = () => {

  const [allWines, setAllWines] = useState([])

  useEffect(() => {
    getWines()
  }, [allWines])
  

  const getWines = () => {
    axios.get('http://localhost:3500/api/wines')
    .then((r) => {
      const wines = r.data
      setAllWines(wines)
    })
  }

    return (
      <div>

        <header>
          <Link to="/">
            <h1>My-Wine-App</h1>
          </Link>
          <nav>
            <Box
            sx={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1 },
            }} >
              <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button>
                  <Link to="/">
                    <h4>Home</h4>
                  </Link>
                </Button>
                <Button>
                  <Link to="/wines">
                    <h4>Wine</h4>
                    </Link>
                </Button>
                <Button>
                  <Link to="/new">
                    <h4>New</h4>
                  </Link>
                </Button>
              </ButtonGroup>
            </Box>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wines" element={<Wine wines={allWines} />} />
            <Route path="/new" element={<New wines={allWines} setAllWines={setAllWines} />} />
          </Routes>
        </main>
      </div>
    )
}

export default App;
