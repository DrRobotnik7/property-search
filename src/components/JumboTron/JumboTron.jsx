import { useState } from 'react'
import SearchInput from "../SearchInput/SearchInput"
import background from "../../assets/images/BackgroundImage.jpg"


const JumboTron = () => {
    return (
      <div className="bg-cover bg-center h-96 flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <SearchInput />
      </div>
    );
  };
  
  export default JumboTron;