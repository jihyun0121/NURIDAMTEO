import { useState } from "react";

export default function Faq({ question, anwer, active = false, onClick }) {
    const [isPressed, setIsPressed] = useState(false);

    const styles = active || isPressed ? { borderRadius: "0.75rem 0.75rem 0 0" } : { borderRadius: "0.75rem" };

    return (
        <div className="faq-container">
            <div className="faq-question" style={styles} onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)} onMouseLeave={() => setIsPressed(false)} onClick={onClick}>
                <div className="faq-icon">Q.</div>
                {question}
            </div>

            {active && (
                <div className="faq-anwer" style={{ borderRadius: `${active || isPressed ? { borderRadius: "0 0 0.75rem 0.75rem" } : { borderRadius: "0.75rem" }}` }}>
                    <div className="faq-icon">A.</div>
                    {anwer}
                </div>
            )}
        </div>
    );
}
