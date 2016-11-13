import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Chart from 'chart.js';

export default class Measurements extends React.Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  componentDidMount() {
    this.mountChart()
  }

  componentDidUpdate() {
    this.mountChart()
  }

  mountChart() {
    var data = {
      labels: this.props.labels,
      datasets: [
        {
          label: this.props.title,
          data: this.props.data,
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          spanGaps: true,
        }
      ]
    };

    var myChart = new Chart(this._canvas, {
      type: 'line',
      data: data,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:false
            }
          }]
        }
      }
    });
  }

  render() {

    return (
        <canvas ref={ref => this._canvas = ref} height="150px" />);
  }
}
