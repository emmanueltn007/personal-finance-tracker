function IncomeCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col">
            <label  className="text-[hsl(0,100%,100%)]" htmlFor="icome-description">
                Income Description
            </label>
            <input className="border border-[hsl(0,100%,100%)] rounded-md py-1" type="text" id="icome-description" />
        </div>
        <div className="flex flex-col">
            <label className="text-[hsl(0,100%,100%)] rounded-md" htmlFor="amount">
                Amount
            </label>
            <input className="border border-[hsl(0,100%,100%)] rounded-md py-1" type="number" id="amount" />
        </div>
      </div>
      <button className="p-4 bg-[#B7B6AC] rounded-md font-semibold tracking-[4px] cursor-pointer">
        ADD
      </button>
      <button className="p-4 bg-[#029456] rounded-md font-semibold tracking-[4px] cursor-pointer">
        NEXT
      </button>
    </div>
  );
}

export default IncomeCard;
