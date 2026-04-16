import IncomeCard from "./IcomeCard";

function Container () {

    return (
        <div className="flex flex-col items-center gap-8 bg-[#3C3C4C] p-8 rounded-xl shadow-md shadow-gray-700">
            <h1 className="text-4xl font-semibold text-[#9DA1AA]">
                Personal Finance Tracker
            </h1>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-[hsl(0,100%,100%)]">
                    <ul>
                        <li>
                            Income list will appear here
                        </li>
                        <li>
                            Income list will appear here
                        </li>
                        <li>
                            Income list will appear here
                        </li>
                        <li>
                            Income list will appear here
                        </li>
                        <li>
                            Income list will appear here
                        </li>
                        <li>
                            Income list will appear here
                        </li>
                        {/*
                        {incomeList.map((income, index) => {
                            return (
                                <li key={index}></li>
                            );
                        })}
                        */}
                    </ul>
                </div>
                <IncomeCard />
            </div>
        </div>
    );
}

export default Container