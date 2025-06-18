import RegisterCard from "./Components/RegisterCard";
import { useAppContext } from "../../../Contexts/AppContext";

function GetStartedSection() {

    const { user } = useAppContext();

    if (user) return;

    return (
        <section className="get-started-section py-10" id="getStarted">
            <div className="container flex lg:items-center gap-5 max-lg:flex-col">
                {/* Candidate */}
                <RegisterCard
                    bgUrl="https://img.freepik.com/free-photo/glasses-lie-laptop-reflecting-light-from-screen-dark_169016-53056.jpg?uid=R138128925&ga=GA1.1.1165921773.1749749829&w=740"
                    type="Candidate"
                />
                {/* Employers */}
                <RegisterCard
                    bgUrl="https://img.freepik.com/free-photo/casual-businessman-sitting-dark_53876-101864.jpg?uid=R138128925&ga=GA1.1.1165921773.1749749829&semt=ais_hybrid&w=740"
                    type="Employer"
                />
            </div>
        </section>
    )
}

export default GetStartedSection;