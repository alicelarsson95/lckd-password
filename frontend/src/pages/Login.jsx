import logo from "../assets/image.png";
import LoginForm from "../components/auth/LoginForm.jsx";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C056D] space-y-30">
      <div className="text-center text-[#FFB703]">
        <img src={logo} alt="LCKD Logo" className="mx-auto mb-4 w-24 h-24" />
        <h1 className="text-white text-4xl font-bold tracking-[0.3em] mb-2">
          LCKD
        </h1>
        <p className="font-semibold tracking-wider">
          KEEPING YOUR PASSWORDS SAFE
        </p>
      </div>

      <div className="w-full max-w-xs space-y-8 tracking-wider text-[#FFB703]">
        <LoginForm label="USERNAME" type="text" />
        <LoginForm label="PASSWORD" type="password" />
        <button className="mt-4 w-full py-2 bg-white text-[#0C056D] font-bold rounded-lg">
          LET ME IN
        </button>
      </div>
    </div>
  );
}
