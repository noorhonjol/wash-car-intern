import { Bar, Line, Pie } from 'react-chartjs-2';
import { useState } from 'react';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);
const BarChart = ({labelsNames,dataValues,labeltext}) => {
  
    const [chartData, setChartData] = useState({

        labels:labelsNames,
          datasets: [
            {
              label:labelsNames,
              data:dataValues,
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
              layout: {
    
                padding: 20
              },
              borderColor: "black",
              borderWidth: 1
            }
          ]
      });
    
      return (
          <div className='w-1/2'>
            <Bar
              data={chartData}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: labeltext,
                  }
                }
              }}
            />
          </div>
      );
    };
  


export default BarChart

