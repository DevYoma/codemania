import "./Detail.scss"

type Props = {
    icon: string;
    text: string;
    style?: React.CSSProperties;
}

const Detail = ({ icon, text, style }: Props) => {
  return (
    <div className="detail" style={style}>
        <img src={icon} alt="icon" />
        <span>{text}</span>
    </div>
  )
}

export default Detail