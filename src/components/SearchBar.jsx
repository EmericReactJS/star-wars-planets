import React from 'react';
import css from 'styled-jsx/css';
import { colors, fonts } from '../common/Theme';
import PropTypes from 'prop-types';

const styles = css`
  .searchInput {
    font-family: ${fonts.primaryFont};
    font-size: 17px;
    color: ${colors.swpPrimaryBlue};
  }
`;

const SearchBar = ({ value, handleChange }) => {
  return (
    <>
      <label htmlFor="search" className="searchInput">
        SEARCH
      </label>
      <input value={value} onChange={handleChange} />
      <style jsx>{styles}</style>
    </>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default SearchBar;
