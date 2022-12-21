import React from 'react'
import { useEffect, useState } from 'react'
import UseToken from '../UseToken'

import { Chart } from "react-google-charts";

function UniqueApi() {
  const [topApi, setTopApi] = useState([]);
  // const appId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzhhZTE1OGI4YzNkNWJiM2E1ODE1ZmUiLCJpYXQiOjE2NzAwNDYwNTV9.3frfKBl4EZhw4fWx4u_LaBnooGtaAyP41zNqEsCjaJM"
  const { token, setToken } = UseToken(); // use the token from UseToken.js

  useEffect(() => {
    fetch("http://localhost:5001/uniqueapi?appid=" + token)
      .then(res => res.json())
      .then(data => {
        setTopApi(data);
      })
  }, [])
  console.log(topApi)
  // return unique Api and total count from every user
  const uniqueApi = topApi.map(user => {
    return user.api
  }).flat().reduce((acc, curr) => {
    const found = acc.find(item => item.url === curr.url);
    if (found) {
      found.count += curr.count;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []).sort((a, b) => b.count - a.count).slice(0, 10)

  console.log("uniqueApi", uniqueApi)
  const data = [
    ["api", "count"],
    ...uniqueApi.map(api => [api.url, api.count])
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

export default UniqueApi