import playground4 from "../assets/playground4.webp";
import playground2 from "../assets/playground2.jpg";
import playground7 from "../assets/playground7.jpg";
import biu2 from "../assets/biu2.jpg";
import ceo1 from "../assets/ceo1.jpg";
import ceo from "../assets/ceo.jpg";
function Hero() {
  return (
    <div className=" flex  h-auto flex-col md:flex-row ">
      <div className="flex-1 flex border">
        {" "}
        <img className="flex h-60 " src={playground4} alt="playground4" />{" "}
      </div>
      <div className="flex-1 border">
        {" "}
        <img className="flex h-60 " src={playground2} alt="playground2" />
      </div>
      <div className="flex-1 border">
        {" "}
        <img className="flex h-60 " src={playground7} alt="playground7" />
        <div className="flex gap-10 md:hidden flex-col ">
          <div>
            <img className=" h-auto w-full" src={biu2} alt="biu2" />
          </div>
          <div className="shadow-md">
            {" "}
            <p className="text-3xl p-4">
              ROYAL COLLEGE OF EDUCATION – Who We Are, What We Do, and What
              We’ve Done{" "}
            </p>
            We founded MuffinGroup in January of 2012. In October 2014, not
            quite 3 years later, our team reached a significant milestone – the
            $1million sales mark; qualifying us for membership in the Envato
            Power Elite program. Who are we? How did we accomplish such a
            remarkable sales feat in so short a time? Our team consists of a
            graphic designer, a coder, a programmer, and a jack-of-all trades
            support guy. We live and work in Poland. We’ve worked together for a
            number of years, but our turning point came in 2012, when we hooked
            up with ThemeForest. We believe our accomplishments are a result of
            hard work, team spirit, and a determination to constantly improve
            upon our products. Our name? There’s nothing symbolic about
            MuffinGroup. We made it up – and we designed a logo to match.
          </div>
          <div className="shadow-md">
            <p className="text-3xl p-4"> Our Story</p>
            Before we formed MuffinGroup, our “gang of four” worked for an
            interactive agency, which is where we first met. Like others having
            an entrepreneurial spirit, we took stock of ourselves, and decided
            to strike out on our own, as a design and development team. We
            started by creating a WordPress theme called Doover. It was
            rejected, but we stuck with it, and it was eventually approved. With
            that successful venture under our belts, we took the next step; we
            quit our full-time jobs and started our own company. Doover is still
            up and running. We’ve sold more than 2,000 copies, and it is one of
            over a dozen WordPress themes making up our product line. In fact,
            Doover has outsold most of our other WordPress themes, but there is
            one very big exception, which leads people to believe that we are a
            very large company. In terms of staffing, we are a very small
            company. In terms of sales, we are huge; at least in terms of
            WordPress theme sales. That is largely because of a product of ours
            that recently exceeded 25,000 in sales – Be Theme.
          </div>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="shadow-md flex-1  ">
              <img src={ceo1} alt="ceo1" />{" "}
              <p className="text-2xl">The Founder</p>
            </div>
            <div className="shadow-md flex-1 ">
              {" "}
              <img src={ceo} alt="ceo" />
              <p className="text-2xl">The Principal</p>
            </div>
          </div>
          <div className="shadow-md">
            {" "}
            <p className="text-3xl p-4">
              How We Made ROYAL COLLEGE OF EDUCATION a House Hold Name In Imo
              State – A School with over 5000 student IN Imo State
            </p>
            Loving the work we do is one thing that led to our creation of Be
            Theme. The real driver however was suggestions and feedback from our
            customers. It’s always great to know that your customers are happy,
            but what really is great, is when your customers offer their ideas
            and suggestions as to what they would like to see. Different
            customers, and their clients, have different needs, and they require
            many different solutions. This knowledge led us to create Be Theme,
            a WordPress theme in which we planned to present demos that would
            enable our customers to choose layouts that met their immediate
            needs. We also wanted them to be able to do so easily, and with just
            a single click. One thing led to another of course, and we began to
            create and add more and more pre-made layouts. As a result, Be Theme
            became bigger and better, and it is still growing. There was also
            the matter of showing our customers what they could do with our
            pre-made layouts, and how easy it can be to build websites using
            them, which is what we touch upon next.
          </div>
          <div className="h-72 bg-slate-100">
            <p className="text-3xl">
              We want to thank you for helping us making our products better and
              better
            </p>
            <button className="bg-blue-400 p-5 ">
              See ROYAL COLLEGE OF EDUCATION In Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
