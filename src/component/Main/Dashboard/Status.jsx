import { FaDatabase } from "react-icons/fa";
import { PiCurrencyCircleDollar, PiUsers, PiUsersThreeFill } from "react-icons/pi";
// import { useGetDashboardStatusQuery } from "../../../redux/features/dashboard/dashboardApi";
const Status = () => {
  // const {} = useGetDashboardStatusQuery();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#FF8B0F]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white border-white border-4 ">
          <PiUsersThreeFill className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
          120
          </h1>
          <h1>Total Customer</h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#FF8B0F]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white border-white border-4 ">
          <PiCurrencyCircleDollar className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
          $2.5k
          </h1>
          <h1>Total Income</h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#FF8B0F]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white border-white border-4 ">
        <FaDatabase className="size-8" /> 
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
            1200
          </h1>
          <h1>Total Items</h1>
        </div>
      </div>
      <div className="flex justify-between items-center p-5 rounded-lg bg-[#FF8B0F]">
        <div className="size-20 p-3 flex justify-center items-center rounded-full bg-primary text-white border-white border-4 ">
        <PiUsers className="size-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold text-[#222222]">
            1200
          </h1>
          <h1>Total Rental</h1>
        </div>
      </div>
    </div>
  );
};

export default Status;
