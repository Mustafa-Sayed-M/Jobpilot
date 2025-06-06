import EmployersGrid from "../../EmployersGrid/EmployersGrid";

function EmployersResultsSection({ employersList = [] }) {
    return (
        <section className="employers-results-section py-5">
            <div className="container">
                <EmployersGrid employersList={employersList.slice(0, 20)} />
            </div>
        </section>
    )
}

export default EmployersResultsSection;