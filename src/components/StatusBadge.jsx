export default function StatusBadge({ status = "info" }) {
  const normalizedStatus = status.toLowerCase();

  const statusClasses = {
    healthy: "badge-healthy",
    pregnant: "badge-pregnant",
    warning: "badge-warning",
    critical: "badge-critical",
    sold: "badge-info",
    deceased: "badge-critical",
  };

  const colorClass = statusClasses[normalizedStatus] || "badge-info";

  return (
    <span className={`status-badge ${colorClass}`}>
      {normalizedStatus.toUpperCase()}
    </span>
  );
}
