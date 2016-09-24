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
                ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
                ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
                ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
              ],
              type : 'donut',
              onclick: function (d, i) { console.log("onclick", d, i); },
              onmouseover: function (d, i) { console.log("onmouseover", d, i); },
              onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          donut: {
              title: "Your CRS Score"
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