import { useParams } from 'react-router-dom'
import './LessonDetail.css'

function LessonDetail() {
    const { id } = useParams<{ id: string }>()

  return (
    <div>
      <h1>Card Detail: {id}</h1>
    </div>
  );
}
export default LessonDetail;
