import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { traerMapa } from './redux/actions'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MapaLeaf from './components/MapaLeaf'

const App = () => {
    const mapa = useSelector(state => state.mapa)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(traerMapa())
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MapaLeaf />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
