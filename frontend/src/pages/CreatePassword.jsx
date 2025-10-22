import LogoItem from "../components/global/LogoItem";
import FormItem from "../components/global/FormItem";
import ButtonItem from "../components/global/ButtonItem";

function CreatePassword() {
  return (
    <div className="min-h-screen bg-[rgb(21,8,95)] flex flex-col items-center justify-center px-6 relative">
      <div className="w-full max-w-sm">
        <LogoItem title="LCKD" />
        
        <h2 className="text-2xl text-white font-semibold tracking-widest text-center mb-26">NEW SECURE CREDENTIALS</h2>

        <div className="flex flex-col gap-10 mb-19">
          <FormItem label="WWW" />
          <FormItem label="USERNAME" />
          <FormItem label="SECURE PASSWORD" type="password" />
        </div>

        <ButtonItem label="CREATE LCKD" />
      </div>
    </div>
  );
}

export default CreatePassword;
