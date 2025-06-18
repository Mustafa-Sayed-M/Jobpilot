import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import faqsData from '../../Data/faqs.json';

function FaqsPage() {
    return (
        <div className="faqs-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Faqs"
                breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/faqs', label: 'Faqs' }]}
            />
            <div className="container py-10">
                {/* Faqs */}
                <div className="faqs-container md:max-w-[750px] md:mx-auto space-y-7">
                    {
                        faqsData.map(({ name, faqsList }, index) => (<div className="faqs-" key={index}>
                            {/* Name */}
                            <h3 className="font-semibold text-xl mb-4">{name}</h3>
                            {/* Faqs List */}
                            <ul className="space-y-2">
                                {
                                    faqsList.map(({ q, a }, index) => (<li
                                        key={index}
                                    >
                                        <label className="block p-4 rounded-md border border-gray-400 cursor-pointer">
                                            {/* Input Checkbox */}
                                            <input type="checkbox" name="faq" className="hidden peer" />
                                            {/* Question */}
                                            <div className="question flex items-center gap-3 justify-between peer-checked:*:text-primary">
                                                <p className="font-semibold text-lx flex-1 transition">{q}</p>
                                                {/* Icon State */}
                                                <i className="fa-solid fa-plus fa-fw text-xl transition"></i>
                                            </div>
                                            {/* Answer */}
                                            <p className="font-medium text-gray-500 mt-2.5 hidden peer-checked:block">{a}</p>
                                        </label>
                                    </li>))
                                }
                            </ul>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default FaqsPage;