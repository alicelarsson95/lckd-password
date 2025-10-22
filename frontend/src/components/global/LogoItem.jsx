import logo from "../../assets/lck-logo.png";

function LogoItem({ title }) {
  return (
    <div className="flex items-center gap-5 absolute top-6 left-6">
      <img src={logo} alt="LCKD logo" className="w-8 h-8" />
      <h1 className="text-white font-semibold tracking-wide text-2xl">{title}</h1>
    </div>
  );
}

export default LogoItem;
