import React from "react";
// import { categories } from "../App";
import categories from "../categories";
interface Props {
  onSelect: (category: string) => void;
}
const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <div>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="form-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
