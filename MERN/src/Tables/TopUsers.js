import React from 'react'
import { useEffect, useState } from 'react'
import UseToken from '../UseToken';

import { Chart } from "react-google-charts";

function TopUsers() {
  const [topApi, setTopApi] = useState([]);
  const { token } = UseToken();
  const appId = token
  // const appId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhhZTE1OGI4YzNkNWJiM2E1ODE1ZmUiLCJpYXQiOjE2NzAwNDYwNTV9.3frfKBl4EZhw4fWx4u_LaBnooGtaAyP41zNqEsCjaJM"
  useEffect(() => {
    fetch("http://localhost:5001/topusers?appid=" + appId)
      .then(res => res.json())
      .then(data => {
        setTopApi(data);
      })
  }, [])
  console.log(topApi)
  // return Top users and their api count
  const topUsers = topApi.reduce((acc, curr) => {
    const found = acc.find(item => item.username === curr.username);
    if (found) {
      found.count += curr.api.length;
    } else {
      acc.push({ username: curr.username, count: curr.api.length });
    }
    return acc;
  }, [])
  console.log("topUsers", topUsers)
  const data = [
    ["username", "count"],
    ...topUsers.map(user => [user.username, user.count])
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

export default TopUsers