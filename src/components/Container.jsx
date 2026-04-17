import { useState } from "react";
import IncomeForm from "./IncomeForm";
import ExpensesForm from "./ExpensesForm";

function Container () {
    const [incomeList, setIncomeList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);
    const [incomeInput, setIncomeInput] = useState("");
    const [expenseInput, setExpenseInput] = useState("");
    const [incomeDescritionInput, setIncomeDescriptionInput] = useState("");
    const [expenseDescritionInput, setExpenseDescriptionInput] = useState("");

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
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#9DA1AA] border-4 border-[hsl(0,100%,100%)] rounded-lg p-2">
                    <h2 className="text-lg text-[hsl(0,100%,100%)] font-semibold">
                        Income
                    </h2>
                    <h2 className="text-[hsl(0,100%,100%)] font-semibold">
                        Total Income: R{totalIncome}
                    </h2>

                    <table className="w-full border border-collapse border-[hsl(0,100%,100%)]">
                        <thead>
                            <tr className="">
                                <th className="border border-[hsl(0,100%,100%)]">
                                    Description
                                </th>
                                <th className="border border-[hsl(0,100%,100%)]">
                                    Amount
                                </th>
                                <th className="border border-[hsl(0,100%,100%)]">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {incomeList.map((income, index) => {
                                return (
                                    <tr className="" key={`${index}-${income.id}`}> 
                                        <td className="border border-[hsl(0,100%,100%)]">
                                            {income.description} 
                                        </td>
                                        <td className="border border-[hsl(0,100%,100%)]">
                                            R{income.amount}
                                        </td>
                                        <td className=" border border-[hsl(0,100%,100%)]">
                                            <button className="cursor-pointer" onClick={() => removeIncomeItem(income.id)}>
                                                 <img className="w-4 h-4" src="/images/x-mark.svg" alt="delete icon" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                                
                            })}
                        </tbody>
                    </table>

                    <h2 className="text-lg text-[hsl(0,100%,100%)] font-semibold">
                        Expenses
                    </h2>
                    <h2 className="text-[hsl(0,100%,100%)] font-semibold">
                        Total Expenses: R{totalExpenses}
                    </h2>
                    <table className="w-full border border-collapse border-[hsl(0,100%,100%)]">
                        <thead>
                            <tr className="">
                                <th className="border border-[hsl(0,100%,100%)]">
                                    Description
                                </th>
                                <th className="border border-[hsl(0,100%,100%)]">
                                    Amount
                                </th>
                                <th className="border border-[hsl(0,100%,100%)]">
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {expenseList.map((expense, index) => {
                                return (
                                    <tr key={`${index}-${expense.id}`}> 
                                        <td className="border border-[hsl(0,100%,100%)]">
                                            {expense.description} 
                                        </td>
                                        <td className="border border-[hsl(0,100%,100%)]">
                                            R{expense.amount}
                                        </td>
                                        <td className="border border-[hsl(0,100%,100%)]">
                                            <button className="cursor-pointer" onClick={() => removeExpenseItem(expense.id)}>
                                                 <img className="w-4 h-4" src="/images/x-mark.svg" alt="delete icon" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                                
                            })}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col gap-4">
                    <IncomeForm
                        addIncome={addIncome}
                        incomeDescritionInput={incomeDescritionInput} 
                        setIncomeDescriptionInput={setIncomeDescriptionInput}
                        incomeInput={incomeInput}
                        setIncomeInput={setIncomeInput}
                    />
                    <ExpensesForm  
                        addExpense={addExpense} 
                        expenseDescritionInput={expenseDescritionInput} 
                        setExpenseDescriptionInput={setExpenseDescriptionInput} 
                        expenseInput={expenseInput} 
                        setExpenseInput={setExpenseInput} 
                    /> 
                </div>
            </div>
        </div>
    );
}

export default Container