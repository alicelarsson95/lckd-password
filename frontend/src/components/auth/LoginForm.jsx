function FormItem({ label, type = "text" }) {
  return (
    <div className="flex flex-col w-full">
      <label className="inline-block bg-[#FFB703] text-[#0C056D] text-sm font-medium mb-1 px-1 rounded">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded-lg py-2 px-3 bg-[#1a1442] text-white focus:outline-none focus:ring-2 focus:ring-white"
      />
    </div>
  );
}

export default FormItem;
