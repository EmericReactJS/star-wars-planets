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
    padding: 0;
  }
  .planet-element {
    margin: 8px;
    display: flex;
  }
  .planet-card-header {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid ${colors.swpPrimaryOrange};
    min-width: 320px;
    border-radius: 8px;
    padding: 8px;
  }
  .icon-button-collapse {
    background: none;
    border: none;
    outline: transparent;
    position: absolute;
    right: 24px;
  }
  .icon-button-radar {
    background: none;
    border: none;
    outline: transparent;
    margin-left: 24px;
  }
  .planet-title {
    font-family: ${fonts.primaryFont};
    color: ${colors.swpPrimaryBlue};
    margin: 0px 0px 0px 24px;
  }
`;

const iconStyles = css.resolve`
  .icon-button_icon_open {
    width: 24px;
  }
  .icon-button_icon_add {
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
            <>
              <li className="planet-element" key={planet.name}>
                <div className="planet-card-header">
                  <h3 className="planet-title">{planet.name}</h3>
                  <button
                    className="icon-button-collapse"
                    onClick={() => handleClick(i)}
                  >
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
                </div>
                <button
                  className="icon-button-radar"
                  onClick={() => setSelected(i, planet)}
                >
                  <RadarIcon
                    className={classnames(
                      'icon-button_icon_add',
                      iconStyles.className
                    )}
                  />
                </button>
                {/* wrap in Csstransisiton */}
              </li>
              <PlanetDetails planet={planet} showDetails={planetIndex === i} />
            </>
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
