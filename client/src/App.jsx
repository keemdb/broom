import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Error, Landing, Login, Profile, } from './pages';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/Landing',
        element: <Landing/>,
      },
      {
        path:'/Login',
        element: <Login/>,
      },
      {
        path:'/Profile',
        element: <Profile/>,
      },
    ]
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App