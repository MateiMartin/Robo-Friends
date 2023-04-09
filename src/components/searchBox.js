import React from "react";

const SearchBox = (props) => {
  const { SearchChange } = props;
  return (
    <div className="pa2 tc">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search your robots"
        onChange={SearchChange}
      />
    </div>
  );
};

export { SearchBox };
