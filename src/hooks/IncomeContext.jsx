import { createContext, useContext, useState } from "react";

export const IncomeContext = createContext(null);

export function IncomeProvider ({ children }) {
    const [incomeList, setIncomeList] = useState([]);
    const [incomeDescriptionInput, setIncomeDescriptionInput] = useState("");
    const [incomeInput, setIncomeInput] = useState("");

    function addIncome () {
            if(!incomeInput || !incomeDescriptionInput.trim()) return;
            setIncomeList([...incomeList, { description: incomeDescriptionInput.trim(), amount: parseFloat(incomeInput), id: Date.now() }]);

            setIncomeInput("");
            setIncomeDescriptionInput("");
    }

    const totalIncome = incomeList.reduce((acc, curr) => {return acc + curr.amount}, 0);

    function removeIncomeItem (id) {
        setIncomeList(incomeList.filter((incomeItem) => incomeItem.id !== id));
    }

    return (
        <IncomeContext.Provider
            value={{ 
                incomeList,
                setIncomeList,
                incomeDescriptionInput,
                setIncomeDescriptionInput,
                incomeInput,
                setIncomeInput,
                addIncome,
                removeIncomeItem,
                totalIncome
             }}
         >
            {children}
        </IncomeContext.Provider>
    );
}

export function useIncome () {
    const context = useContext(IncomeContext)
    if(!context) {
        throw new Error("useIncome must be used inside a <IncomeProvider>");
    }
    return context;
}