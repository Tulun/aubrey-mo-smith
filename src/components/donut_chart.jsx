import React, { Component } from 'react';
import jQuery from 'jQuery';
import c3 from 'c3';
import d3 from 'd3';

const {connector} = require('../reducers/store')

// var DonutChart = React.createClass({
//   constructor(props) {
//     super(props)

//     this.state = {
//     }
//   }
//   renderChart() {
//     this.chart = c3.generate({
//       bindto: '#chart',
//       data: {
//         columns: [
//           ['data1', 30, 200, 100, 400, 150, 250],
//           ['data2', 50, 20, 10, 40, 15, 25]
//         ]
//       }
//     });
//   }

//   componentDidMount() {
//     this.renderChart
//   }
//   render() {
//     this.renderChart
//     return (
//       <div id='chart'>

//       </div>
//     )
//   }
// })

var DonutChart = React.createClass({
    renderChart: function () {
      var chart = c3.generate({
          data: {
              columns: [
                  ['data1', 30],
                  ['data2', 120],
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Iris Petal Width"
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