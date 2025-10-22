function FormItem({ label, type = "text" }) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative">
   
        <label className="absolute -top-5 bg-[#fbbf24] text-[#0b0742] text-sm font-semibold px-4 rounded-t">
          {label}
        </label>
        <input
          type={type}
          className="w-full rounded-b-md text-s rounded-tr-md py-4 px-2 border border-[#fbbf24]"
        />
      </div>
    </div>
  );
}

export default FormItem;
