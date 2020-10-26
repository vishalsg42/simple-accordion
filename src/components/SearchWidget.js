import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearchWidget.css";

const SearchWidget = () => {
  const [term, setTerm] = useState("react");
  const [results, setResults] = useState([]);
  const [debouncedTerm, setdebouncedTerm] = useState([]);
  console.log("results ", results);

  useEffect(() => {
    // setdebouncedTerm(term);
    const debounceTimer = setTimeout(() => {
      setdebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    if (term) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResult = results.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>

          <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1>Search Widget</h1>
      <div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="search">Enter search term</label>
            <input
              className="input"
              id="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="ui celled list">{renderedResult}</div>
      </div>
    </>
  );
};

export default SearchWidget;
