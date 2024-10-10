import "./Navbar.scss";
import Logo from "../../assets/codemaniaLogo.png";
import NotificationLogo from "../../assets/NotificationLogo.png";
import CoinLogo from "../../assets/MoneyLogo.png";
import AvatarLogo from "../../assets/AvatarLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbarLeft">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbarMiddle">
        <input
          type="search"
          placeholder="Search tournament, player name or player tag"
        />
      </div>

      <div className="navbarRight">
        <img src={NotificationLogo} alt="" />
        <div>
          <img src={CoinLogo} alt="" />
          <p>20,000</p>
        </div>

        <div className="navbarRightProfile">
          <img src={AvatarLogo} alt="" />

          <div>
            <p>Akinola Olalekan</p>
            <select>
              <option value="online">Online</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar