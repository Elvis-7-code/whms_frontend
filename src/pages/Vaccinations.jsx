export default function Vaccinations() {
  return (
    <div className="page">
      <h2>Vaccinations</h2>

      <p className="page-desc">
        Keep track of animal vaccinations and upcoming schedules.
      </p>

      <div className="card">
        <p>No vaccination records found.</p>
        <p className="muted">
          Vaccination history and reminders will appear here.
        </p>
      </div>
    </div>
  );
}
