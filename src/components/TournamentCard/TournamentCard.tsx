import React from "react";
import Button, { ButtonProps } from "../Button/Button";
import "./TournamentCard.scss";

type Props = {
    title: string;
    text: string;
    picture: string;
    buttonLogo: string;
    width?: string;
    style?: React.CSSProperties;
    buttonProps?: ButtonProps;
}


const TournamentCard = ({ title, text, picture, buttonLogo, width = "100%", style, buttonProps }: Props) => {
  return (
    <div className="tournamentCard" style={{ width, ...style }}>
      <div className="tournamentCardLeft">
        <h2>{title}</h2>
        <p>{text}</p>
        <Button
          children={"Complete Profile"}
          logo={buttonLogo}
          style={{
            padding: "14px 1rem",
            width: "fit-content",
            marginTop: "1rem",
          }}
          {...buttonProps}
        />
      </div>

      <div className="tournamentCardRight">
        <img src={picture} alt="AnimeImg" />
      </div>
    </div>
  );
}

export default TournamentCard