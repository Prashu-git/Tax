import Footer from "./Footer"
import Header from "./Header"

const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h1>
                <div className="prose lg:prose-xl">
                    <section className="mb-8">
                        <p>
                            This Privacy Policy governs the manner in which taxmarg.com collects, uses, maintains and discloses information collected from users (each, a "User") of the www.taxmarg.com website ("Site"). This privacy policy applies to the Site and all products and services offered by TaxMarg.
                        </p>
                        <br />

                        <h2 className="text-lg font-semibold mb-2">1. PERSONAL IDENTIFICATION INFORMATION</h2>
                        <ul className="list-disc pl-4">
                            <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>
                        </ul>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">2. NON-PERSONAL IDENTIFICATION INFORMATION</h2>
                        <ul className="list-disc pl-4">
                            <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers' utilized and other similar information.</p>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">3. WEB BROWSER COOKIES</h2>
                        <ul className="list-disc pl-4">
                            <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</p>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">4. HOW WE USE COLLECTED INFORMATION</h2>
                        <p>India Filings may collect and use Users personal information for the following purposes:

                        </p>
                        <ul className="list-disc pl-4">
                            <li> To improve customer service - Information you provide helps us respond to your customer service requests and support needs more efficiently.
                            </li>
                            <li>
                                To personalize user experience - We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.

                            </li>
                            <li>
                                To improve our Site - We may use feedback you provide to improve our products and services.

                            </li>
                            <li>
                                To process payments - We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.

                            </li>

                            <li>
                                To run a promotion, contest, survey or other Site feature - To send Users information they agreed to receive about topics we think will be of interest to them.

                            </li>

                            <li>
                                To send periodic emails - We may use the email address to send User information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests. If User decides to opt-in to our mailing list, they will receive emails that may include company news, updates, related product or service information, etc. If at any time the User would like to unsubscribe from receiving future emails, we include detailed unsubscribe instructions at the bottom of each email or User may contact us via our Site.

                            </li>
                        </ul>
                    </section>


                </div>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy
