import StatusIndicator from './StatusIndicator';

type TableRowProps = {
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

const TableRow = ({
  placement,
  player,
  gamesPlayed,
  wins,
  losses,
  wlRatio,
  points,
}: TableRowProps) => (
  <tr>
    <td>
      <StatusIndicator status={placement.status} /> {placement.rank}
    </td>
    <td>{player}</td>
    <td>{gamesPlayed}</td>
    <td>{wins}</td>
    <td>{losses}</td>
    <td>{wlRatio}</td>
    <td>{points}</td>
  </tr>
);

export default TableRow;
