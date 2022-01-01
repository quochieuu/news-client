import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/detail' element={<Detail/>}></Route>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    )
}

export default AppRoutes;