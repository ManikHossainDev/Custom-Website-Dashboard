
import LogoImage from "../../../assets/auth/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Checkbox } from "antd";
import { HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import CustomButton from "../../../utils/CustomButton";
import CustomInput from "../../../utils/CustomInput";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { loggedUser } from "../../../redux/features/auth/authSlice";


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (values) => {
    const { email, password } = values;
    try {
      const res = await login({ email, password });
      if (res.error) {
        // Show error message if login fails
        toast.error(res.error.data.message);
      } else if (res.data) {
        const user = res?.data?.data?.attributes.user;
        const token =  res?.data?.data?.attributes?.tokens?.access?.token;
        // console.log(token)
        // console.log(res.data)
        dispatch(
          loggedUser({user,token})
        );
        toast.success(res.data.message);
        navigate("/");  // Navigate to the root page after successful login
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d0c7f9] via-[#f5f4fd] to-[#d0c7f9]">
      <div className="w-full md:max-w-xl mx-auto h-full md:h-screen  place-content-center px-5 ">
      <div className="mt-5  px-8  p-5 rounded-md border-2 border-[#5454AA]">
        <div className="mb-3">
          <img
            src={LogoImage}
            className="w-[100px] h-[70px]  mx-auto mb-3"
            alt="Logo"
          />
          <h1 className="font-semibold text-xl ">Welcome Back</h1>
          <p >
          Please Enter Your Details Below to Continue
          </p>
        </div>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4"
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not a valid email!" },
            ]}
          >
            <CustomInput
              type="email"
              icon={HiOutlineMail}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <CustomInput
              type="password"
              icon={HiOutlineLockClosed}
              placeholder="Password"
              isPassword
            />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="">Remember me</Checkbox>
            </Form.Item>
            <Link to="/auth/forget-password" className="text-[#5454AA]">
              Forgot password?
            </Link>
          </div>

          <Form.Item>
            <CustomButton loading={isLoading} className="w-full" border={true}>
              Sign In
            </CustomButton>
          </Form.Item>
        </Form>
      </div>
    </div>
    </div>
  );
};

export default SignIn;
