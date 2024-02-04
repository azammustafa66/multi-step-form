import { plans, addOns } from "../../utils/constants";
import { useFormStore } from "../../utils/store";

export default function Summary() {
  const { selectedPlan, billingCycle, addOns: selectedAddOns, setCurrentStep } = useFormStore();

  const parsePrice = (priceString: string) => {
    return parseInt(priceString.replace(/[^0-9]/g, ""), 10);
  };

  const totalPrice = () => {
    const selectedPlanPrice = plans.find((plan) => plan.name === selectedPlan);
    const planPrice = selectedPlanPrice
      ? parsePrice(
          billingCycle === "monthly" ? selectedPlanPrice.price : selectedPlanPrice.yearlyPrice
        )
      : 0;

    const addOnsPrice = selectedAddOns
      .map((addOn) => {
        const addOnDetail = addOns.find((detail) => detail.title === addOn);
        return addOnDetail
          ? parsePrice(billingCycle === "monthly" ? addOnDetail.price : addOnDetail.yearlyPrice)
          : 0;
      })
      .reduce((acc, price) => acc + price, 0);

    return planPrice + addOnsPrice;
  };

  return (
    <article className="flex flex-col justify-evenly gap-y-8">
      <h1 className="text-[#022959] text-4xl font-black tracking-wide">Finishing up</h1>
      <p className="text-[#9699AA] text-lg">Double-check everything looks OK before confirming.</p>

      <div className="bg-[#F8F9FF] p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="text-[#022959] text-xl font-semibold capitalize">{`${selectedPlan} (${billingCycle})`}</h2>
          </div>
          <h3>
            {
              plans.find((plan) => plan.name === selectedPlan)?.[
                billingCycle === "monthly" ? "price" : "yearlyPrice"
              ]
            }
          </h3>
        </div>
        <div className="mb-5 underline text-[#9699AA] cursor-pointer" onClick={() => setCurrentStep(2)}>Change</div>
        <hr className="mb-5" />
        {selectedAddOns.map((addOn, index) => (
          <div key={index} className="flex justify-between items-center mb-3">
            <p className="text-[#9699AA] text-sm font-normal">{addOn}</p>
            <p className="text-[#022959] font-semibold">
              {
                addOns.find((detail) => detail.title === addOn)?.[
                  billingCycle === "monthly" ? "price" : "yearlyPrice"
                ]
              }
            </p>
          </div>
        ))}
        <hr className="my-5" />
        <div className="flex justify-between items-center">
          <p className="text-[#9699AA] text-sm font-normal">{`Total ${billingCycle === "monthly" ? "(per month)" : "(per year)"}`}</p>
          <p className="text-[#483EFF] font-extrabold text-2xl">{`$${totalPrice().toFixed(2)}`}</p>
        </div>
      </div>
    </article>
  );
}
