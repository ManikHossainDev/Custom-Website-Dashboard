
import LogoImage from "../../../assets/auth/Logo.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import OTPInput from "react-otp-input";
import { useState } from "react";
import CustomButton from "../../../utils/CustomButton";

import { toast } from "sonner";
import { useForgotPasswordMutation, useVerifyEmailMutation, } from "../../../redux/features/auth/authApi";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const { email } = useParams();
  const navigate = useNavigate();
  const [forgotPassword] = useForgotPasswordMutation();
  const [verifyOtp, { isLoading }] = useVerifyEmailMutation();

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };
  const handleMatchOtp = async () => {

    try {
      const res = await verifyOtp({
        email,
        oneTimeCode: otp,
      });     
      console.log(res)
      if (res.error) {
        toast.error(res?.error?.data?.message);
      }
      if (res.data) {
        toast.success(res?.data?.message);
        navigate(`/auth/new-password/${email}`);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleResendPassword = async () => {
    try {
      const res = await forgotPassword({ email });
      if (res.error) {
        toast.error(res?.error?.data?.message);
        console.log(res.error);
      }
      if (res.data) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="bg-[#121212]">
      <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center  px-5 py-10 gap-8">
      
      <div className="mt-16 md:mt-[115px] bg-[#6666661A] p-5 rounded-md">
        <img
            src={LogoImage}
            className="w-[170px] h-[70px]  mb-3 "
            alt="Logo"
          />
        <div className="mb-5 space-y-5">
          <h1 className="font-semibold text-xl flex items-center gap-2 text-white">
            <Link to="/auth/forget-password">
              <IoIosArrowBack />
            </Link>
            Verify OTP
          </h1>
          <h1 className="text-white">Well send a verification code to your email. Check your inbox and enter the code here.</h1>
        </div>
        <OTPInput
          value={otp}
          onChange={handleOtpChange}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp-container"
          inputStyle={{
            width: "100%",
            maxWidth: "6.5rem",
            height: "3rem",
            margin: "0 0.5rem",
            fontSize: "2rem",
            fontWeight: "bold",
            border: "1px solid #1397D5",
            textAlign: "center",
            outline: "none",
          }}
        />
        <div onClick={handleMatchOtp} className="mt-5">
          <CustomButton loading={isLoading} border className="w-full text-white">
            Verify
          </CustomButton>
        </div>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-white">Didn’t receive code?</h1>
          <button onClick={handleResendPassword} className="text-[#1397D5]">
            Resend
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Otp;
