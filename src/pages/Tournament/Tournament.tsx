import TournamentCard from "../../components/TournamentCard/TournamentCard";
import "./Tournament.scss"
import AvatarButtonLogo from "../../assets/buttonLogo.png";
import AnimeImg from "../../assets/AnimeImg.png"
import PlayLogo from "../../assets/playLogo.png"
import TournamentEvent from "../../components/TournamentEvent/TournamentEvent";

const Tournament = () => {
  return (
    <div className="tournament">
      <TournamentCard
        buttonLogo={AvatarButtonLogo}
        picture={AnimeImg}
        text="Complete your information to get access to tournaments and other premium features"
        title="Setup your profile"
      />

      <div className="tournamentOtherCards">
        <TournamentCard
          buttonLogo={AvatarButtonLogo}
          picture={AnimeImg}
          text="Start or resume tournaments you have registered for"
          title="Continue playing"
          width="50%"
          buttonProps={{
            children: "Continue playing",
            variant: "secondary",
            logo: PlayLogo,
          }}
        />

        <TournamentCard
          buttonLogo={AvatarButtonLogo}
          picture={AnimeImg}
          text="Create a tournament and invite friends to play"
          title="Quick match"
          width="50%"
          buttonProps={{
            children: "Let's go",
            variant: "secondary",
            logo: PlayLogo,
          }}
        />
      </div>

      {/* TOURNAMENTS MAIN SECTION */}
      <div className="tournamentMain">
        <div className="tournamentMainHeader">
          <h2>Tournaments</h2>
        </div>

        <div className="tournamentMainContent">
          {/* stopped */}
          <TournamentEvent />
          <TournamentEvent />
          <TournamentEvent />
          <TournamentEvent />
          <TournamentEvent />
          <TournamentEvent />
          <TournamentEvent />
        </div>
      </div>
    </div>
  );
}

export default Tournament