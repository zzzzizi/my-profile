import './barRightBtn.css';

export const BarRightBtn = ({
  btn,
  handleClick,
}: {
  btn: string;
  handleClick: () => void;
}) => {
  return (
    <button className="bar__right__btn" onClick={() => handleClick()}>
      {btn}
    </button>
  );
};
