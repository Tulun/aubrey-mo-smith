import React from 'react'
const jQuery = require('jQuery')
const c3 = require('c3')
// const C3Chart = require("C3Chart")

const {connector} = require('../reducers/store')

var DonutChart = React.createClass({
  renderChart: function () {
    var chart = c3.generate({
      data: {
        columns: [
          ["CRS-A", this.props.CRSAScore],
          ["CRS-B"],
          ["CRS-C", this.props.CRSCScore],
          ['CRD-D']
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
            return value
          }
        }
      },
      tooltip: {
        show: true,
        title: function(d) { return 'Score ' + d;},
        value: function(value, ratio, id) {
          return value
          console.log(value)
        }
      }
    })
  },

  // These two are to replace the renderChart in render to address a bug.
  componentDidMount: function () {
    this.renderChart()
  },

  componentDidUpdate: function () {
    this.renderChart()
  },

  render: function () {
    return (
      <div id="chart"></div>
    )
  }
});

module.exports = connector(DonutChart)
