import { FaFileAlt } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Status = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 py-5 w-full">
      {/* Card 1 */}
      <div className="w-full bg-gradient-to-r from-[#00007F4C] to-[#E6E6F27A] p-4 rounded-lg shadow-md space-x-4 border-2 border-[#333399] mb-4 md:mb-0">
        <div className="flex items-center space-x-5">
          <div className="flex justify-center items-center bg-[#333399] w-[52px] h-[52px] p-3 rounded-md text-white">
            <FaFileAlt size={30} />
          </div>
          <h3 className="text-3xl font-semibold">Total User</h3>
        </div>
        <div className="flex items-center space-x-5 mt-5">
          <p className="text-5xl font-bold">369</p>
          <p className="text-xl text-gray-600 flex items-center">
            <span className="ml-2 mr-2 text-green-500 bg-[#2dbe7133] p-2 rounded-md flex items-center">
              <FaArrowTrendUp className="mr-2" /> 20%
            </span>
            Last month total 1050
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full bg-gradient-to-r from-[#00007F4C] to-[#E6E6F27A] p-4 rounded-lg shadow-md border-2 border-[#333399] mb-4 md:mb-0">
        <div className="flex items-center space-x-5">
          <div className="flex justify-center items-center bg-[#333399] w-[52px] h-[52px] p-3 rounded-md text-white">
            <FaFileAlt size={30} />
          </div>
          <h3 className="text-3xl font-semibold">Total User</h3>
        </div>
        <div className="flex items-center space-x-5 mt-5">
          <p className="text-5xl font-bold">369</p>
          <p className="text-xl text-gray-600">Last month total 1050</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full bg-gradient-to-r from-[#00007F4C] to-[#E6E6F27A] p-4 rounded-lg shadow-md border-2 border-[#333399]">
        <div className="flex items-center space-x-5">
          <div className="flex justify-center items-center bg-[#333399] w-[52px] h-[52px] p-3 rounded-md text-white">
            <FaFileAlt size={30} />
          </div>
          <h3 className="text-3xl font-semibold">Total User</h3>
        </div>
        <div className="flex items-center space-x-5 mt-5">
          <p className="text-5xl font-bold">369</p>
          <p className="text-xl text-gray-600">Last month total 1050</p>
        </div>
      </div>
    </div>
  );
};

export default Status;
