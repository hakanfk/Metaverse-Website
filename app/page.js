import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black h-vw overflow-hidden ">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <World />
    {/* <Insights />
    <Feedback /> */}
    <Footer />
  </div>
);

export default Page;
