import ExpensesForm from "./ExpensesForm";
import ExpensesListDisplay from "./ExpensesListDisplay";

function Expenses ({ totalExpenses, expenseList, removeExpenseItem, addExpense, expenseDescritionInput, setExpenseDescriptionInput, expenseInput, setExpenseInput }) {
    return (
        <div>
            <ExpensesListDisplay totalExpenses={totalExpenses} expenseList={expenseList} removeExpenseItem={removeExpenseItem} />
            <ExpensesForm addExpense={addExpense} expenseDescritionInput={expenseDescritionInput} setExpenseDescriptionInput={setExpenseDescriptionInput} expenseInput={expenseInput} setExpenseInput={setExpenseInput} />
        </div>
    );
}

export default Expenses