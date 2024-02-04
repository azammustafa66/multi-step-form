import { plans } from "../../utils/constants";
import { useFormStore } from "../../utils/store";

export default function StepTwo() {
  const { setSelectedPlan, selectedPlan, billingCycle, toggleBillingCycle } = useFormStore();
  return (
    <article className="flex flex-col justify-evenly gap-y-8">
      <h1 className="text-[#022959] text-4xl font-black tracking-wide">Select your plan</h1>
      <p className="text-[#9699AA] text-lg">You have the option of monthly or yearly billing</p>

      <form>
        <div className="flex flex-col md:flex-row gap-x-4">
          {plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.name)}
              className={`h-20 md:h-[175px] md:w-36 p-1 md:p-3 border border-[#9699AA] rounded-md flex md:flex-col justify-between items-center md:items-start mb-3 cursor-pointer ${
                selectedPlan === plan.name ? "border-2 border-[#483EFF]" : ""
              }`}
            >
              <img src={`/assets/images/icon-${plan.name.toLowerCase()}.svg`} alt="plan-img" />
              <div>
                <p className="text-[#022959] font-medium">{plan.name}</p>
                <p className="text-[#9699AA] text-center">
                  {billingCycle === "yearly" ? plan.yearlyPrice : plan.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </form>
      <div className="flex items-center justify-center p-2 gap-x-8">
        <p
          className={`font-extrabold text-sm ${
            billingCycle === "monthly" ? "text-[#022959]" : "text-[#9699AA]"
          }`}
        >
          Monthly
        </p>

        <div
          className="w-10 h-5 flex items-center bg-[#022959] rounded-full p-1 cursor-pointer"
          onClick={toggleBillingCycle}
        >
          <div
            className={`bg-white w-3 h-3 rounded-full shadow-md transform ${
              billingCycle === "yearly"
                ? "translate-x-5 transition duration-300"
                : "transition duration-300"
            }`}
          ></div>
        </div>

        <p
          className={`text-sm font-extrabold ${
            billingCycle === "yearly" ? "text-[#022959]" : "text-[#9699AA]"
          }`}
        >
          Yearly
        </p>
      </div>
    </article>
  );
}
