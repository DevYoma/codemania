import Button from "./Button/Button";

type TabNavigationProps =  {
  activeTab: 'Leaderboard' | 'Fixtures';
  onTabChange: (tab: 'Leaderboard' | 'Fixtures') => void;
}

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => (
  <div className="tabNavigation">
    <div
      style={{
        display: "flex",
        gap: "8px",
        marginBottom: "24px",
      }}
    >
      <Button
        children="Leaderboard"
        onClick={() => onTabChange("Leaderboard")}
        className={activeTab === "Leaderboard" ? "active" : ""}
        variant="leader"
        style={{
          fontWeight: "normal",
        }}
      />
      <Button
        children="Fixtures"
        onClick={() => onTabChange("Fixtures")}
        className={activeTab === "Fixtures" ? "active" : ""}
        variant="secondary"
      />
    </div>
  </div>
);

export default TabNavigation;
