import IncomeForm from "./IncomeForm";
import IncomeListDisplay from "./IncomeListDisplay";

function Incomes () {
    return (
        <div className="flex flex-col md:grid md:grid-cols-5 md:gap-4">
            <div className="col-span-3">
                <IncomeListDisplay />
            </div>
           <div className="col-span-2">
                <IncomeForm />
           </div>
        </div>
    );
}

export default Incomes