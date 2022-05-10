import React, { useState } from 'react'
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ Placeholder, data ,setcurr}) => {

  const [Metadata, setMetadata] = useState(data);

  const handleChange = (event) => {
    const sword = event.target.value?event.target.value:"";
    const newdata = data.filter((value) => {
      return value.Name?.toLowerCase().includes(sword?.toLowerCase()); 
    })
    setMetadata(newdata);
  };

  return (
    <div className='Search'>
      <div className='SearchInputs' >
        <input type="text" placeholder={Placeholder} onChange={handleChange} />
        <div className='SearchIcon'>
          <SearchIcon />
        </div>
      </div>
      {
        Metadata.length!==0&&(
      <div className='ResultOutput'>
        {
        Metadata.map((value, key) => {
            return (<button className='ResultFeild' onClick={()=>{
              setcurr(value);
            }}>{value.Name}</button>);
          })
        }
      </div>
      )}
    </div>
  )
}

export default SearchBar