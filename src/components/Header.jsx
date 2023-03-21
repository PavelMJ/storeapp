import React from 'react'
// import './App.css';


export default function Header(props) {
	return (

			<div className='header'>
				<div className='headerLogo'><img className='logoIcon' src="./img/SV STORE LOGO.svg" alt="logo" />SV TECH STORE</div>
				<svg onClick={()=>{props.onCart()}} className='cartIcon' width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.4289 48C26.4289 50.2091 24.6766 52 22.5151 52C20.3536 52 18.6013 50.2091 18.6013 48C18.6013 45.7909 20.3536 44 22.5151 44C24.6766 44 26.4289 45.7909 26.4289 48Z" fill="#FFF8F8"/>
<path d="M47 48C47 50.2091 45.2241 52 43.0625 52C40.901 52 39.1487 50.2091 39.1487 48C39.1487 45.7909 40.901 44 43.0625 44C45.2241 44 47 45.7909 47 48Z" fill="white"/>
<path d="M54.5 12.5L13.7091 12L10.7737 3C10.2845 1.5 7.83837 0 7.83837 0H0.5V4H6.85992L8.81682 12C10.9368 18.1667 14.394 31.8 15.1767 35C15.9106 38 18.6013 39.3333 19.5798 39.5H43.5518C43.5518 39.5 47.5239 39.7739 48.444 38C50 35 53.8255 22 54.8039 17.5C55.3754 14.8715 55.8046 13 54.5 12.5Z" fill="white"/>
</svg>
				{/* <img onClick={()=>{props.showCart()}} className='cartIcon' src="./img/cart-90.svg" alt="cart" /> */}
			</div>

	)
}
