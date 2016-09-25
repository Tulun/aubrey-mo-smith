import React from 'react'
const jQuery = require('jQuery')
const c3 = require('c3')
// const C3Chart = require("C3Chart")

const {connector} = require('../reducers/store')

var DonutChart = React.createClass({
  renderChart: function () {
    var cols = [
      ["CRSA Score: ", this.props.CRSAScore],
      ["CRSB Score: ", this.props.CRSBScore],
      ["CRSC Score: ", this.props.CRSCScore],
      ['CRSD Score: ', this.props.CRSDScore]
    ];
    cols[0][0] = cols[0][0] + cols[0][1],
    cols[1][0] = cols[1][0] + cols[1][1],
    cols[2][0] = cols[2][0] + cols[2][1],
    cols[3][0] = cols[3][0] + cols[3][1]
    var chart = c3.generate({
      data: {
        columns: cols,
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
      <div>
        <div id="chart"></div>
        <p className='total-score'>Total Score: {this.props.CRSAScore + this.props.CRSBScore + this.props.CRSCScore + this.props.CRSDScore}</p>
        <p className='target-score'>Score to aim for: Above 450.</p>
      </div>
    )
  }
});

module.exports = connector(DonutChart)
