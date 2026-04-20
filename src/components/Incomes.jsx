import IncomeForm from "./IncomeForm";
import IncomeListDisplay from "./IncomeListDisplay";

function Incomes ({ incomeList, addIncome, incomeDescriptionInput, setIncomeDescriptionInput, incomeInput, setIncomeInput, removeIncomeItem, totalIncome }) {
    return (
        <div className="flex flex-col md:grid md:grid-cols-5 md:gap-4">
            <div className="col-span-3">
                <IncomeListDisplay 
                    totalIncome={totalIncome} incomeList={incomeList} removeIncomeItem={removeIncomeItem} 
                />
            </div>
           <div className="col-span-2">
                <IncomeForm 
                    addIncome={addIncome} incomeDescritionInput={incomeDescriptionInput} setIncomeDescriptionInput={setIncomeDescriptionInput} incomeInput={incomeInput} setIncomeInput={setIncomeInput} 
                />
           </div>
        </div>
    );
}

export default Incomes