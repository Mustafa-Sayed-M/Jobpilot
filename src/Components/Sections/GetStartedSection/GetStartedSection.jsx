import { Link } from "react-router-dom";
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
                    bgUrl="https://img.freepik.com/free-photo/flat-lay-desk-concept-with-copy-space_23-2148236810.jpg?t=st=1748974488~exp=1748978088~hmac=58a15a580dc49caf01e80839804c87008cea1b9001246ad73b4cff384650f847&w=1380"
                    type="Candidate"
                />
                {/* Employers */}
                <RegisterCard
                    bgUrl="https://img.freepik.com/free-photo/skyscraper-view-city-leader-window-frame_1134-1034.jpg?t=st=1748974977~exp=1748978577~hmac=4d4b34cb41100cd9fc60fa5bc18564e442d511450eca7b060e9aac5bf320fad2&w=1380"
                    type="Employer"
                />
            </div>
        </section>
    )
}

export default GetStartedSection;