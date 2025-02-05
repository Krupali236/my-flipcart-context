import cart from "../assets/cart.svg";
import { useCart } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { state } = useCart(); // ✅ Access cart state
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full">
        <div className="nav bg-purple-600 h-24 flex items-center justify-center mb-10">
          <ul className="flex text-white text-xl space-x-36">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
            <li
              className="relative cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              <span className="absolute -top-2 -right-2 px-2 text-purple-700 bg-white rounded-full text-lg">
                {state.cartItems.length} {/* ✅ Show cart count */}
              </span>
              <img src={cart} alt="cart" className="w-10 h-10" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
