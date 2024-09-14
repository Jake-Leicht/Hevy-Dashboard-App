import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ScatterChart, Scatter, ResponsiveContainer } from 'recharts';

const data = [
    {lift: 'Bench Press', weight: 100, reps: 4},
    {lift: 'Bench Press', weight: 100, reps: 12},
    {lift: 'Bench Press', weight: 200, reps: 10},
    {lift: 'Bench Press', weight: 100, reps: 10},
    {lift: 'Bench Press', weight: 100, reps: 9},
    {lift: 'Bench Press', weight: 300, reps: 8},
    {lift: 'Bench Press', weight: 100, reps: 10},
    {lift: 'Bench Press', weight: 100, reps: 10},
    {lift: 'Bench Press', weight: 400, reps: 4},
    {lift: 'Bench Press', weight: 100, reps: 10},
];

const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
];

export default function ChartExample(){

    const renderLineChart = (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="reps" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="weight" />
            <YAxis />
            <Tooltip />
        </LineChart>
        );

    const scatterChart = (
        <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
            >
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="stature" unit="cm" />
            <YAxis type="number" dataKey="y" name="weight" unit="kg" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter name="A school" data={scatterData} fill="#8884d8" />
            </ScatterChart>
        </ResponsiveContainer>
    );

    return(<>
        {renderLineChart}
        {scatterChart}
    </>);
}
