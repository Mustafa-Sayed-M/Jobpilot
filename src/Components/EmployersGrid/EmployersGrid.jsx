import EmployerCard from "./Components/EmployerCard";

function EmployersGrid({ employersList = [] }) {
    return (
        <div className="employers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                employersList.map((employer, index) => (<EmployerCard employerData={employer} key={index} />))
            }
        </div>
    )
}

export default EmployersGrid;