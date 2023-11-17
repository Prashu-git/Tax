import Footer from "./Footer"
import Header from "./Header"

const TermsConditions = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h1>
                <div className="prose lg:prose-xl">
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
                        <ul className="list-disc pl-4">
                            <li>1.1 The terms and conditions of taxmarg.com shall govern your use of our website.</li>
                            <li>1.2 By using our taxmarg.com website, you accept our terms and conditions in full. If you disagree with these terms or any part of them, you must not use our website.</li>
                            {/* Rest of the list items */}
                        </ul>
                    </section>

                    {/* Additional sections similarly structured */}

                    {/* Copyright Notice */}
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">Copyright Notice</h2>
                        <ul className="list-disc pl-4">
                            <li>2.1 Copyright (c) 2023 taxmarg.com.</li>
                            <li>2.2 Subject to the express provisions of these terms and conditions of taxmarg.com:</li>
                            {/* Rest of the list items */}
                        </ul>
                    </section>

                    {/* Indemnification Clause */}
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">Indemnification Clause</h2>
                        <p>Clients hereby indemnify and hold harmless Taxmarg.com, its affiliates, officers, directors, employees, and agents from any damages, losses, liabilities, costs, and expenses incurred due to Customer's breach of the Agreement.</p>
                    </section>

                    {/* Additional Services Clause */}
                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">Additional Services Clause</h2>
                        <p>Customer releases Taxmarg.com from liability for any loss occurring in relation to Additional Services ordered by the Customer.</p>
                    </section>

                    {/* Non-Solicitation; Confidentiality */}
                    <section>
                        <h2 className="text-lg font-semibold mb-2">Non-Solicitation; Confidentiality</h2>
                        <p>Each party agrees not to disclose the Proprietary Information of the other party without prior written consent, except as needed for performing obligations or using the Services.</p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TermsConditions
