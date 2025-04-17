import './App.css'
import {BrowserRouter, createBrowserRouter, RouterProvider, Route, Routes} from "react-router";
import Home from "./components/Home.jsx";
import Catalog from "./components/Catalog.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Error404 from "./components/Error404.jsx";
import Partners from "./components/Partners.jsx";
import Layout from "./components/Layout.jsx";
import Contacts from "./components/Contacts.jsx";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "catalog",
            element: <Catalog/>
        },
        {
            path: "contacts",
            element: <Contacts/>
        },
        {
            path: "aboutus",
            element: <AboutUs/>,
            children: [
                {
                path: "partners",
                element: <Partners/>
            }
            ]
        },
        {
            path: "*",
            element: <Error404/>
        }
    ]
    },
]);

// const router = createBrowserRouter([
//     {
//     path: "/",
//     element: <Layout/>
//     // path: "/",
//     // element: <Home/>
//     },
//     {
//     path: "/catalog",
//     element: <Catalog/>
//     },
//     {
//     path: "/aboutus",
//     element: <AboutUs/>
//     },
//     {
//     path: "/aboutus/partners",
//     element: <Partners/>
//     },
//     {
//     path: "*",
//     element: <Error404/>
//     },
// ]);
//
const App = () => <RouterProvider router={router}/>;
// function App () {
//     return (
//         <RouterProvider router={router}/>
//     );
// }

// function App() {
//
//   return (
//       <BrowserRouter>
//         <div>We work!!!</div>
//         <Routes>
//           <Route path="/" element={<Home/>}></Route>
//           <Route path="/catalog" element={<Catalog/>}></Route>
//           <Route path="/aboutus" element={<AboutUs/>}></Route>
//           <Route path="/aboutus/partners" element={<Partners/>}></Route>
//           <Route path="/*" element={<Error404/>}></Route>
//
//         </Routes>
//       </BrowserRouter>
//   )
// }

export default App
