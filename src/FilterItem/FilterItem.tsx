import "./FilterItem.css";

interface IFilterItem {
  id: string;
  type: string;
  isActive: boolean;
  onCheckboxChange: (type: string) => void;
}

const FilterItem: React.FC<IFilterItem> = ({ id, type, isActive, onCheckboxChange }) => {
  return (
    <div className="lesson-type-item-container">
       <label htmlFor={`lessonType-${id}`}>
        {type}
      </label>
      <input
        type="checkbox"
        id={`lessonType-${id}`}
        checked={isActive}
        onChange={() => onCheckboxChange(type)}
      />
    </div>
  );
}

export default FilterItem;
