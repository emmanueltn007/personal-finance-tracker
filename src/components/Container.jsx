import { useState } from "react";
import IncomeCard from "./IncomeCard";

function Container () {
    const [incomeList, setIncomeList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    const [incomeInput, setIncomeInput] = useState("");
    const [expenseInput, setExpenseInput] = useState("");
    const [incomeDescritionInput, setIncomeDescriptionInput] = useState("");
    const [expenseDescritionInput, setExpenseDescriptionInput] = useState("");

    function addIncome () {
            if(!incomeInput || !incomeDescritionInput.trim()) return;
            setIncomeList([...incomeList, { description: incomeDescritionInput.trim(), amount: parseFloat(incomeInput) }]);

            setIncomeInput("");
            setIncomeDescriptionInput("")
    }

    function addExpense () {
        if(!expenseInput || !expenseDescritionInput.trim()) return;
            setExpenseList([...expenseList, { description: expenseDescritionInput.trim(), amount: parseFloat(expenseInput) }]);

            setExpenseInput("");
            setExpenseDescriptionInput("")
    }

    return (
        <div className="flex flex-col items-center gap-8 bg-[#3C3C4C] p-8 rounded-xl shadow-md shadow-gray-700">
            <h1 className="text-4xl font-semibold text-[#9DA1AA]">
                Personal Finance Tracker
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#9DA1AA] border-4 border-[hsl(0,100%,100%)] rounded-lg">
                    <h2 className="text-lg text-[#9DA1AA] font-semibold">
                        Income
                    </h2>
                    <ul>
                        {incomeList.map((income, index) => {
                            return (
                                <li key={index}>
                                    {income.description} - 
                                    ${income.amount}
                                </li>
                            );
                        })}
                    </ul>

                    <h2 className="text-lg text-[#9DA1AA] font-semibold">
                        Expenses
                    </h2>
                    <ul>
                        {expenseList.map((expense, index) => {
                            return (
                                <li key={index}>
                                    {expense.description} - 
                                    ${expense.amount}
                                </li>
                            );
                        })}
                    </ul>
                </div>


                <IncomeCard 
                    addIncome={addIncome}
                    incomeDescritionInput={incomeDescritionInput} 
                    setIncomeDescriptionInput={setIncomeDescriptionInput}
                    incomeInput={incomeInput}
                    setIncomeInput={setIncomeInput}
                    addExpense={addExpense} 
                    expenseDescritionInput={expenseDescritionInput}
                    setExpenseDescriptionInput={setExpenseDescriptionInput}
                    expenseInput={expenseInput}
                    setExpenseInput={setExpenseInput}
                />
            </div>
        </div>
    );
}

export default Container