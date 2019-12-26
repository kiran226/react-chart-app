import React,{Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels:["AP","TN","TG","KA","KL","GOA"],
                datasets:[{
                    label:"Population",
                    data:[500000,700000,400000,900000,200000,170000],
                    backgroundColor:[
                        'rgba(22,99,132,0.6)',
                        'rgba(22,99,12,0.6)',
                        'rgba(22,0,132,0.6)',
                        'rgba(92,99,132,0.6)',
                        'rgba(82,19,12,0.6)',
                        'rgba(12,14,22,0.6)'
                    ]
                }]
            }
        }
    }
    render(){
        return(
            <div className="chart">
                Chart Component
                <Bar
                    data={this.state.chartData}
                    options={{ 
                        title:{
                            display :true,
                            text :"largest cities in india",
                            fontSize:25
                        },
                        legend:{
                            display: true,
                            position : "right"
                        }
                     }}
                    />
            </div>
        )
    }
}
export default Chart;
