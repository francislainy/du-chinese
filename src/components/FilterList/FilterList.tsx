import "./FilterList.css";
import FilterItem from "../FilterItem/FilterItem";
import { IFilter } from "../interfaces/IFilter.tsx";
import React from "react";

interface FilterListProps {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

function FilterList({ selectedFilters, setSelectedFilters }: FilterListProps) {
  const filterList: IFilter[] = [
    { id: "1", type: "Newbie", isActive: false },
    { id: "2", type: "Elementary", isActive: false },
    { id: "3", type: "Intermediate", isActive: false },
    { id: "4", type: "Upper Intermediate", isActive: false },
    { id: "5", type: "Advanced", isActive: true },
    { id: "6", type: "Master", isActive: false },
  ];

  const handleCheckboxChange = (type: string) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(type)
        ? prevFilters.filter((filter) => filter !== type)
        : [...prevFilters, type],
    );
  };

  return (
    <div className="lesson-type-list-container">
      {filterList.map((filter, index) => (
        <FilterItem
          key={index}
          {...filter}
          isActive={selectedFilters.includes(filter.type)}
          onCheckboxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
}

export default FilterList;
