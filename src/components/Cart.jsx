import { useCart } from "../context/cartContext";

const Cart = () => {
     const { state, dispatch } = useCart(); // ✅ Access state & dispatch from context


  // Calculate total price
  const totalPrice = state.cartItems.reduce((total, item) => total + item.price, 0);
     console.log(state,"state");
  return (
    <>
      <h1 className="bg-purple-500 my-5 py-3 text-white">Cart</h1>
      <div className="container:full">        

        <div className="grid grid-cols-3 gap-5 px-4 my-4">
          {state.cartItems.map((item, index) => (
            <div className="columns-1" key={index}>
              <div className="card bg-purple-300 flex flex-col justify-center items-center h-full border-2 border-purple-700 rounded-lg">
                <img className="my-3" src={item.image} alt={item.name} />
                <p className="text-lg font-bold my-3">{item.name}</p>
                <p>Price: ${item.price}</p>
                <button
                  className="my-3 bg-purple-500 text-white px-4 py-2 rounded"                  
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                >   
                  Remove To Cart
                </button>
              </div>
            </div>
          ))}          
        </div>
        <div className="grid justify-start mt-12">
            <h1 className="my-2 text-xl">Total Items : {state.cartItems.length}</h1>
            <h1 className="my-3 text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h1>
        </div>
      </div>
    </>
  );
};
export default Cart;
