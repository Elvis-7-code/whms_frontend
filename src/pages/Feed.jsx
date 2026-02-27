export default function Feed() {
  return (
    <div className="page">
      <h2>Feed Inventory</h2>

      <p className="page-desc">
        Monitor feed stock levels and consumption across the farm.
      </p>

      <div className="card">
        <p>No feed data available.</p>
        <p className="muted">
          Feed usage and alerts will be displayed here.
        </p>
      </div>
    </div>
  );
}
