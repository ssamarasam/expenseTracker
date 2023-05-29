import React from "react";
import ExpenseList from "./ExpenseTracker/ExpenseList";
import { useState } from "react";
import ExpenseFilter from "./ExpenseTracker/ExpenseFilter";
import ExpenseForm from "./ExpenseTracker/ExpenseForm";

const App = () => {
  // const [expenses, setExpenses] = useState([
  //   { id: 1, description: "carrot", amount: 10, category: "Groceries" },
  //   { id: 2, description: "ipad", amount: 699, category: "Entertaintment" },
  //   { id: 3, description: "tomato", amount: 12, category: "Groceries" },
  //   { id: 4, description: "pants", amount: 10, category: "Entertaintment" },
  //   { id: 5, description: "E-service", amount: 99.99, category: "Utilities" },
  // ]);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "carrot", amount: 10, category: "Groceries" },
    { id: 2, description: "ipad", amount: 699, category: "Entertaintment" },
    { id: 3, description: "tomato", amount: 12, category: "Groceries" },
    { id: 4, description: "pants", amount: 10, category: "Entertaintment" },
    { id: 5, description: "E-service", amount: 99.99, category: "Utilities" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  let visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>

      {expenses.length > 0 ? (
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenses(expenses.filter((expense) => expense.id !== id))
          }
        />
      ) : null}
    </div>
  );
};

export default App;
