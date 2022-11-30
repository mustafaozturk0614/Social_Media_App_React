import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import "../topbar/topbar.css";
import SearchModal from "./SearchModal";
function SearchComponent() {
  const [query, setQuery] = useState("");

  return (
    <div className="searchbar">
      <Search className="searchIcon" />
      <input
        placeholder="Search for friend, post or video"
        className="searchInput"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />

      <SearchModal></SearchModal>
    </div>
  );
}

export default SearchComponent;
