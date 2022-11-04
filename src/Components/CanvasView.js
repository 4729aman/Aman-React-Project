import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints = [];

export default class CanvasView extends Component {


    constructor() {
        super();
        this.state = { workouts: [] }
    }
    render() {
        const options = {
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Canvas Calories Burn"
            },
            axisY: {
                title: "Graph View",
            },
            data: [{
                type: "column",

                dataPoints: this.state.workouts

            }]
        }

        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );

}

componentDidMount() {



    console.log(this.state.workouts)



    var chart = this.chart;



    fetch('http://localhost:8000/workouts')



        .then((response) => {



            return response.json();



        })



        .then((data) => {



            console.log(data)



            let formattedData = data.map(d => {



                return { label: d.title, y: d.TotalCalories }

            }



            )



            console.log(formattedData);



            this.setState({ workouts: formattedData })



            chart.render();



        });
    }
}
