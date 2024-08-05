"use client";
import CountUp from "react-countup";
const CustomCountUp = ({
  value,
  duration = 5,
}: {
  value: number;
  duration?: number;
}) => {
  return <CountUp end={value} duration={duration} />;
};

export default CustomCountUp;
