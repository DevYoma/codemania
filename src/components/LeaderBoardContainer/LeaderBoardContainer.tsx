import { useState } from "react";
import TabNavigation from "../TabNavigation";
import "./LeaderBoardContainer.scss";
import LeaderboardTable from "../LeaderboardTable/LeaderboardTable";

const LeaderboardContainer = () => {
  const [activeTab, setActiveTab] = useState<"Leaderboard" | "Fixtures">(
    "Leaderboard"
  );

  return (
    <div className="leaderboardContainer">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "Leaderboard" && <LeaderboardTable />}
      {activeTab === "Fixtures" && <div>Fixtures Content Here</div>}
    </div>
  );
};

export default LeaderboardContainer;
