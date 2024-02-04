import { addOns } from "../../utils/constants";
import { useFormStore } from "../../utils/store";

export default function StepThree() {
  const { billingCycle, setAddOns, addOns: selectedAddOns } = useFormStore();

  const isAddOnSelected = (description: string) => {
    return selectedAddOns.includes(description);
  };

  return (
    <article className="flex flex-col justify-evenly gap-y-8">
      <h1 className="text-[#022959] text-4xl font-black tracking-wide">Pick add-ons</h1>
      <p className="text-[#9699AA] text-lg">Add-ons help enhance your gaming experience</p>

      <div className="flex flex-col items-start justify-evenly gap-4 cursor-pointer">
        {addOns.map((addOn) => (
          <div
            key={addOn.id}
            className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-sm w-full border hover:border-[#483EFF] transform duration-200 ${
              selectedAddOns.includes(addOn.title) ? "border-[#483EFF]" : "border-[#D6D9E6]"
            }`}
            onClick={() => setAddOns(addOn.title)}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isAddOnSelected(addOn.title)}
                readOnly
                className="w-5 h-5 text-[#483EFF] border-[#D6D9E6] rounded focus:ring-blue-500 cursor-pointer"
              />
              <div className="ml-3">
                <p className="text-base font-medium text-[#022959]">{addOn.title}</p>
                <p className="text-sm text-gray-500 mt-1">{addOn.description}</p>
              </div>
            </div>
            <div>
              <p className="text-blue-600 font-light text-base">
                {billingCycle === "monthly" ? `${addOn.price}` : `${addOn.yearlyPrice}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
