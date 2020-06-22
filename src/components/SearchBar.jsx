import React from 'react';
import css from 'styled-jsx/css';
import { colors, fonts } from '../common/Theme';
import PropTypes from 'prop-types';

const styles = css`
  .search-input {
    display: block;
    font-family: ${fonts.primaryFont};
    font-weight: 400;
    font-size: 17px;
    outline: transparent;
    border: 1px solid ${colors.swpLightBlue};
    border-radius: 10px;
    padding: 8px 8px 8px 16px;
    margin: 0px auto;
    width: 100%;
    box-sizing: border-box;
  }
  .search-input:focus {
    border-color: ${colors.swpPrimaryOrange};
    box-shadow: 0px 0px 3px ${colors.swpLightOrange};
    color: ${colors.swpPrimaryBlue};
  }
  @media (min-width: 480px) {
    .search-input {
      max-width: 480px;
    }
  }
`;

const SearchBar = ({ value, handleChange }) => {
  return (
    <>
      <input
        className="search-input"
        value={value}
        onChange={handleChange}
        placeholder="ex: Coruscant"
      />
      <style jsx>{styles}</style>
    </>
  );
};

SearchBar.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default SearchBar;
