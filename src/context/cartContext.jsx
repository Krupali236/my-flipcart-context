import { createContext, useReducer, useContext } from "react";
import { products } from "../components/Products";

// Create Context
const CartContext = createContext();

// Initial State
const initialState = {
  cartItems: [],
  filteredProducts: products, // Initially, show all products
};

// Reducer Function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filteredProducts:
          action.payload === "all"
            ? products
            : products.filter((item) => item.category === action.payload),
      };

    default:
      return state;
  }
};

// Context Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook to use Cart Context
export const useCart = () => useContext(CartContext);
