import './App.css';
import Card from './components/Card'
import Header from './components/Header'
import Banner from './components/Banner'
import Icart from './components/Icart';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
	const [cards, setCards] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [openCart, setOpenCart] = useState(false)
	const onCart = () => {
		setOpenCart(!openCart)
	}

	const [icart, setIcart] = useState([])
	const [count, setCount] = useState(0)


	useEffect(()=>{
		axios.get('/data.json').then(res=>{
			setCards(res.data);
		})

	},[])


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



	useEffect(() => {
		setCount(icart.reduce((ac, val) => ac + val.price, (0)))
		// axios.post('./data/cart.json', icart[icart.length-1])

	}, [icart])



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
				<div className='infobar'>
					<div className='productTitle'>{searchValue ? `${searchValue} חיפוש לפי ` : "כל המוצרים"}</div>
					<div className='search '>
						<input className='inpt' onChange={(event) => {
							setSearchValue(event.target.value)
						}} value={searchValue} type="text" />
						<img src="/img/loopa.svg" alt="" />
						{searchValue && <img className='clearBtn' onClick={() => { setSearchValue('') }} src="/img/ClearButton.svg" alt="clearbtn" />}
					</div>
				</div>
				<div className='products'>
					{cards.filter((item)=>item.model.toLowerCase().includes(searchValue))
					.map((product, index) => {
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
