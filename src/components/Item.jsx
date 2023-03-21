import React from 'react'


export default function Item(props) {


	return (
			<div className='item'>
				<div className='picture picked'><img className='pic' src={props.item.image} alt="" /></div>
				<div className='itemInfo'>
					<div className='discription'>
						<div className='ds type' style ={{fontSize: "17px"}}>{props.item.type}</div>
						<div className='ds model'  style ={{fontSize: "16px"}}>{props.item.model}</div>
					</div>
					<div className='price'>
						<div className='pr mehir'>מחיר</div>
						<div className='pr'>{props.item.price}<span className='shah'>ש''ח</span> </div>
					</div>
				</div>
				<div className='removeBtn' onClick={()=>{props.remove(props.item)}} >X</div>
			</div>
	)
}
