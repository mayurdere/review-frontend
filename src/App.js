import logo from "./logo.svg";
import "./App.scss";
import HomeScreen from "./screens/HomeScreen/home-screen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppProvider from "./components/AppProvider";

function App() {
  return (
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route path="/" element={<HomeScreen/>}>
              <Route index element={<HomeScreen />} />
              <Route path="teams" element={<HomeScreen />}>
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
