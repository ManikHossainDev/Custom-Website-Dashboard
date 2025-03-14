
import LogoImage from "../../../assets/auth/Logo.png";
import {  useNavigate, useParams } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d0c7f9] via-[#f5f4fd] to-[#d0c7f9]">
      <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center  px-5 py-10 gap-8">
      
      <div className="mt-5  px-8  p-5 rounded-md border-2 border-[#5454AA]">
        <img
            src={LogoImage}
            className="w-[100px] h-[70px]  mb-3  mx-auto"
            alt="Logo"
          />
        <div className="mb-5 space-y-5">
          <h1 className="font-semibold text-xl flex items-center gap-2 ">
            OTP Verification
          </h1>
          <h1 className="">Check your email to see the verification code</h1>
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
          <h1 className="">Didn’t receive code?</h1>
          <button onClick={handleResendPassword} className="text-[#5454AA]">
            Resend
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Otp;
