import { useIncome } from "../hooks/IncomeContext";
import { useExpense } from "../hooks/ExpenseContext";

function Statement() {
  const { totalIncome, incomeList } = useIncome();
  const { totalExpenses, expenseList } = useExpense();

  const profitLoss = totalIncome - totalExpenses;

  const finalreview =
    totalIncome > totalExpenses
      ? "After all expenses you still have a positive balance, keep it up!!🎉"
      : "Oops you're spending more than you receive, you need to watch your spending 👀";

  return (
    <div className="text-[hsl(0,100%,100%)]">
      <h2 className="text-[hsl(0,100%,100%)] font-semibold">Money In</h2>

      <table className="w-full border border-collapse border-[hsl(0,100%,100%)] text-[hsl(0,100%,100%)]">
        <thead>
          <tr className="">
            <th className="border border-[hsl(0,100%,100%)]">Description</th>
            <th className="border border-[hsl(0,100%,100%)]">Amount</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 className="text-[hsl(0,100%,100%)] font-semibold">Money Out</h2>
      <table className="w-full border border-collapse border-[hsl(0,100%,100%)] text-[hsl(0,100%,100%)]">
        <thead>
          <tr className="">
            <th className="border border-[hsl(0,100%,100%)]">Description</th>
            <th className="border border-[hsl(0,100%,100%)]">Amount</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
      <h3>Review:</h3>
      <p>
        After deducting all expenses your remaining amount is: R{profitLoss}.00
      </p>
      <br />

      <p>{finalreview}</p>
    </div>
  );
}

export default Statement;
