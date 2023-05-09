import React, { useState } from 'react';
import './NavbarStyle.css';
import { FiSearch } from "react-icons/fi";
import { TbBorderRadius } from 'react-icons/tb';
const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const searchData = [
  { name: "Photo"},
  { name: "news"},
  { name: "Thoughts"},
  { name: "New joiner"},
  { name: "birthdays"},
  { name: "work anniversaries"},
  { name: "documents"},
];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    searchData.filter((data) => {
    return data.name.match(searchInput);
});
}

return (
<div className="search-row">

  <FiSearch style={{color:"blue",paddingLeft:"10px", backgroundColor:"#fff", fontSize:"25px", borderTopLeftRadius:"3px", borderbottomLeftRadius:"3px"}}/>
<input
   className='input'
   type="search"
   placeholder= "Search here"
   onChange={handleChange}
   value={searchInput} />

<table>

{searchData.map((data) => {

<div>
  <tr>
    <td>{data.name}</td>
  </tr>
</div>
}
)}
</table>

</div>
);

};

export default SearchBar;