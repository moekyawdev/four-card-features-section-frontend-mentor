import calculatorIcon from "../images/icon-calculator.svg";
export function CardFour() {
  return (
    <div className="card calculator">
      <h3>Calculator</h3>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src={calculatorIcon} alt="Calculator icon" />
    </div>
  );
}
