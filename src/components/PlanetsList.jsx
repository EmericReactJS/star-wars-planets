import React, { useState } from 'react';
import css from 'styled-jsx/css';
import classnames from 'classnames';
import { colors, fonts } from '../common/Theme';
import PropTypes from 'prop-types';
import PlanetDetails from './PlanetDetails';
import CollapseIcon from '../assets/icons/atom_icon_collapse.svg';
import RadarIcon from '../assets/icons/atom_icon_radar.svg';

const styles = css`
  .planet-list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    width: 480px;
    overflow: auto;
    justify-content: center;
  }
  .planet-element {
    margin: 8px;
  }
  .planet-card-header {
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    border: 1px solid ${colors.swpPrimaryOrange};
    border-radius: 8px;
    padding: 8px;
  }
  .icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    outline: transparent;
  }
  .planet-title {
    font-family: ${fonts.primaryFont};
    color: ${colors.swpPrimaryBlue};
    margin: 0px;
  }
`;

const iconStyles = css.resolve`
  .icon-button_icon_open {
    width: 24px;
  }
  .icon-button_icon_close {
    width: 24px;
    transform: rotate(180deg);
  }
`;

const PlanetsList = ({ planets, setSelected }) => {
  const [planetIndex, setPlanetIndex] = useState();
  const handleClick = (i) => {
    if (planetIndex === undefined) {
      setPlanetIndex(i);
    } else {
      setPlanetIndex(undefined);
    }
  };
  return (
    <>
      <ul className="planet-list">
        {planets.map((planet, i) => {
          return (
            <li className="planet-element" key={planet.name}>
              <div className="planet-card-header">
                <h3 className="planet-title">{planet.name}</h3>
                <button className="icon-button" onClick={() => handleClick(i)}>
                  <CollapseIcon
                    className={classnames(
                      'icon-button_icon_open',
                      {
                        'icon-button_icon_close': planetIndex === i
                      },
                      iconStyles.className
                    )}
                  />
                </button>
                <button
                  className="icon-button"
                  onClick={() => setSelected(i, planet)}
                >
                  <RadarIcon
                    className={classnames(
                      'icon-button_icon_add',
                      iconStyles.className
                    )}
                  />
                </button>
              </div>
              {/* wrap in Csstransisiton */}
              <PlanetDetails planet={planet} showDetails={planetIndex === i} />
            </li>
          );
        })}
      </ul>
      <style jsx>{styles}</style>
      {iconStyles.styles}
    </>
  );
};

PlanetsList.propTypes = {
  planets: PropTypes.array,
  setSelected: PropTypes.func
};

export default PlanetsList;
