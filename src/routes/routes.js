import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import IdHunter from "../components/IdHunter/IdHunter";
import Main from "../layout/Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element : <Main />,
    children :[
       {
        path: '/idHunter/:id' ,
        element : <IdHunter />

      },
       {
        path: '/' ,
        element : <Home />

      },
    ]
  }
])

export default routes
