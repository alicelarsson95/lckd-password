import logo from "../../assets/lck-logo.png";

function LogoItem({ title }) {
  return (
    <div className="flex flex-col items-center gap-2 mb-6">
      <img src={logo} alt="LCKD logo" className="w-8 h-8" />
      <h1 className="text-white font-semibold tracking-wide text-lg">{title}</h1>
    </div>
  );
}

export default LogoItem;
