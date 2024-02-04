export default function ThankYou() {
  return (
    <article className="flex flex-col items-center justify-center p-6">
      <img src="/assets/images/icon-checkmark.svg" alt="check-mark" className="w-16 h-16" />
      <h1 className="text-xl font-bold text-gray-800 mt-4">Thank You!</h1>
      <p className="text-gray-600 mt-2 text-center">
        Your submission has been received. We will be in touch soon!
      </p>
    </article>
  );
}
