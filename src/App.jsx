import Navbar from "./components/Navbar";
import Animals from "./pages/Animals";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Wahome Herd Management System</h1>
        <Animals />
      </main>
    </div>
  );
}

export default App;
