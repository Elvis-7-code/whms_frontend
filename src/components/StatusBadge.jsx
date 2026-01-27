export default function StatusBadge({ status }) {
  let colorClass = "";
  switch(status) {
    case "healthy": colorClass = "badge-healthy"; break;
    case "pregnant": colorClass = "badge-pregnant"; break;
    case "warning": colorClass = "badge-warning"; break;
    case "critical": colorClass = "badge-critical"; break;
    default: colorClass = "badge-info";
  }
  return <span className={colorClass}>{status.toUpperCase()}</span>;
}
