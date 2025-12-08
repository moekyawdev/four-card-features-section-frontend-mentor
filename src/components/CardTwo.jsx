import teamBuilderIcon from "../images/icon-team-builder.svg";
export function CardTwo() {
  return (
    <div className="card team-builder">
      <h3>Team Builder</h3>
      <p>Scans our talent network to create the optimal team</p>
      <img src={teamBuilderIcon} alt="Team Builder icon" />
    </div>
  );
}
