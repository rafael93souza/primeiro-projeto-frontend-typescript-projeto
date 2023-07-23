import {Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import { Login } from './pages/Login';

export function MainRouter(){
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/main' element={<Main/>}/>
        </Routes>
    )
}