import React from 'react'
import { useEffect } from 'react'
import '../Graph/GraphComponent.css'
import { Chart, BarController, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, LineController, LineElement, PointElement);


const GraphComponent = () => {
    useEffect(() => {
        const ctx = document.getElementById('mychart').getContext('2d');
        const ctxx = document.getElementById('curvechart').getContext('2d');
    
        const data1 = [
          { year: 2010, count: 10 },
          { year: 2011, count: 24 },
          { year: 2012, count: 15 },
          { year: 2013, count: 20 },
          { year: 2014, count: 18 },
          { year: 2015, count: 23 },
          { year: 2016, count: 12 },
          { year: 2016, count: 15 },
        ];
    
        const data2 = [
            { year: 2010, count: 20 },
            { year: 2011, count: 22 },
            { year: 2012, count: 15 },
            { year: 2013, count: 20 },
            { year: 2014, count: 18 },
            { year: 2015, count: 23 },
            { year: 2016, count: 21 },
            { year: 2017, count:  15},
            { year: 2018, count: 22 },
            { year: 2019, count: 22 },
            { year: 2020, count: 30 },
            { year: 2021, count: 16 },
            { year: 2022, count: 15 },
            { year: 2023, count: 15 },
            { year: 2024, count: 26 },
            { year: 2025, count: 14 },
            { year: 2026, count: 31 },
            { year: 2027, count: 17 },
            { year: 2028, count: 21 },
            { year: 2029, count: 27 },
          ]
    
        const labels1 = data1.map((row) => row.year);
        const counts1 = data1.map((row) => row.count);
    
        const labels2 = data2.map((row) => row.year);
        const counts2 = data2.map((row) => row.count);
    
        const existingChart = Chart.getChart(ctx);
        if (existingChart) {
          existingChart.destroy();
        }
    
        const existingChartx = Chart.getChart(ctxx);
        if (existingChartx) {
          existingChartx.destroy();
        }
    
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels1,
            datasets: [
              {
                data: counts1,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'blue',
                borderRadius: 10,
              },
            ],
          },
          options: {
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: 0,
            },
          },
        });
    
        new Chart(ctxx, {
          type: 'line',
          data: {
            labels: labels2,
            datasets: [
              {
                data: counts2,
                borderColor: 'blue',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
             
                borderWidth: 2,
                pointRadius: 0, 
              },
            ],
          },
          options: {
            scales: {
              x: {
                display: false,
              },
              y: {
                display: false,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: false,
              },
            },
            responsive: true,
            maintainAspectRatio: false,
            layout: {
              padding: 0,
            },
          },
        });
      }, []);

    return (
        <div className='graph-whole-container'>

            <div className='left-graph-container'>
                <div className='left-top-graph-container'>
                    <div className='total-income-dots'>
                        <span>Total Income</span>
                        <span>...</span>
                    </div>
                    <div className='Amount'>
                        <h1>$124,563.00 </h1>
                        <button>+6.9%</button>
                    </div>
                    <progress  className='custom-progress' value="80" max="100">  </progress>
                    <span className='yearly-goal'>Yearly goal</span>
                </div>
                <div className='left-bottom-graph-container'>
                    <div className='new-users-box'>
                        <div className='new-users-dots'>
                    <span>New Users</span>
                        <span>...</span>
                        </div>
                        <div className='Amount-btn'>
                        <h1>$124,563.00 </h1>
                        <button>+6.9%</button>
                    </div>
                    </div>
                    <div className='graph-box'>
                     <canvas id="mychart" ></canvas>
                    </div>
                </div>
            </div>

            <div className='right-graph-container'>
                <div className='balance-monthly'>
                    <h1>Balance</h1>
                    <button>Monthly </button>
                </div>
                <div className='earnings-sales'>
                <div className='earnings-box'>
                    <span className='earnings'>Earnings</span>
                    <div>
                        <span className='perc'>43.41%</span>
                        <button className='btnn'>+2.5%</button>
                    </div>
                </div>
                <div className='sales-values-box'>
                    <span className='earnings'>Sales Value</span>
                    <div>
                        <span className='perc'>$95,422</span>
                        <button className='btnn'>+13.5%</button>
                    </div>
                </div>
                </div>
                <div className='curve-graph'>
                  <canvas id='curvechart'></canvas>
                </div>
            </div>

        </div>
    )
}

export default GraphComponent
