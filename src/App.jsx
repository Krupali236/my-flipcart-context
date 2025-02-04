import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(<><Header/><Home/></>)
    },
    {
      path:"/cart",
      element:(<><Cart /></>)
    },
  ])
  return (
    <>
    {/* <Header/>
     <Home /> */}
     <RouterProvider router={router} />
    </>
  )
}

export default App
