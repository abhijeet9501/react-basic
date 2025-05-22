import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import Login from "./pages/login.page.jsx";
import AddToDo from "./pages/AddTodo.jsx";
import ViewToDo from "./pages/ViewTodos.jsx";
import EditToDo from "./pages/EditTodo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <AddToDo />,
      },
      {
        path: "/view",
        element: <ViewToDo />,
      },
      {
        path: "/edit",
        element: <EditToDo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
