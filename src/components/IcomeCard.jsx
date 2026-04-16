import { useState } from "react";

function IncomeCard({ income, setIncome }) {
  const [incomeInput, setIncomeInput] = useState([]);
  const [incomeDescritionInput, setIncomeDescriptionInput] = useState("")

  function addIncome () {
        setIncome([...incomeInput, { description: incomeDescritionInput.trim(), amount: incomeInput }]);

        setIncome("");
        setIncomeDescriptionInput("")
  }

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
                onChange={(e) => setIncome(e.target.value)}
                value={income}
            />
        </div>
      </div>
      <button className="border-2 border-transparent hover:border-[hsl(0,100%,100%)] hover:bg-transparent transition-all duration-300 p-2 bg-[#B7B6AC] rounded-md font-semibold tracking-[4px] cursor-pointer text-[hsl(0,100%,100%)]">
        ADD
      </button>
      <button className="border-2 border-transparent hover:border-[hsl(0,100%,100%)] hover:bg-transparent transition-all duration-300 p-2 bg-[#029456] rounded-md font-semibold tracking-[4px] cursor-pointer text-[hsl(0,100%,100%)]">
        NEXT
      </button>
    </div>
  );
}

export default IncomeCard;
