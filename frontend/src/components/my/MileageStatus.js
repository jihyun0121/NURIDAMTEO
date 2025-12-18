export default function MileageStatus() {
    return (
        <div className="mileage-status-container">
            <div className="mileage-status-num">1</div>
            <div className="mileage-status-content">
                <div className="mileage-status-text">Text</div>
                <div className="mileage-status-payment">
                    <div className="mileage-payment">
                        지급 마일리지 <div className="payment">0,000M</div>
                    </div>
                    <div className="mileage-payment">지급일 2000.00.00</div>
                    <div className="mileage-payment">만료일 2000.00.00</div>
                </div>
                <div className="mileage-status-text">
                    <div className="mileage-payment">
                        누적 마일리지 <div className="cumulative">0,000M</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
