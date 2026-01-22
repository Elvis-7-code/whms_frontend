import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await api.get("/animals");  // Call backend
        setAnimals(res.data);
      } catch (err) {
        console.error("Error fetching animals:", err);
      }
    };
    fetchAnimals();
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Animals</h2>

      <div style={{ display: "grid", gap: "1rem" }}>
        {animals.length === 0 && <p>No animals found.</p>}

        {animals.map(a => (
          <div
            key={a.id}
            className="card"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <div>
              <p><strong>{a.tag_number}</strong> - {a.species}</p>
              <p>Breed: {a.breed} | Sex: {a.sex}</p>
            </div>

            {/* Status badge */}
            {a.is_pregnant ? (
              <span className="badge-pregnant">Pregnant</span>
            ) : (
              <span className="badge-healthy">Healthy</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
