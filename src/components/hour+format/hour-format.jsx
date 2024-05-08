import AlternButton from "./styles";

function ClockWithToggle({ format, toggleFormat }) {
  return (
    <div>
      <AlternButton onClick={toggleFormat}>
        {format === "12h" ? "24h" : "AM PM"}
      </AlternButton>
    </div>
  );
}

export default ClockWithToggle;
