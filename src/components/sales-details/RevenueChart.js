import React from 'react';
import { Line } from 'react-chartjs-2';


const chartDetails = {
    labels: ['MON', 'TUE', 'WED',
        'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
        {
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'green',
            borderWidth: 2,
            data: [5000, 9000, 5000, 9500, 8300, 10000, 15000]
        }
    ]
}

export default function RevenueChart() {
    return (
        <div>
            <Line
                data={chartDetails}
                options={{
                    scaleLabel:
                        function (label) { return ' $' + label.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); },
                    tooltips: {
                        enabled: false
                    },
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>

    );
}
