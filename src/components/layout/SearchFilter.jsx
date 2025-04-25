import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter,sortOrder, setSortOrder}) => {
    

    const handleInputChange=(e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    const handleSelectChange=(e)=>{
        e.preventDefault();
        setFilter(e.target.value);
    }
    // const sortCountries=(value)=>{
    //     const sortCountry = [... countries].sort((a,b)=>{
    //         return value === "asc" 
    //         ? a.name.common.localeCompare(b.name.common)
    //         : b.name.common.localeCompare(a.name.common);
    //     })
    //     setCountries(sortCountry);
    // }

    
  return (
    <section className="section-searchFilter container">
        <div>
        <input type="text" value={search} placeholder='Search here' onChange={handleInputChange} />
        </div>

        {/* <div>
            <button onClick={()=> setSortOrder("asc")}>Asc</button>
        </div>

        <div>
            <button onClick={()=> setSortOrder("des")}>Des</button>
        </div> */}
        <div>
            <select className="select-section" value={filter} onChange={handleSelectChange}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        {/* <div>
                {selectedCountries.map((country, index) => (
                    <p key={index}>{country.name.common}</p>
                ))}
            </div>
        <div className="pagination">
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
            </div> */}
    </section>
  )
}

export default SearchFilter
