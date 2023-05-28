import React from "react";
import ExpenseList from "./ExpenseTracker/ExpenseList";

let expenses = [
  { id: 1, description: "carrot", amount: 10, category: "edibles" },
  { id: 2, description: "ipad", amount: 699, category: "entertaintment" },
  { id: 3, description: "tomato", amount: 12, category: "edibles" },
  { id: 4, description: "pants", amount: 10, category: "clothing" },
];

const App = () => {
  return (
    <div>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
