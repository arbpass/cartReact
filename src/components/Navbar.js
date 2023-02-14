import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {incNumber, decNumber} from '../actions/index';
import cartImg from './images/cart.png'

function Navbar() {
    const myState= useSelector((state)=> state.changeTheNumber);

    return (
        <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
            <a className="navbar-brand text-dark font-weight-bold" href="#">E-Commerce</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link text-light" href="#"><span className="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <span className="badge badge-pill badge-light">
                    <img className='mb-1' src={cartImg} width='16px'/> &nbsp; <span className='h6'>{myState}</span>
                </span>
                </form>
            </div>
        </nav>
    )
}

export default Navbar