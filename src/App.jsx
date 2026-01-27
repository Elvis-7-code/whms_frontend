import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAnimal from "./pages/AddAnimal";
import Animals from "./pages/Animals";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Animals />} />
      </Routes>
    </Router>
  );
}
