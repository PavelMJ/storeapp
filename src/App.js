import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Banner from './components/Banner'
import Icart from './components/Icart';
import { useEffect, useState } from 'react';


function App() {
	const [cards, setCards] = useState([
		{ id: 1, type: 'מקלדת', model: 'Apple Magic', price: 460, image: './img/mackeys.jpg', checked: false },
		{ id: 2, type: 'משקפי VR', model: 'Oculus Rift 2', price: 1500, image: './img/OculusRift2.jpg', checked: false },
		{ id: 3, type: 'אוזניות', model: 'Sony mx 1000', price: 920, image: './img/ear-phones.jpg', checked: false },
		{ id: 4, type: 'רכפן ', model: 'DJI mini 3', price: 3500, image: './img/dron.jpg', checked: false },
		{ id: 5, type: 'בקר משחק', model: 'Xbox controller', price: 380, image: './img/Xbox_one_Controler.jpg', checked: false },
		{ id: 6, type: 'רמקול', model: 'HomePod mini', price: 554, image: './img/HomePodMini.jpg', checked: false }

	])
	const [openCart, setOpenCart] = useState(false)
	const onCart = () => {
		setOpenCart(!openCart)
	}

	const [icart, setIcart] = useState([])
	const[count,setCount]=useState(0)


	const addToCart = (item, index) => {
		let temp = [...cards]
		temp[index].checked = true
		setCards([...temp])
		item.checked = true
		setIcart((icart) => [...icart, item])
		// setCount((count)=>icart.reduce((ac,val)=>ac+val.price, (0)))
	}

	const removeItem = (item) => {
		let arr = [...cards]
		arr = arr.map((val) => {
			if (val.id === item.id) {
				val.checked = false
			}
			return val
		})
		setCards([...arr])
		setIcart(icart.filter(val => val.id !== item.id))
		// setCount((count)=>icart.reduce((ac,val)=>ac+val.price, (0)))

	}



useEffect(()=>{
	setCount(icart.reduce((ac,val)=>ac+val.price, (0)))
},[icart])

	

	const toCart = () => {
		if (openCart === true) return <Icart icart={icart} onCart={onCart} remove={removeItem} count={count} />
		else return null

	}




	return (
		<div className="App">
			{toCart()}
			<div className='conteiner'>
				<Header onCart={onCart} />
				<Banner />
				<div className='products'>
					{cards.map((product, index) => {
						return <Card
							product={product}
							key={index}
							index={index}
							add={addToCart}
							remove={removeItem}
							icart={icart}
						/>
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
