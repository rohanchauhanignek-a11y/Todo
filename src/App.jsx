import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Layout from "./layouts/Layout"
import FormPage from "./pages/FormPage"
import { lazy ,Suspense} from "react"
import MainShimmer from "./components/UI/MainShimmer"
import ErrorFallback from "./components/UI/ErrorFallBack";
const Main =lazy(() => import("./pages/Home"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: (
          <Suspense fallback={<MainShimmer />}>
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
