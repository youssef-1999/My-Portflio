import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/About/Home";
import Projects from "./Components/Projects/Projects";
import Layout from "./Components/Layout/Layout";
import Skills from "./Components/Skills/Skills";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import Certificates from "./Components/Certificates/Certificates";


function App() {
  let router =createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'projects',element:<Projects/>},
      {path:'skills',element:<Skills/>},
      {path:'certificates',element:<Certificates/>},
      {path:'*',element:<PageNotFound />},
     
    ]}
  ])
  return (
   <>
  <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
