import { useReducer } from "react"
import Header from "./components/Header"
import Phone from "./components/Phone"

import { useCart } from "./hooks/useCart"
import { cartReducer, initialState } from "./reducers/cart-reducer"

function App() {

  const {
    decreaseQuantity,
    clearCart
  } = useCart()

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <Header
        cart={state.cart}
        dispatch={dispatch}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            state.data.map((phone) => (
              <Phone
                key={phone.id}
                phone={phone}
                dispatch={dispatch}
              />
            ))
          }

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">Phone Store - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
