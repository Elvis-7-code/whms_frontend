import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddAnimal() {
  const [tagNumber, setTagNumber] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
  const [dateBought, setDateBought] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post("/animals", {
        tag_number: tagNumber,
        species,
        breed,
        sex,
        date_bought: dateBought || null
      });
      alert("Animal added successfully!");
      navigate("/"); // go back to Animals list
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Failed to add animal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Add New Animal</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Tag Number"
          value={tagNumber}
          onChange={(e) => setTagNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Species (cow, goat, sheep...)"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
          <option value="">Select Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="date"
          placeholder="Date Bought"
          value={dateBought}
          onChange={(e) => setDateBought(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Animal"}
        </button>
      </form>
    </div>
  );
}
