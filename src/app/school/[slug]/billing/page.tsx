import { Metadata } from "next";
import { Check, CreditCard } from "lucide-react";

export const metadata: Metadata = {
    title: "Billing & Plans | MindOS School",
};

export default function BillingPage() {
    return (
        <div className="p-8 max-w-5xl">
            <h1 className="text-3xl font-black text-white mb-8">Subscription</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Current Plan */}
                <div className="md:col-span-2 p-8 bg-zinc-900 border border-indigo-500/30 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4">
                        <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Active Plan</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Growth Plan</h2>
                    <div className="text-4xl font-black text-white mb-6">$499<span className="text-lg text-gray-500 font-medium">/mo</span></div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="space-y-2">
                            <div className="text-sm text-gray-400">Total Seats</div>
                            <div className="text-xl font-bold text-white">500 <span className="text-sm text-gray-500 font-normal">/ 1000</span></div>
                            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-indigo-500" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-sm text-gray-400">Storage</div>
                            <div className="text-xl font-bold text-white">4.2 TB <span className="text-sm text-gray-500 font-normal">/ 10 TB</span></div>
                            <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                <div className="h-full w-[42%] bg-cyan-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="bg-white text-black px-6 py-2 rounded-lg font-bold">Manage Plan</button>
                        <button className="text-gray-400 hover:text-white px-4 py-2 font-medium">View Invoices</button>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="p-8 bg-black border border-white/10 rounded-2xl flex flex-col justify-center">
                    <h3 className="font-bold text-white mb-4">Payment Method</h3>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                            <CreditCard className="text-black w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Visa ending in 4242</div>
                            <div className="text-xs text-gray-500">Expires 12/28</div>
                        </div>
                    </div>
                    <button className="text-sm text-indigo-400 hover:text-indigo-300 font-bold text-left">Update Payment Method &rarr;</button>
                </div>
            </div>
        </div>
    );
}
