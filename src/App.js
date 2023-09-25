import { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from './data';

const Chart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 400px;
  height: 200px;
`;

// [60, 40, 20, 10]
// find max => 60
// => 40/max => 0.667 * 100
// => 66.7%
// [100, 60, 40 ...]
const ChartItem = styled.div`
  background-color: ${(props) => props.$bgColor};
  height: ${(props) => props.$height}%;
  width: 3rem;
  margin-right: 0.5rem;
`;

// transformResponse.js
const transformResponse = (response) => {
  const ticketCounts = response.map(({ ticketCount }) => ticketCount);
  const maxCount = Math.max(...ticketCounts);
  // calculate percentages
  // transform reponse
  const newResponse = response.map((item) => ({
    ...item,
    percentage: (item.ticketCount / maxCount) * 100,
  }));

  return newResponse;
};

const App = () => {
  // assign
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await data();
      const transformedResponse = transformResponse(response);

      setChartData(transformedResponse);
    };

    fetchData();
  }, []);

  return (
    <Chart>
      {chartData &&
        chartData.map(({ id, name, colour, ticketCount, percentage }) => (
          <ChartItem
            key={id}
            $bgColor={colour}
            $height={percentage}
            title={`${name} (${ticketCount})`}
          />
        ))}
    </Chart>
  );
};

export default App;
