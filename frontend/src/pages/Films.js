import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Filmscomponent from '../components/Films_component.jsx'

function Films(){

    return (
        <div className="homepage">
        <div className="container-flex h-100">
            <div className="row m-0 p-0 h-100">
            <div className="col-12 p-0">
                content goes here
                <Filmscomponent name="Return of the Jedi" />
            </div>
            </div>
        </div>
        </div>
        )
}


export default Films