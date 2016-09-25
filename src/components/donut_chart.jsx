import React, { Component } from 'react';
import jQuery from 'jQuery';
import c3 from 'c3';
import d3 from 'd3';

const {connector} = require('../reducers/store')

var DonutChart = React.createClass({
  renderChart: function () {
    console.log(this.props.age)
    var chart = c3.generate({
      data: {
        columns: [
          ["CRS-A", 25, 50, 50, this.props.age],
          ["CRS-B", 50, 100, 40],
          ["CRS-C", 100, 200],
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
