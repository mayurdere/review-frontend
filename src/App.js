import logo from "./logo.svg";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen/home-screen";
import Landing from "./screens/Landing/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./components/AppProvider";

function App() {
  return (
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route>
              <Route index element={<Landing />} />
              <Route path="home" exact element={<HomeScreen />}>
                <Route path=":teamId" element={<HomeScreen />} />
                <Route path="new" element={<HomeScreen />} />
                <Route index element={<HomeScreen />} />
              </Route>
            </Route>
          </Routes>
        </AppProvider>
      </BrowserRouter>
  );
}

export default App;
