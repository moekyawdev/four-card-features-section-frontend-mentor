import supervisorIcon from "../images/icon-supervisor.svg";
export function CardOne() {
  return (
    <div className="card supervisor">
      <h3>Supervisor</h3>
      <p>Monitors activity to identify project roadblocks</p>
      <img src={supervisorIcon} alt="Supervisor icon" />
    </div>
  );
}
