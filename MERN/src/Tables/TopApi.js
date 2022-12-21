import React from 'react'
import { useEffect, useState } from 'react'
import UseToken from '../UseToken';

import { Chart } from "react-google-charts";

function TopApi() {
  const [topApi, setTopApi] = useState([]);
  const { token } = UseToken();
  const appId = token
  useEffect(() => {
    fetch("http://localhost:5001/topapi?appid=" + appId)
      .then(res => res.json())
      .then(data => {
        setTopApi(data);
      })
  }, [])
  // return all api and one user name who visited it the most 
  const topApiUsers = topApi.reduce((acc, curr) => {
    curr.api.map(api => {
      const found = acc.find(item => item.url === api.url);
      if (found) {
        if (found.count < api.count) {
          found.count = api.count;
          found.username = curr.username;
        }
      } else {
        acc.push({ url: api.url, count: api.count, username: curr.username });
      }

    })
    return acc;
  }, [])

  console.log("topApiUsers", topApiUsers)

  const data = [
    ["api", "count"],
    ...topApiUsers.map(api => [api.url + "\n" + api.username, api.count])
  ]

  console.log(data)
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
      />
    </div>
  )
}


export default TopApi