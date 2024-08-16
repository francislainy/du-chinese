import { useParams } from 'react-router-dom'
import './CardDetail.css'

function CardDetail() {
    const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1>Card Detail: {id}</h1>
    </div>
  );
}
export default CardDetail;
