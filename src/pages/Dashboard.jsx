import Navbar from "../components/Navbar";
import Animals from "./Animals";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        <h1>Welcome to Wahome Herd Management System</h1>
        <Animals />
      </main>
    </div>
  );
}
