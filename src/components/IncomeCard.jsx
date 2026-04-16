function IncomeCard({ addIncome,incomeDescritionInput, setIncomeDescriptionInput, incomeInput, setIncomeInput, addExpense, expenseDescritionInput, setExpenseDescriptionInput, expenseInput, setExpenseInput }) {


  return (
    <div className="flex flex-col gap-4">

      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
            <label  className="text-[hsl(0,100%,100%)]" htmlFor="icome-description">
                Income Description
            </label>
            <input 
                className="border border-[hsl(0,100%,100%)] rounded-md py-1 placeholder:text-sm placeholder:text-[#9DA1AA] placeholder:italic pl-2 caret-[hsl(0,100%,100%)] outline-none" 
                type="text" 
                id="icome-description" 
                placeholder="E.g Allowance"
                onChange={(e) => setIncomeDescriptionInput(e.target.value)}
                value={incomeDescritionInput}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-[hsl(0,100%,100%)] rounded-md" htmlFor="amount">
                Amount
            </label>
            <input 
                className="border border-[hsl(0,100%,100%)] rounded-md py-1" 
                type="number" 
                id="amount" 
                onChange={(e) => setIncomeInput(e.target.value)}
                value={incomeInput}
            />
        </div>
      </div>
      <button 
        onClick={addIncome}
        className="border-2 border-transparent hover:border-[hsl(0,100%,100%)] hover:bg-transparent transition-all duration-300 p-2 bg-[#5CB855] rounded-md font-semibold tracking-[4px] cursor-pointer text-[hsl(0,100%,100%)]"
      >
        ADD
      </button>


      <div className="flex gap-4">
        <div className="flex flex-col gap-2">
            <label  className="text-[hsl(0,100%,100%)]" htmlFor="icome-description">
                Expense Description
            </label>
            <input 
                className="border border-[hsl(0,100%,100%)] rounded-md py-1 placeholder:text-sm placeholder:text-[#9DA1AA] placeholder:italic pl-2 caret-[hsl(0,100%,100%)] outline-none" 
                type="text" 
                id="icome-description" 
                placeholder="E.g Petrol"
                onChange={(e) => setExpenseDescriptionInput(e.target.value)}
                value={expenseDescritionInput}
            />
        </div>
        <div className="flex flex-col gap-2">
            <label className="text-[hsl(0,100%,100%)] rounded-md" htmlFor="amount">
                Amount
            </label>
            <input 
                className="border border-[hsl(0,100%,100%)] rounded-md py-1" 
                type="number" 
                id="amount" 
                onChange={(e) => setExpenseInput(e.target.value)}
                value={expenseInput}
            />
        </div>
      </div>
      <button 
        onClick={addExpense}
        className="border-2 border-transparent hover:border-[hsl(0,100%,100%)] hover:bg-transparent transition-all duration-300 p-2 bg-[#FE3B15] rounded-md font-semibold tracking-[4px] cursor-pointer text-[hsl(0,100%,100%)]">
        ADD
      </button>
    </div>
  );
}

export default IncomeCard;
