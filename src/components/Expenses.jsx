import ExpensesForm from "./ExpensesForm";
import ExpensesListDisplay from "./ExpensesListDisplay";

function Expenses () {
    return (
        <div className="w-full flex-col md:grid md:grid-cols-5 md:gap-4">
            <div className="col-span-3">
                <ExpensesListDisplay />
            </div>
            <div className="col-span-2">
               <ExpensesForm /> 
            </div>
            
        </div>
    );
}

export default Expenses