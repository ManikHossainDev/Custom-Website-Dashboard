import InComeRatio from "./InComeRatio";
import RecentTransactions from "./RecentTransactions";
import Status from "./Status";
import { LiaHandSpockSolid } from "react-icons/lia";

const Dashboard = () => {
 return (
 <div>
     <h1 className="text-3xl font-semibold flex items-center space-x-2">Welcome back. Bashar islam <LiaHandSpockSolid />
     </h1>
     <Status/>
      <div className="flex justify-between space-x-5 w-full py-3">
        <div className="w-full md:w-[67%]  border-2 rounded-md border-[#8A8AC5] p-3">
        <InComeRatio/>
        </div>
        <div className="w-full md:w-[33%] border-2 rounded-md border-[#8A8AC5] p-3">

        </div>
      </div>
     <RecentTransactions />
 </div>
 );
};

export default Dashboard;