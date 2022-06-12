import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '7/1',
        uv: 80,
        pv: 1000,
        amt: 1000,
    },
    {
        name: '7/10',
        uv: 300,
        pv: 198,
        amt: 2210,
    },
    {
        name: '7/18',
        uv: 600,
        pv: 9800,
        amt: 2290,
    },
    {
        name: '7/25',
        uv: 100,
        pv: 3908,
        amt: 2000,
    },
    {
        name: '7/28',
        uv: 500,
        pv: 4800,
        amt: 2181,
    },
];

export default class Example extends PureComponent {

    render() {
        return (
            <div width="100%" height="100%" dir={'inherit'}>
                <AreaChart
                    width={781}
                    height={200}
                    data={data}
                    margin={{
                        top: 0,
                        right: 10,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#FDC816" fill="#ffdb62" />
                </AreaChart>

            </div>

        );
    }
}
