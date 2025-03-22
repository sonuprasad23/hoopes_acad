import React from 'react';
interface PaymentInterfaceProps {
  courseId: string;
  price: number;
  onClose: () => void;
}
const PaymentInterface: React.FC<PaymentInterfaceProps> = ({
  courseId,
  price,
  onClose
}) => {
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Complete Purchase
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600 dark:text-gray-300">
                Course Price
              </span>
              <span className="text-gray-900 dark:text-white font-medium">
                ₹{price}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                GST (18%)
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                ₹{Math.round(price * 0.18)}
              </span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 mt-2 pt-2">
              <div className="flex justify-between items-center font-bold">
                <span className="text-gray-900 dark:text-white">Total</span>
                <span className="text-gray-900 dark:text-white">
                  ₹{Math.round(price * 1.18)}
                </span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Card Number
              </label>
              <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Expiry Date
                </label>
                <input type="text" placeholder="MM/YY" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  CVV
                </label>
                <input type="text" placeholder="123" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md" />
              </div>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-medium transition-colors">
              Pay ₹{Math.round(price * 1.18)}
            </button>
          </form>
        </div>
        <div className="flex items-center justify-center space-x-4 text-gray-500 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-sm">Secure Payment</span>
        </div>
      </div>
    </div>;
};
export default PaymentInterface;