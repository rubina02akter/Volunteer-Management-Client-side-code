import { useEffect, useState } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://server-side-rho-lemon.vercel.app/posts') // Replace with your actual API URL
      .then((response) => response.json())
      .then((posts) => {
        const formattedData = posts.map((post, index) => ({
          name: `Post ${index + 1}`,
          volunteersNeeded: post.volunteersNeeded || 0,
          location: post.location || '',
          deadline: post.deadline || '',
          title: post.title || '',
        }));
        setData(formattedData);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="volunteersNeeded" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="location" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="deadline" stroke="#ff7300" />
        <Scatter dataKey="title" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Analytics;
