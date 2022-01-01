import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/detail' element={<Detail/>}></Route>
            <Route path='/' element={<Home/>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes;