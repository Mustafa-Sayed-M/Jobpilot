import howItWeWorkData from '../../../Data/howItWeWork.json';
import HowItWeWorkCard from './Components/HowItWeWorkCard';

function HowItWeWorkSection() {
    return (
        <section className="how-it-we-work-section bg-section py-10" id="howItWeWork">
            <div className="container">
                {/* Title */}
                <h2 className="text-center font-semibold text-2xl mb-10">How jobpilot work</h2>
                {/* Cards Grid */}
                <div className='cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
                    {
                        howItWeWorkData.map((itemData, index) => (<HowItWeWorkCard data={itemData} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default HowItWeWorkSection;