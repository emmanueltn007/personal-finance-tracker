import IncomeCard from "./IcomeCard";

function Container () {
    return (
        <div className="flex flex-col items-center gap-8 bg-[#3C3C4C] p-8 rounded-xl shadow-md shadow-gray-700">
            <h1 className="text-4xl font-semibold text-[#9DA1AA]">
                Personal Finance Tracker
            </h1>
            <IncomeCard />
        </div>
    );
}

export default Container