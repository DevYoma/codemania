import Button from "../Button/Button";
import "./TournamentEvent.scss";
import CODImg from "../../assets/CODImg.png";
import CalendarIcon from "../../assets/calendarIcon.png";
import TrophyIcon from "../../assets/trophyIcon.png";
import TournamentLogo from "../../assets/tournamentIcon.png";
import Detail from "../Detail/Detail";
import DetailPrice from "../DetailPrice/DetailPrice";

const TournamentEvent = () => {
  return (
    <div className="tournamentEvent">
      <img src={CODImg} className="tournamentEventImage" alt="cod-img" />

      <div className="tournamentEventDetails">
        <p className="tournamentEventDetailsTitle">Call of duty</p>

        <div>
          <Detail 
            icon={CalendarIcon}
            text="10 Feb 2023"
          />

          <Detail 
            icon={CalendarIcon}
            text="Free-to-play"
          />

          <Detail 
            icon={CalendarIcon}
            text="4v4"
          />

          <Detail 
            icon={CalendarIcon}
            text="10/48"
          />
        </div>
        
        <DetailPrice 
            icon={TrophyIcon}
            amount={"10,000"}
            styles={{
                margin: "12px 0"
            }}
        />

        <div className="tournamentEventDetailsButtons">
          <Button
            children="Join tournament"
            logo={TournamentLogo}
            style={{
              width: "100%",
              borderRadius: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <Button
            children="View details"
            logo={TournamentLogo}
            variant="secondary"
            style={{
              width: "100%",
              border: "1px solid #4A4A4A",
              borderRadius: "0px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TournamentEvent