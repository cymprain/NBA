import React, {Component} from 'react';
import  nba from '../nba-client';
import * as d3 from 'd3';
import { hexbin } from 'd3-hexbin';
import { court, shots } from 'd3-shotchart';
import PropTypes from 'prop-types';
window.d3_hexbin = {hexbin : hexbin}; // workaround library problem

class ShotChart extends Component {
    render() {
        return (
            <div>
                shotchart
            </div>
        );
    }
}

export default ShotChart;