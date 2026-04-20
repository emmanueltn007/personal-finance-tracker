import IncomeForm from "./IncomeForm";
import IncomeListDisplay from "./IncomeListDisplay";

function Incomes ({ incomeList, addIncome, incomeDescritionInput, setIncomeDescriptionInput, incomeInput, setIncomeInput, removeIncomeItem, totalIncome }) {
    return (
        <div>
            <IncomeListDisplay totalIncome={totalIncome} incomeList={incomeList} removeIncomeItem={removeIncomeItem} />
            <IncomeForm addIncome={addIncome} incomeDescritionInput={incomeDescritionInput} setIncomeDescriptionInput={setIncomeDescriptionInput} incomeInput={incomeInput} setIncomeInput={setIncomeInput} />
        </div>
    );
}

export default Incomes