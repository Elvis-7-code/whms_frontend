import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAnimal from "./pages/AddAnimal";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Breeding from "./pages/Breeding";
import Feed from "./pages/Feed";
import Vaccinations from "./pages/Vaccinations";
import Animals from "./pages/Animals";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

  <Route element={<ProtectedRoute />}>
    <Route path="/" element={<Dashboard />} />
    <Route path="/animals" element={<Animals />} />
    <Route path="/animals/new" element={<AddAnimal />} />
    <Route path="/breeding" element={<Breeding />} />
    <Route path="/feed" element={<Feed />} />
    <Route path="/vaccinations" element={<Vaccinations />} />
  </Route>
      </Routes>
    </Router>
  );
}
export default App;