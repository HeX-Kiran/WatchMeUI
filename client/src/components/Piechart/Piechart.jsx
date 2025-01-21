import './Piechart.css'
import { Doughnut } from 'react-chartjs-2';
// Required Chart.js modules
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the required modules
ChartJS.register(ArcElement, Tooltip, Legend);

function Piechart() {
    const data = {
        labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
        datasets: [
            {
                data: [61.41, 24.65, 10.85, 2.45, 0.64], // Data values
                backgroundColor: [
                    '#4CAF50', // Chrome
                    '#2196F3', // Safari
                    '#FFC107', // Firefox
                    '#FF5722', // Edge
                    '#9C27B0', // Other
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        cutout: '70%', // Adjust the donut's inner radius
        plugins: {
            tooltip: {
                enabled: true, // Enable or disable tooltips
            },
            legend: {
                display: false, // Show or hide legend
                position: 'bottom', // Position the legend
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    // Custom plugin to draw multiple lines of text in the center
    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;

            const lines = ['Total tracked time', '3h 30m']; // Add your lines here
            const baseFontSize = 24; // Customize font size
            const lineHeight = 20; // Space between lines
            const totalHeight = lines.length * lineHeight;

            const startY = (height - totalHeight) / 2; // Start drawing text vertically centered

            ctx.save();
            ctx.font = `${baseFontSize}px Arial`; // Customize font style
            ctx.fillStyle = '#fff'; // Text color
            ctx.textAlign = 'center'; // Align text to the center
            ctx.textBaseline = 'middle'; // Set baseline to the middle

            lines.forEach((line, index) => {
                const textY = startY + index * lineHeight * 2;
                const fontSize = baseFontSize + index * 5; // Increment font size by 2 for each line
                ctx.font = `${fontSize}px Arial`;
                ctx.marginTop = `30px`

                ctx.fillText(line, width / 2, textY); // Draw each line
            });

            ctx.restore();
        },
    };

    return (
        <div className='pie-chart' >
            <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />

        </div>
    );
}

export default Piechart