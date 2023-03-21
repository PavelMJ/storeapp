import React from 'react'
import Item from './Item'

export default function Icart({ icart = [], onCart, remove,count}) {
	return (
		<div className='iCart'>
			<div className='sideBar'>
				<dir onClick={() => { onCart() }} className="closeBtn">
					<p style={{ margin: '0' }}>X</p>
				</dir>
				<div className='itemSet'>
					{icart.map((item, index) => {
						return <Item key={index} item={item} remove={remove} />
					})
					}
				</div>
				<div className='payDetails'>
					<div className='tashlum'>
						<div>{null}</div>
						<div>סה"כ לפני משלוח</div>
					</div>
					<div className='tashlum'>
						<div>{null}</div>
						<div>משלוח מהיום להיום</div>
					</div>
					<div className='line'></div>
					<div className='tashlum final' >
						<div className='sahakol'>{count}</div>
						<div className='sahakol'>סה"כ לתשלום</div>
					</div>
					<button className='payingBtn' >לשלם</button>

				</div>

			</div>

			<div className='overlay'></div>
		</div>
	)
}
