import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes} >

      </RouterProvider>
      <Footer />

    </div>
  );
}

export default App;
