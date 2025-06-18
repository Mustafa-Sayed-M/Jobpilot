import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import termsAndConditionData from '../../Data/termsAndConditions.json';

function TermsAndConditionsPage() {
    return (
        <div className="terms-and-conditions-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Terms & Conditions"
                breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/terms-and-conditions', label: 'Terms & Conditions' }]}
            />
            <div className="container py-10">
                {/* Content Grid */}
                <div className="content-grid grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    {/* Main Content */}
                    <div className="main-content lg:col-span-2 space-y-10">
                        {
                            termsAndConditionData.map(({ name, description, list = [] }, index) => (<div className="" key={index}>
                                {/* Name */}
                                <h3 className="mb-3 font-semibold text-3xl">
                                    {(index + 1).toString().padStart(2, "0")}
                                    {". "}
                                    {name}
                                </h3>
                                {/* Description */}
                                <p className="mb-3 text-gray-600 font-medium">{description}</p>
                                {/* List */}
                                <ul className="space-y-2 list-disc list-inside">
                                    {
                                        list.map((item, index) => (<li key={index} className="text-gray-600 font-medium">{item}</li>))
                                    }
                                </ul>
                            </div>))
                        }
                    </div>
                    {/* Table of Contents */}
                    <div className="table-of-contents p-3 border-l  border-l-gray-400">
                        <h3 className="uppercase mb-3 text-gray-400">Table of Contents</h3>
                        <ul className="space-y-1">
                            <li className="text-gray-600 font-medium">01. Terms & Condition</li>
                            <li className="text-gray-600 font-medium">02. Limitations</li>
                            <li className="text-gray-600 font-medium">03. Security</li>
                            <li className="text-gray-600 font-medium">04. Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsAndConditionsPage;