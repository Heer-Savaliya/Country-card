import React, { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../API/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/layout/SearchFilter";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter, sortOrder]);

  if (isPending) return <Loader />;

  console.log(search, filter);

  const searchCountry = (country) => {
    return search
      ? country.name.common.toLowerCase().includes(search.toLowerCase())
      : true;
  };

  const filterRegion = (country) => {
    return (
      filter === "all" || country.region.toLowerCase() === filter.toLowerCase()
    );
  };

  //main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  if (sortOrder) {
    filterCountries = [...filterCountries].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common)
    );
  }

  // Pagination Logic
  const totalPages = Math.ceil(filterCountries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCountries = filterCountries.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  return (
    <section className="country-section">
      <div className="pagination container">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <FaChevronLeft />
        </button>
        <p>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </p>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Search */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <ul className="grid grid-four-cols">
        {selectedCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Country;
