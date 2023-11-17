import Footer from "./Footer"
import Header from "./Header"

const DisclaimerPolicy = () => {
    return (
        <>

            <Header />

            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4 text-center">Disclaimer Policy</h1>
                <div className="prose lg:prose-xl">
                    <section className="mb-8">
                        <p>
                            The taxmarg.com Web Site (the "Site") is an online information service provided by taxmarg and co ("taxmarg.com "), subject to your compliance with the terms and conditions set forth below. PLEASE READ THIS DOCUMENT CAREFULLY BEFORE ACCESSING OR USING THE SITE. BY ACCESSING OR USING THE SITE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS SET FORTH BELOW. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, YOU MAY NOT ACCESS OR USE THE SITE. taxmarg.com MAY MODIFY THIS AGREEMENT AT ANY TIME, AND SUCH MODIFICATIONS SHALL BE EFFECTIVE IMMEDIATELY UPON POSTING OF THE MODIFIED AGREEMENT ON THE SITE. YOU AGREE TO REVIEW THE AGREEMENT PERIODICALLY TO BE AWARE OF SUCH MODIFICATIONS AND YOUR CONTINUED ACCESS OR USE OF THE SITE SHALL BE DEEMED YOUR CONCLUSIVE ACCEPTANCE OF THE MODIFIED AGREEMENT.                        </p>
                        <br />

                        <h2 className="text-lg font-semibold mb-2">1. Copyright, Licenses and Idea Submissions.

                        </h2>
                        <ul className="list-disc pl-4">
                            <p>Publications, products, content, or services referenced herein or on the Site are the exclusive trademarks or service marks of taxmarg.com. Other product and company names mentioned on the Site may be the trademarks of their respective owners.

                            </p>
                        </ul>
                    </section>


                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">2. TRADEMARKS

                        </h2>
                        <ul className="list-disc pl-4">
                            <p>Publications, products, content or services referenced herein or on the Site are the exclusive trademarks or servicemarks of balakrishaandco.com. Other product and company names mentioned in the Site may be the trademarks of their respective owners.
                            </p>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-lg font-semibold mb-2">3. Use of the Site</h2>
                        <ul className="list-disc pl-4">
                            <p>You understand that, except for information, products, or services clearly identified as being supplied by taxmarg.com, taxmarg.com does not operate, control, or endorse any information, products, or services on the Internet in any way. Except for taxmarg.com-identified information, products, or services, all information, products, and services offered through the Site or on the Internet generally are offered by third parties that are not affiliated with taxmarg.com. You also understand that taxmarg.com cannot and does not guarantee or warrant that files available for downloading through the Site will be free of infection or viruses, worms, Trojan horses, or other code that manifest contaminating or destructive properties. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for accuracy of data input and output, and for maintaining a means external to the Site for the reconstruction of any lost data.
                            </p>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default DisclaimerPolicy