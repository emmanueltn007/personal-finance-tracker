import ExpensesForm from "./ExpensesForm";
import ExpensesListDisplay from "./ExpensesListDisplay";

function Expenses ({ totalExpenses, expenseList, removeExpenseItem, addExpense, expenseDescriptionInput, setExpenseDescriptionInput, expenseInput, setExpenseInput }) {
    return (
        <div className="w-full flex-col md:grid md:grid-cols-5 md:gap-4">
            <div className="col-span-3">
                <ExpensesListDisplay 
                    totalExpenses={totalExpenses} expenseList={expenseList} removeExpenseItem={removeExpenseItem} 
                />
            </div>
            <div className="col-span-2">
               <ExpensesForm 
                    addExpense={addExpense} expenseDescriptionInput={expenseDescriptionInput} setExpenseDescriptionInput={setExpenseDescriptionInput} expenseInput={expenseInput} setExpenseInput={setExpenseInput} 
                /> 
            </div>
            
        </div>
    );
}

export default Expenses