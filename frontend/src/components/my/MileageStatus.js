export default function MileageStatus({ num, title, date, mileage, total }) {
    const valueDate = (date) => {
        if (!date) return "";

        if (date.includes("-")) {
            const [y, m, d] = date.slice(0, 10).split("-");
            return `${y}.${m}.${d}`;
        }

        const digits = date.replace(/\D/g, "");
        if (digits.length < 8) return "";

        const year = digits.slice(0, 4);
        const month = digits.slice(4, 6);
        const day = digits.slice(6, 8);

        return `${year}.${month}.${day}`;
    };

    return (
        <div className="mileage-status-container">
            <div className="mileage-status-num">{num}</div>
            <div className="mileage-status-content">
                <div className="mileage-status-text">{title}</div>
                <div className="mileage-status-payment">
                    <div className="mileage-payment">
                        지급 마일리지 <div className="payment">{mileage}M</div>
                    </div>
                    <div className="mileage-payment">지급일 {valueDate(date)}</div>
                </div>
                <div className="mileage-status-text">
                    <div className="mileage-payment">
                        누적 마일리지 <div className="cumulative">{total}M</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
