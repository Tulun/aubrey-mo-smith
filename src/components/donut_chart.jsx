import React, { Component } from 'react';
import jQuery from 'jQuery';
import c3 from 'c3';
import d3 from 'd3';

const {connector} = require('../reducers/store')

var DonutChart = React.createClass({
  renderChart: function () {
    var chart = c3.generate({
      data: {
        columns: [
          ["CRS-A", this.props.ageScore, this.props.educationScore],
          ["CRS-B"],
          ["CRS-C"],
          ['CRD-D', 50]
        ],
        type : 'donut'
        // onclick: function (d, i) { console.log("onclick", d, i); },
        // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
        title: "Your CRS Score",
        label: {
          format: function(value, ratio, id) {
            return value;
          }
        }
      },
      tooltip: {
        show: true,
        title: function(d) { return 'Score ' + d;},
        value: function(value, ratio, id) {
          return value;
          console.log(value);
        }
      }
    });
  },
  componentDidMount: function () {
      this.renderChart();
  },
  render: function () {
      this.renderChart();
      return (
          <div className="row" id="chart"></div>
      )
  }
});

module.exports = connector(DonutChart)
