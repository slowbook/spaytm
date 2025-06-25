export const Balance = ({ value, loading }) => {
    const formatBalance = (amount) => {
        if (typeof amount === 'number') {
            return amount.toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
        return "0.00";
    };

    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {loading ? "Loading..." : formatBalance(value)}
        </div>
    </div>
}