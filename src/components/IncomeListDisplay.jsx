function IncomeListDisplay({ totalIncome, incomeList, removeIncomeItem }) {
  return (
    <div>
      <h2 className="text-lg text-[hsl(0,100%,100%)] font-semibold">Income</h2>
      <h2 className="text-[hsl(0,100%,100%)] font-semibold">
        Total Income: R{totalIncome}
      </h2>

      <table className="w-full border border-collapse border-[hsl(0,100%,100%)]">
        <thead>
          <tr className="">
            <th className="border border-[hsl(0,100%,100%)]">Description</th>
            <th className="border border-[hsl(0,100%,100%)]">Amount</th>
            <th className="border border-[hsl(0,100%,100%)]">Remove</th>
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
                  <button
                    className="cursor-pointer"
                    onClick={() => removeIncomeItem(income.id)}
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

export default IncomeListDisplay;
