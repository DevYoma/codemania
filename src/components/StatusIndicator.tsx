import React from "react";
import IncreaseIcon from "../assets/increase.png";
import DecreaseIcon from "../assets/decrease.png";

type StatusIndicatorProps =  {
  status: "up" | "down" | "none";
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  let indicatorContent: React.ReactNode;

  // Set the appropriate content based on the status
  if (status === "up") {
    indicatorContent = (
      <img src={IncreaseIcon} alt="Increase" className="status-icon" />
    );
  } else if (status === "down") {
    indicatorContent = (
      <img src={DecreaseIcon} alt="Decrease" className="status-icon" />
    );
  } else {
    indicatorContent = "—"; // Dash for 'none' status
  }

  return (
    <span className={`status-indicator ${status}`}>{indicatorContent}</span>
  );
};

export default StatusIndicator;