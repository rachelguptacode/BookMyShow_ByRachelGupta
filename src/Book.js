import React from 'react'
import {NavLink} from 'react-router-dom';
import './Book.css';
function Book() {
    return (
        <>
        <div className='book'>
            <img className='book_logo' src="https://www.businessinsider.in/photo/76083099/bookmyshow-lays-off-furloughs-270-employees.jpg?imgsize=64741" alt="" />
            <div className ='book_details'>
                <input className ='book_show' type="text" placeholder='Choose A Movie'/>
                <input className ='book_show' type="text" placeholder='Place & Time'/>
                <button className='book_btn'>
                <NavLink to='/seats'>Book</NavLink>
                </button>
            </div>
        </div>
        </>
        
    )
}

export default Book
