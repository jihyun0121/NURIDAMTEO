export default function OnboardingLabel({ content, children }) {
    return (
        <div className="onboarding-label">
            {children}
            {content}
        </div>
    );
}
