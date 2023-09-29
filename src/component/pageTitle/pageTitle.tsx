import { BlueSquare } from '../../component/blueSquare/blueSquare';

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="page__title">
      <BlueSquare />
      <p>{title}</p>
    </div>
  );
};
