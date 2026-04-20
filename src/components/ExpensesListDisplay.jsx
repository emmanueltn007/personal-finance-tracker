function ExpensesListDisplay({ totalExpenses, expenseList, removeExpenseItem }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-[hsl(0,100%,100%)] font-semibold">
        Total Expenses: R{totalExpenses}
      </h2>
      <table className="w-full border border-collapse border-[hsl(0,100%,100%)] text-[hsl(0,100%,100%)]">
        <thead>
          <tr className="">
            <th className="border border-[hsl(0,100%,100%)]">Description</th>
            <th className="border border-[hsl(0,100%,100%)]">Amount</th>
            <th className="border border-[hsl(0,100%,100%)]">Remove</th>
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
                  <button
                    className="cursor-pointer"
                    onClick={() => removeExpenseItem(expense.id)}
                  >
                    <img
                      className="w-4 h-4"
                      src="/images/x-mark.svg"
                      alt="delete icon"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpensesListDisplay;
