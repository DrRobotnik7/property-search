import JumboTron from '../../components/JumboTron/JumboTron'
import ArticleCard from "../../components/ArticleCard/ArticleCard"

export default function HomePage() {
  return (
    <>
      <JumboTron />

      <h2>Helpful Articles</h2>

      <div className=" flex flex-col items-stretch md:flex-row m-4">
      <ArticleCard 
      path ="https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgage-calculator"
      image = "../../../src/assets/images/ArticleImg1.jpg"
      alt = "Money Helper Logo"
      paragraph = "Mortgages are some of the biggest commitments you’ll make in your financial life. Our mortgage calculator can help."
      />
      <ArticleCard 
      path ="https://www.thetimes.co.uk/money-mentor/mortgage-property/first-time-buyers/rent-buy-which-best"
      image = "../../../src/assets/images/ArticleImg2.jpg"
      alt = "Family Moving House"
      paragraph = "Should I rent or buy a house? Amidst rising costs, people consider renting or buying, assessing finances for housing choices."
      />
      <ArticleCard 
      path ="https://www.rightmove.co.uk/news/articles/property-news/10-most-in-demand-features-buyers-renters"
      image = "../../../src/assets/images/ArticleImg3.jpg"
      alt = "Family Moving House"
      paragraph = "We studied 600,000 property listings to reveal the top 10 features sought by buyers and renters, offering insights into what matters most in their home search."
      />
      </div>
    </>
  );
}
