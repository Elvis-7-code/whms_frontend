import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Animals() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    api.get("/animals").then(res => setAnimals(res.data));
  }, []);

  return (
    <div>
      <h2>Animals</h2>
      {animals.map(a => (
        <p key={a.id}>{a.tag_number} - {a.species}</p>
      ))}
    </div>
  );
}
