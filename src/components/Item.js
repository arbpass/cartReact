import React from 'react'
import Products from './Products'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../actions/index';

const Item = (props) => {
    const dispatch = useDispatch();

    function handleText(itemId) {
        let imgBadge = document.getElementById(itemId);
        // imgBadge.innerText= imgBadge.innerText == "+" ? "-" : "+";
        if(imgBadge.innerText === '+'){
            dispatch(incNumber());
            imgBadge.innerText= '-';
        }
        else{
            dispatch(decNumber());
            imgBadge.innerText= '+';
        }
    }

    return (
        <>
            {Products.map((item, key) => {
                return (
                    <div className='ml-4 mr-5'>
                        <img src={item.img} />
                        <button className='imgBadge' id={props.title+item.id} onClick={()=> handleText(props.title+item.id)}>+</button>
                        <h5>$ {item.price}</h5>
                        <p className='font-weight-bold'>{item.title}</p>
                        <p className='text-secondary'>{item.amount}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Item