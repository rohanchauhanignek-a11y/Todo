import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./layouts/Layout"
import FormPage from "./pages/FormPage"
import { lazy ,Suspense} from "react"
import TaskShimmer from "./components/UI/ShimmerTaskTable"

import ErrorFallback from "./components/UI/ErrorFallBack";
import Main from "./pages/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<TaskShimmer/>}>
            <Main />
          </Suspense>
            
        
        ),
      },
      {
        path: "formpage",
        element: <FormPage />,
      },
    ],
    errorElement: <ErrorFallback />,
  },
]);
function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
