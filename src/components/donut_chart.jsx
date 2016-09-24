import React, { Component } from 'react';
import jQuery from 'jQuery';
import c3 from 'c3';


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
    renderChart: function (data) {
    var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
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