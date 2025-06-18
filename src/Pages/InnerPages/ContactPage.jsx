import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import FormContact from "../../Components/Sections/FormContact";

function ContactPage() {
    return (
        <div className="contact-page min-h-screen">
            {/* Breadcrumbs */}
            <Breadcrumbs
                pageName="Contact"
                breadcrumbs={[{ to: '/', label: 'Home' }, { to: '/contact', label: 'Contact' }]}
            />
            {/* Form Contact */}
            <FormContact />
            {/* Google Map */}
            <div
                style={{
                    width: "100%"
                }}
            >
                <iframe
                    width="100%"
                    height="600"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                    <a href="https://www.mapsdirections.info/calcular-la-población-en-un-mapa">
                        Mapa de población interactivo
                    </a>
                </iframe>
            </div>
        </div>
    )
}

export default ContactPage;