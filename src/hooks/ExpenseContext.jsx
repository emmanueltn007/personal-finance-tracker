import { createContext, useContext, useState } from "react";

export const ExpenseContext = createContext(null);

export function ExpenseProvider ({ children }) {
    const [expenseInput, setExpenseInput] = useState("");
    const [expenseList, setExpenseList] = useState([]);
    const [expenseDescriptionInput, setExpenseDescriptionInput] = useState("");

    function addExpense () {
        if(!expenseInput || !expenseDescriptionInput.trim()) return;
            setExpenseList([...expenseList, { description: expenseDescriptionInput.trim(), amount: parseFloat(expenseInput), id: Date.now() }]);

            setExpenseInput("");
            setExpenseDescriptionInput("");
    }

    const totalExpenses = expenseList.reduce((acc, curr) => {return acc + curr.amount}, 0);

    function removeExpenseItem (id) {
        setExpenseList(expenseList.filter((expenseItem) => expenseItem.id !== id));
    }

    return (
        <ExpenseContext.Provider
            value={{
                addExpense,
                removeExpenseItem,
                expenseInput,
                setExpenseInput,
                expenseList,
                setExpenseList,
                expenseDescriptionInput,
                setExpenseDescriptionInput,
                totalExpenses
            }}
        >
            {children}
        </ExpenseContext.Provider>
    );
}

export function useExpense () {
    const context = useContext(ExpenseContext);
    if (!context) {
        throw new Error("useExpense must be used inside a <ExpenseProvider>")
    }
    return context;
}