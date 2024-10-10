import "./Sidebar.scss";
import TournamentLogo from "../../assets/tournamentIcon.png";
import LeaderBoardsLogo from "../../assets/leaderboardsIcon.png";
import TokenShopLogo from "../../assets/tokenIcon1.png";
import LiveBettingLogo from "../../assets/liveBettingIcon.png";
import ContentLockerLogo from "../../assets/contentLockerIcon.png";
import CommunityLogo from "../../assets/communityLogo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LogoutIcon from "../../assets/LogoutIcon.png";

const Sidebar = () => {
    const sidebarItems = [
        {
            id: 1, 
            name: "Tournaments", 
            link: "/",
            icon: TournamentLogo
        },
        {
            id: 2, 
            name: "Leaderboard",
            link: "leaderboard",
            icon: LeaderBoardsLogo
        }, 
        {
            id: 3, 
            name: "Token shop", 
            link: "token",
            icon: TokenShopLogo
        }, 
        {
            id: 4, 
            name: "Live betting", 
            link: "betting", 
            icon: LiveBettingLogo
        }, 
        {
            id: 5, 
            name: "Content locker", 
            link: "content",
            icon: ContentLockerLogo
        }, 
        {
            id: 6, 
            name: "Community", 
            link: "community",
            icon: CommunityLogo
        }
    ]
  return (
    <div className="sidebar">
        <div className="sidebarContent">
            {sidebarItems.map((sidebarItem) => {
                return (
                <Link to={sidebarItem.link} className="sidebarContentLink" key={sidebarItem.icon}>
                    <img src={sidebarItem.icon} alt={sidebarItem.link} />
                    <p>{sidebarItem.name}</p>
                </Link>
                );
            })}
        </div>

        <div className="sidebarButton">
            <Button 
                children="LOG - OUT"
                logo={LogoutIcon}
                variant="danger"
                style={{
                    fontWeight: "400", 
                    width: "80%",
                        display: "flex", 
                    justifyContent: "center"
                }}
            />
        </div>    
    </div>
  )
}

export default Sidebar