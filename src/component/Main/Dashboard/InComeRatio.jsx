import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '10:30 AM', uv: 6000 },
  { name: '11:30 AM', uv: 2000 },
  { name: '12:30 PM', uv: 7000 },
  { name: '01:30 PM', uv: 5000 },
  { name: '02:30 PM', uv: 2200 },
  { name: '03:30 PM', uv: 6000 },
  { name: '03:30 PM', uv: 8000 },
];

const InComeRatio = () => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={10} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip formatter={(value) => `$${(value / 1000).toFixed(2)}k`} />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="url(#colorUv)" />
    </AreaChart>
  </ResponsiveContainer>
);

export default InComeRatio;
