import SearchInput from "../SearchInput/SearchInput";
import background from "../../assets/images/BackgroundImage.jpg";
import RentFilter from "../Filters/RentFilter";
import SaleFilter from "../Filters/SaleFilter";


const JumboTron = ({ onInputChange, isRent, setIsRent, isSale, setIsSale }) => {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* SearchInput component for entering search terms, with a prop to handle changes */}
      <SearchInput onInputChange={onInputChange} />
      <div>
        {/* RentFilter component enables and displays rent option */}
        <RentFilter isRent={isRent} setIsRent={setIsRent} />
        {/* SaleFilter component enables and displays sale option */}
        <SaleFilter isSale={isSale} setIsSale={setIsSale} />
      </div>
    </div>
  );
};

export default JumboTron;