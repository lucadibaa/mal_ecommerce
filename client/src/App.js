import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from './redux/actions/productsActions.js'
import './App.css'

function App() {

  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  console.log(products)

  return (
    <div className='bg-red-900'>
      hello
      {
        products?.map(product => <div>{product.name}</div>)
      }
    </div>
  )
}

export default App
