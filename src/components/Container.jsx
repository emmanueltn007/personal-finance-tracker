import { Route, Routes } from "react-router";
import { useNavigate } from "react-router";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import Statement from "./Statement";

const categories = [
  {
    title: "Incomes",
    path: "/",
  },
  {
    title: "Expenses",
    path: "/expenses",
  },
  {
    title: "Statement",
    path: "/statement",
  },
];

function Container() {
  const navigate = useNavigate();

  return (
    <div className="h-[90%] md:h-[80%] w-full md:w-[80%] flex flex-col items-center gap-8 bg-[#3C3C4C] p-8 rounded-xl shadow-md shadow-gray-700 outline-4 overflow-y-auto">
      <h1 className="text-center text-2xl font-semibold text-[#9DA1AA] tracking-[0.75rem]">
        PERSONAL FINANCE TRACKER
      </h1>
      <div className="flex gap-8 text-[hsl(0,100%,100%)] font-bold">
        {categories.map((category) => {
          return (
            <button
              key={category.title}
              onClick={() => navigate(category.path)}
              className="cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(0,100%,100%)] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
            >
              {category.title}
            </button>
          );
        })}
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Incomes />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/statement" element={<Statement />} />
        </Routes>
      </div>
    </div>
  );
}

export default Container;
