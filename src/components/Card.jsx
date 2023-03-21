import React from 'react'
import AddButton from './AddButton'
import { useState } from 'react'

export default function Card({product,index,add,remove,icart}) {

	const [checkbox, setCheckbox] = useState(true)

	const onCheck = () => {
		if (checkbox === true) { 
			
			setCheckbox((checkbox) => !checkbox)
			console.log(product.checked);
			add(product, index) 
		}

		else {
			
			setCheckbox((checkbox) => !checkbox)
			remove(product)
		}
	}
	return (
		<div>
			<div className='card'>
				<div onClick={onCheck} className='add'>
				<AddButton img={`${product.checked ? './img/checkbox.svg':'./img/plus.svg' }`}/>
								</div>
				<div className='picture'><img className='pic' src={product.image} alt="" /></div>
				<div className='info'>
					<div className='price'>
						<div className='pr mehir'>מחיר</div>
						<div className='pr'>{product.price}<span className='shah'>ש''ח</span> </div>
					</div>
					<div className='discription'>
						<div className='ds type'>{product.type}</div>
						<div className='ds model'>{product.model}</div>
					</div>
				</div>
				<button className='buybtn'>לרכישה</button>
			</div>
		</div>
	)
}
