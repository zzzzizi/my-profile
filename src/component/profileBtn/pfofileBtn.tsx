import './profileBtn.css';

export const ProfileBtn = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) => {
  return (
    <button className="profileBtn" onClick={() => handleClick()}>
      {text}
    </button>
  );
};
