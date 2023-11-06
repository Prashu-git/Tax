import Footer from "./Footer";
import Header from "./Header";
import image2 from "./Images/image2.jpg";

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={image2} // Use the variable here
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in dui facilisis, at egestas turpis volutpat.
                Suspendisse potenti. Sed bibendum euismod diam, vel suscipit augue
                vestibulum et. Phasellus ac purus id lectus scelerisque auctor ut
                a ligula. Integer eu volutpat felis. Nullam a hendrerit lectus, id
                volutpat dui. Phasellus lacinia erat mi, eget sagittis purus auctor
                eget. Vestibulum quis consectetur massa. Proin ut diam at metus
                fringilla fermentum.Vestibulum eget ante ut odio elementum viverra. Nullam nec felis ac
                nunc bibendum bibendum in sit amet erat. Maecenas sed gravida nisl.
                Fusce ultrices auctor lacinia. Proin in justo nec sem eleifend
                convallis. Sed at ante ac turpis cursus iaculis. Suspendisse
                potenti. Sed condimentum mauris nec dapibus interdum. Vestibulum
                nec semper velit, in tristique purus
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Vestibulum eget ante ut odio elementum viverra. Nullam nec felis ac
                nunc bibendum bibendum in sit amet erat. Maecenas sed gravida nisl.
                Fusce ultrices auctor lacinia. Proin in justo nec sem eleifend
                convallis. Sed at ante ac turpis cursus iaculis. Suspendisse
                potenti. Sed condimentum mauris nec dapibus interdum. Vestibulum
                nec semper velit, in tristique purus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                convallis libero in dui facilisis, at egestas turpis volutpat.
                Suspendisse potenti. Sed bibendum euismod diam, vel suscipit augue
                vestibulum et. Phasellus ac purus id lectus scelerisque auctor ut
                a ligula. Integer eu volutpat felis. Nullam a hendrerit lectus, id
                volutpat dui. Phasellus lacinia erat mi, eget sagittis purus auctor
                eget. Vestibulum quis consectetur massa. Proin ut diam at metus
                fringilla fermentum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
