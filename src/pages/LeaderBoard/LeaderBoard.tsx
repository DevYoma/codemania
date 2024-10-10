import "./LeaderBoard.scss";
import CODBannerImg from "../../assets/CODBanner.png";
import DetailPrice from "../../components/DetailPrice/DetailPrice";
import TrophyIcon from "../../assets/trophyIcon.png";
import Detail from "../../components/Detail/Detail";
import CalanderIcon from "../../assets/calendarIcon.png";
import Button from "../../components/Button/Button";
import GamePads from "../../assets/tournamentIcon.png";
import LeaderboardContainer from "../../components/LeaderBoardContainer/LeaderBoardContainer";

const LeaderBoard = () => {
  return (
    <div className="leaderBoard">
      <img src={CODBannerImg} alt="banner" className="leaderBoardBanner" />

      <div className="leaderBoardContent">
        <h1>Call of duty</h1>

        <DetailPrice icon={TrophyIcon} amount={"10,000"} />

        <div className="leaderBoardContentDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>

        <div className="leaderBoardContentInfo">
          <Detail
            icon={CalanderIcon}
            text="10 Feb 2023"
            style={{ width: "133px", gap: "8px" }}
          />

          <Detail
            icon={CalanderIcon}
            text="Free-to-play"
            style={{ width: "133px", gap: "8px" }}
          />

          <Detail
            icon={CalanderIcon}
            text="4v4"
            style={{ width: "133px", gap: "8px" }}
          />

          <Detail
            icon={CalanderIcon}
            text="10/48"
            style={{ width: "133px", gap: "8px" }}
          />
        </div>

        <Button
          children="Join tournament"
          logo={GamePads}
          onClick={() => alert("Clicked")}
        />
      </div>

      {/* Table */}
      <LeaderboardContainer />
    </div>
  );
};

export default LeaderBoard;
