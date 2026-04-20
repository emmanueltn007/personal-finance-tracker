import { Route, Routes } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import IncomeForm from "./IncomeForm";
import ExpensesForm from "./ExpensesForm";
import Statement from "./Statement";

function Container () {
    const [incomeList, setIncomeList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    const [incomeInput, setIncomeInput] = useState("");
    const [expenseInput, setExpenseInput] = useState("");
    const [incomeDescriptionInput, setIncomeDescriptionInput] = useState("");
    const [expenseDescriptionInput, setExpenseDescriptionInput] = useState("");

    const categories = [
        {
            title: "Incomes",
            path: "/"
        },{
            title: "Expenses",
            path: "/expenses"
        },{
            title: "Statement",
            path: "/statement"
        }
    ];

    const navigate = useNavigate();

    function addIncome () {
            if(!incomeInput || !incomeDescriptionInput.trim()) return;
            setIncomeList([...incomeList, { description: incomeDescriptionInput.trim(), amount: parseFloat(incomeInput), id: Date.now() }]);

            setIncomeInput("");
            setIncomeDescriptionInput("");
    }

    function addExpense () {
        if(!expenseInput || !expenseDescriptionInput.trim()) return;
            setExpenseList([...expenseList, { description: expenseDescriptionInput.trim(), amount: parseFloat(expenseInput), id: Date.now() }]);

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
        <div className="h-screen w-full md:h-[80%] md:w-[80%] flex flex-col items-center gap-8 bg-[#3C3C4C] p-8 rounded-xl shadow-md shadow-gray-700 outline-4">
            <h1 className="text-center text-2xl font-semibold text-[#9DA1AA] tracking-[0.75rem]">
                PERSONAL FINANCE TRACKER
            </h1>
            <div className="flex gap-8 text-[hsl(0,100%,100%)] font-bold">
                {categories.map((category) => {
                    return (
                        <button 
                            key={category.title}
                            onClick={() => navigate(category.path)}
                            className="cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(0,100%,100%)] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                        >
                            {category.title}
                        </button>
                    );
                })}
            </div>
            <div className="w-full">
                <Routes>
                    <Route 
                        path="/" 
                        element={<Incomes addIncome={addIncome} removeIncomeItem={removeIncomeItem} totalIncome={totalIncome} incomeList={incomeList} incomeDescritionInput={incomeDescriptionInput} setIncomeDescriptionInput={setIncomeDescriptionInput} incomeInput={incomeInput} setIncomeInput={setIncomeInput} />} 
                    />
                    <Route 
                        path="/expenses" 
                        element={<Expenses addExpense={addExpense} totalExpenses={totalExpenses} totalExpenses={totalExpenses} expenseList={expenseList} removeExpenseItem={removeExpenseItem} setExpenseDescriptionInput={setExpenseDescriptionInput} expenseDescritionInput={expenseDescriptionInput} setExpenseInput={setExpenseInput} expenseInput={expenseInput} />} 
                    />
                    <Route path="/statement" element={<Statement />} />
                </Routes>
            </div>
        </div>
    );
}

export default Container