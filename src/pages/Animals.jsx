import { useEffect, useState } from "react";
import api from "../api/axios";
import StatusBadge from "../components/StatusBadge";

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const res = await api.get("/animals");
        setAnimals(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAnimals();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Animals</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        {animals.length === 0 && <p>No animals found.</p>}

        {animals.map(a => (
          <div key={a.id} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p><strong>{a.tag_number}</strong> - {a.species}</p>
              <p>Breed: {a.breed} | Sex: {a.sex}</p>
            </div>
            <StatusBadge status={a.is_pregnant ? "pregnant" : "healthy"} />
          </div>
        ))}
      </div>
    </div>
  );
}
