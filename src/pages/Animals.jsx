import { useEffect, useState } from "react";
import api from "../api/axios";
import StatusBadge from "../components/StatusBadge";
import { Link } from "react-router-dom";

export default function Animals() {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        // make sure your backend baseURL is set in api/axios.js
        const res = await api.get("/animals"); 
        setAnimals(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch animals. Is the backend running?");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  if (loading) return <p>Loading animals...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Animals</h2>
      <Link to="/add-animal">Add New Animal</Link>
      <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
        {animals.length === 0 && <p>No animals found.</p>}

        {animals.map((a) => (
          <div
            key={a.id}
            className="card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <div>
              <p>
                <strong>{a.tag_number}</strong> - {a.species}
              </p>
              <p>
                Breed: {a.breed} | Sex: {a.sex}
              </p>
            </div>
            <StatusBadge status={a.is_pregnant ? "pregnant" : "healthy"} />
          </div>
        ))}
      </div>
    </div>
  );
}
