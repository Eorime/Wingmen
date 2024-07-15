import React, { useEffect, useState } from "react";
import {
  ClockContainer,
  ClockFace,
  Container,
  HourHand,
  MinuteHand,
} from "./style";

const NavbarClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const minuteRotation = (minutes / 60) * 360;
  const hourRotation = ((hours * 60 + minutes) / 720) * 360;

  return (
    <Container>
      <ClockContainer>
        <ClockFace>
          <HourHand rotation={hourRotation} />
          <MinuteHand rotation={minuteRotation} />
        </ClockFace>
      </ClockContainer>
    </Container>
  );
};

export default NavbarClock;
