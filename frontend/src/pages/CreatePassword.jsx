import LogoItem from "../components/global/LogoItem";
import FormItem from "../components/global/FormItem";
import ButtonItem from "../components/global/ButtonItem";

function CreatePassword() {
  return (
    <div className="min-h-screen bg-[rgb(21,8,95)] flex flex-col items-center justify-center px-10">
      <div className="w-full max-w-sm">
        <LogoItem title="LCKD" />

        <div className="flex flex-col gap-4 mb-6">
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
