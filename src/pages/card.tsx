import { useParams } from "react-router-dom";

const Card = () => {
  const searchParams = useParams();

  const id = searchParams.id;

  console.log(id);
  return <div>{id}</div>;
};

export default Card;
