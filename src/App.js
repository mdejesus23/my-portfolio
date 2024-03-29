import { createHashRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Project";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "Projects", element: <ProjectsPage /> },
      { path: "Contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// loader: async () => {
//   const response = await fetch(
//     "https://react-custom-http-8477e-default-rtdb.firebaseio.com/Projects.json"
//   );

//   if (!response.ok) {
//     // throw new Error("Something went wrong");
//   } else {
//     const resData = await response.json();

//     const projects = [];

//     for (const key in resData) {
//       projects.push({
//         id: key,
//         name: resData[key].name,
//         image: resData[key.image],
//         link: resData[key].link,
//       });
//     }

//     return projects; // this data will be use to the ProjectsPage component and child compoenent
//   }
// },
