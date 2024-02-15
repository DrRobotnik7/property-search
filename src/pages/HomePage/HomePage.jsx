import JumboTron from "../../components/JumboTron/JumboTron";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <JumboTron />
      <div className="flex flex-col text-center font-semibold mt-3 text-2xl">
        <h2 className="text-2xl font-extrabold leading-none tracking-tight text-primary md:text-3xl lg:text-4xl dark:text-white">
          Helpful Articles
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row mb-10">
        <ArticleCard
          path="https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgage-calculator"
          image="./images/ArticleImg1.jpg"
          alt="Money Helper Logo"
          paragraph="Mortgages are some of the biggest commitments you’ll make in your financial life. Our mortgage calculator can help."
        />
        <ArticleCard
          path="https://www.thetimes.co.uk/money-mentor/mortgage-property/first-time-buyers/rent-buy-which-best"
          image="./images/ArticleImg2.jpg"
          alt="Family Moving House"
          paragraph="Should I rent or buy a house? Amidst rising costs, people consider renting or buying, assessing finances for housing choices."
        />
        <ArticleCard
          path="https://www.rightmove.co.uk/news/articles/property-news/10-most-in-demand-features-buyers-renters"
          image="./images/ArticleImg3.jpg"
          alt="Family Moving House"
          paragraph="We studied 600,000 property listings to reveal the top 10 features sought by buyers and renters, offering insights into what matters."
        />
      </div>
      <Footer />
    </>
  );
}
