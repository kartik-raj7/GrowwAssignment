import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";
import Tag from "../ui/Tag";
import ToggleSwitch from "../ui/ToggleSwitches";
import { useSelector } from "react-redux";

const InputField = ({ value, label, placeholder, type, onChange, handleSearch, logo, data,redirectstockDetailsPage }) => {
  const { bestMatches } = data;
  const {suggested_stocks} = useSelector(state=>state.data);
  const [suggestions, setSuggestions] = useState(bestMatches);
  const [chartfreq, setchartfreq] = useState("Equity");
  const [prevsearched,setprevSearched] = useState(suggested_stocks);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["All","Equity", "ETF"];
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const handleChange = (e) => {
    setIsDropdownOpen(true)
    if (e?.target) {
      const { value } = e.target;
      onChange(value);
    } else {
      onChange(e);
    }
  };
  const handleToggle = (selectedOption) => {
    setchartfreq(selectedOption);
      if(!value){
        if(selectedOption=='All'){
          setprevSearched(suggested_stocks);
          return;
        }
        let newSuggestions = suggested_stocks.filter((item) => {
          return item["3. type"] === selectedOption;
        });
        if (newSuggestions.length === 0) {
          newSuggestions = [{ "2. name": "Nothing to show here" }];
        }
        setprevSearched(newSuggestions);
        return;
      }
      else{
        if(selectedOption=='All'){
          setSuggestions(bestMatches);
          return;
        }
        let newSuggestions = bestMatches.filter((item) => {
          return item["3. type"] === selectedOption;
        });
        if (newSuggestions.length === 0) {
          newSuggestions = [{ "2. name": "Nothing to show here" }];
        }
        setSuggestions(newSuggestions);
     
      return;}    
  };
  useEffect(()=>{
   setprevSearched(suggested_stocks)
  },[suggested_stocks])
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(inputRef.current.matches(':focus'))
      if(!inputRef.current.matches(':focus')&&!dropdownRef?.current?.contains(event.target)){
        closeDropdown();
      }
      else{
        setIsDropdownOpen(true);
      }
    }
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  function suggestedStocks() {
    if (suggestions && suggestions.length > 0 && value && isDropdownOpen) {
      return (
        <div ref={dropdownRef} className={`${style.suggestedStocks} ${style.dropdown} search-input-width mr-1`} >
          <ToggleSwitch options={options} onToggle={handleToggle} width={'70px'} />
          <ul>
            {suggestions?.map((stock, index) => (
              <li key={index} onClick={() =>{ closeDropdown();redirectstockDetailsPage(stock);}} className="flex justify-between align-center">
                <div> {stock["2. name"]}</div>
                {stock["3. type"] && <Tag text={stock["3. type"]} height={"10px"} color={"#66e3c4"} />}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    else if(suggested_stocks&&suggested_stocks.length>0&&!value&&isDropdownOpen){
      return (
        <div ref={dropdownRef} className={`${style.suggestedStocks} ${style.dropdown} search-input-width mr-1`}>
          <ToggleSwitch options={options} onToggle={handleToggle} width={'70px'}/>
          <ul>
            {prevsearched?.map((stock, index) => (
              <li key={index} onClick={() =>{ closeDropdown();redirectstockDetailsPage(stock);}} className="flex justify-between align-center">
                <div> {stock["2. name"]}</div>
                {stock["3. type"] && <Tag text={stock["3. type"]} height={"10px"} color={"#66e3c4"} />}
              </li>
            ))}
          </ul>
        </div>
      );
    }
     else {
      return null;
    }
  }

  return (
    <div className="search-box flex align-center justify-center">
      <input
        type={type}
        value={value}
        className="search-input-width input-border mr-1"
        placeholder={placeholder}
        onChange={handleChange}
        ref={inputRef}
      />
      <div className={`${style.searchicon} cursor`} onClick={(e) => handleSearch(e)}>
        <div>{logo}</div>
      </div>
      {suggestedStocks()}
    </div>
  );
};

export default InputField;
