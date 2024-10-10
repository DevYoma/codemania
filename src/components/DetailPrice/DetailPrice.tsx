import "./DetailPrice.scss";

type Props = {
    icon: string;
    amount: string;
    styles?: React.CSSProperties;
}

const DetailPrice = ({ icon, amount, styles }: Props) => {
  return (
     <div className="DetailPrice" style={styles}>  
        <img src={icon} alt="trophy-icon" />
        <span>{amount}</span>
    </div>
  )
}

export default DetailPrice