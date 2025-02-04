import { useCart } from "../context/cartContext";

const Home = () => {
  const { state, dispatch } = useCart(); // ✅ Access state & dispatch from context

  // Handle category filter
  const handleCategory = (category) => {
    dispatch({ type: "FILTER_BY_CATEGORY", payload: category });
  };

  return (
    <>
      <div className="container:full">
        <div>
          <div className="grid my-5">
            <div className="columns-1 flex justify-center">
              <button className="bg-purple-500 text-white w-40 mx-10" onClick={() => handleCategory("all")}>All</button>
              <button className="bg-purple-500 text-white w-40 mx-10" onClick={() => handleCategory("Electronics")}>Electronics</button>
              <button className="bg-purple-500 text-white w-40 mx-10" onClick={() => handleCategory("Accessories")}>Accessories</button>
              <button className="bg-purple-500 text-white w-40 mx-10" onClick={() => handleCategory("Fashion")}>Fashion</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-5 px-4 my-4">
          {state.filteredProducts.map((item, index) => (
            <div className="columns-1" key={index}>
              <div className="card bg-purple-300 flex flex-col justify-center items-center h-full border-2 border-purple-700 rounded-lg">
                <img className="my-3" src={item.image} alt={item.name} />
                <p className="text-lg font-bold my-3">{item.name}</p>
                <p>Price: ${item.price}</p>
                <button
                  className="my-3 bg-purple-500 text-white px-4 py-2 rounded"
                  onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
