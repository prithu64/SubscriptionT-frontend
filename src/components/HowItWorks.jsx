
export default function HowItWorks({ isOpen, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-transform duration-200 ease-in-out p-4
      ${isOpen?"scale-100 opacity-100":"opacity-0 scale-95 pointer-events-none "}
      
    `}>
      <div className="bg-white/85 rounded-2xl shadow-xl p-4 max-w-lg w-full ">
        <h2 className="text-xl font-bold mb-4 text-center text-black">📘 How It Works</h2>

        <ul className="space-y-4 text-gray-700 text-sm">
          <li>
            <span className="font-semibold">1. Sign Up / Login:</span> Create an account to securely access your dashboard.
          </li>
          <li>
            <span className="font-semibold">2. Add Subscriptions:</span> Enter the name, cost, billing date, and payment plan of each subscription.
          </li>
          <li>
            <span className="font-semibold">3. View Dashboard:</span> Get a clean overview of your monthly cost, active subs, upcoming payments, and more.
          </li>
          <li>
            <span className="font-semibold">4. Edit or Delete:</span> Easily update or remove subscriptions anytime.
          </li>
          <li>
            <span className="font-semibold">5. Track Smartly:</span> Stay on top of all your subscriptions and avoid surprise charges.
          </li>
        </ul>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
}
