import { Container, Dot, FatherContainer } from "./styled";
import { useState, useEffect } from "react";
import Card from "../components/card+hour/card";
import CardDate from "../components/card+date/card.date";
import ClockWithToggle from "../components/hour+format/hour-format";
import getCurrentTime from "../function/get-current-time";

function Home() {
  const [time, setTime] = useState(new Date());
  const [format, setFormat] = useState("12h");
  const [currentTime, setCurrentTime] = useState(getCurrentTime(format));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setCurrentTime(getCurrentTime(format));
    }, 1000);
    return () => clearInterval(interval);
  }, [format]);

  const toggleFormat = () => {
    setFormat(format === "12h" ? "24h" : "12h");
  };

  return (
    <FatherContainer>
      <div>
        <ClockWithToggle format={format} toggleFormat={toggleFormat} />
      </div>
      <Container>
        <Card
          number={format === "12h" ? currentTime.hours : currentTime.hours}
        ></Card>
        <Dot>:</Dot>
        <Card number={currentTime.minutes}></Card>
        <Dot>:</Dot>
        <Card number={currentTime.seconds}></Card>
      </Container>
      <Container>
        <CardDate number={time.getMonth() + 1} />
        <Dot>/</Dot>
        <CardDate number={time.getFullYear()} />
      </Container>
    </FatherContainer>
  );
}

export default Home;
