

export default function ArticleCard(props) {
    return (
      <>
        <div className="block w-96 bg-white p-10">
          <a href="https://www.moneyhelper.org.uk/en/homes/buying-a-home/mortgage-calculator">
            <img
              className="w-96"
              src="../../../src/assets/images/ArticleImg1.jpg"
              alt="Money Helper Logo"
            />
          </a>
            <p className="font-normal text-black bg-secondary">
              Mortgages are some of the biggest commitments you’ll make in your
              financial life. Our mortgage calculator can help.
            </p>
          </div>
      </>
    );
}