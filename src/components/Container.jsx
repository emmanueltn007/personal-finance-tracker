import { Route, Routes } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import IncomeForm from "./IncomeForm";
import ExpensesForm from "./ExpensesForm";

function Container () {
    const [incomeList, setIncomeList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    const [incomeInput, setIncomeInput] = useState("");
    const [expenseInput, setExpenseInput] = useState("");
    const [incomeDescritionInput, setIncomeDescriptionInput] = useState("");
    const [expenseDescritionInput, setExpenseDescriptionInput] = useState("");

    const navigate = useNavigate();

    function addIncome () {
            if(!incomeInput || !incomeDescritionInput.trim()) return;
            setIncomeList([...incomeList, { description: incomeDescritionInput.trim(), amount: parseFloat(incomeInput), id: Date.now() }]);

            setIncomeInput("");
            setIncomeDescriptionInput("");
    }

    function addExpense () {
        if(!expenseInput || !expenseDescritionInput.trim()) return;
            setExpenseList([...expenseList, { description: expenseDescritionInput.trim(), amount: parseFloat(expenseInput), id: Date.now() }]);

            setExpenseInput("");
            setExpenseDescriptionInput("");
    }

    const totalIncome = incomeList.reduce((acc, curr) => {return acc + curr.amount}, 0);

    const totalExpenses = expenseList.reduce((acc, curr) => {return acc + curr.amount}, 0);

    function removeIncomeItem (id) {
        setIncomeList(incomeList.filter((incomeItem) => incomeItem.id !== id));
    }

    function removeExpenseItem (id) {
        setExpenseList(expenseList.filter((expenseItem) => expenseItem.id !== id));
    }

    return (
        <div className="flex flex-col items-center gap-8 bg-[#3C3C4C] p-8 rounded-xl shadow-md shadow-gray-700 outline-4">
            <h1 className="text-4xl font-semibold text-[#9DA1AA]">
                Personal Finance Tracker
            </h1>
            <div className="flex gap-8 text-[hsl(0,100%,100%)] font-bold">
                <button 
                    onClick={() => navigate("/")}
                    className="cursor-pointer hover:scale-105 transition-all duration-300"
                >
                    Incomes
                </button>
                <button 
                    onClick={() => navigate("/expenses")}
                    className="cursor-pointer hover:scale-105 transition-all duration-300"
                >
                    Expenses
                </button>
                <button className="cursor-pointer hover:scale-105 transition-all duration-300">
                    View Statement
                </button>
            </div>
            <div>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Incomes addIncome={addIncome} removeIncomeItem={removeIncomeItem} totalIncome={totalIncome} incomeList={incomeList} addIncome={addIncome} incomeDescritionInput={incomeDescritionInput} setIncomeDescriptionInput={setIncomeDescriptionInput} incomeInput={incomeInput} setIncomeInput={setIncomeInput} />} 
                    />
                    <Route 
                        path="/expenses" 
                        element={<Expenses addExpense={addExpense} removeExpenseItem={removeExpenseItem} totalExpenses={totalExpenses} totalExpenses={totalExpenses} expenseList={expenseList} removeExpenseItem={removeExpenseItem} setExpenseDescriptionInput={setExpenseDescriptionInput} expenseDescritionInput={expenseDescritionInput} setExpenseInput={setExpenseInput} />} 
                    />
                    <Route path="/statement" />
                </Routes>
            </div>
        </div>
    );
}

export default Container