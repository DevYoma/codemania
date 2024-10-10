import TableRow from '../TableRow';
import "./LeaderboardTable.scss";

type PlayerData = {
  placement: {
    rank: number;
    status: 'up' | 'down' | 'none';
  };
  player: string;
  gamesPlayed: number;
  wins: number;
  losses: number;
  wlRatio: string;
  points: number;
}

const leaderboardData: PlayerData[] = [
  {
    placement: { rank: 1, status: "up" },
    player: "Adebayo Oyeleye",
    gamesPlayed: 20,
    wins: 20,
    losses: 0,
    wlRatio: "100%",
    points: 49,
  },
  {
    placement: { rank: 2, status: "down" },
    player: "IBROMOVIC109",
    gamesPlayed: 20,
    wins: 19,
    losses: 1,
    wlRatio: "98%",
    points: 47,
  },
  {
    placement: { rank: 3, status: "none" },
    player: "Drillz",
    gamesPlayed: 20,
    wins: 17,
    losses: 3,
    wlRatio: "92%",
    points: 46,
  },
  {
    placement: { rank: 4, status: "up" },
    player: "Bigbadderwolf",
    gamesPlayed: 20,
    wins: 12,
    losses: 8,
    wlRatio: "55%",
    points: 39,
  },
  {
    placement: { rank: 5, status: "none" },
    player: "Pinky",
    gamesPlayed: 20,
    wins: 10,
    losses: 6,
    wlRatio: "50%",
    points: 34,
  },
  {
    placement: { rank: 6, status: "none" },
    player: "demolaoflag",
    gamesPlayed: 22,
    wins: 8,
    losses: 14,
    wlRatio: "48%",
    points: 30,
  },
];


const LeaderboardTable = () => (
  <table className="leaderboardTable">
    <thead>
      <tr>
        <th>Placement</th>
        <th>Player</th>
        <th>Games Played</th>
        <th>Wins</th>
        <th>Losses</th>
        <th>W/L Ratio</th>
        <th>Points</th>
      </tr>
    </thead>
    <tbody>
      {leaderboardData.map((player, index) => (
        <TableRow key={index} {...player} />
      ))}
    </tbody>
  </table>
);

export default LeaderboardTable;
