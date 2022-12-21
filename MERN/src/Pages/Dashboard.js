import UniqueApi from '../Tables/UniqueApi';
import TopApi from '../Tables/TopApi';
import TopUsers from '../Tables/TopUsers';
import { useState } from 'react'

import Logout from '../Logout';

function Dashboard() {
  const [showData, setShowData] = useState();

  function showContent(e) {
    setShowData(e.target.id);
  }

  function logout() {
    localStorage.clear()
    // const token = sessionStorage.getItem('token')
    sessionStorage.setItem('token', null)

    window.location.reload();
  }

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-menu">
        <ul>
          <li><a href="#" id="uniqueApi" onClick={showContent}>1 - Unique Api Users over a period of time.</a></li>
          <li><a href="#" id="topApi" onClick={showContent}>2 - Top API Users over a period of time.</a></li>
          <li><a href="#" id="topUsers" onClick={showContent}>3 - Top Users for each Endpoint.</a></li>
        </ul>
      </div>
      <div className="dashboard-content">
        {showData === "uniqueApi" && <UniqueApi />}
        {showData === "topApi" && <TopApi />}
        {showData === "topUsers" && <TopUsers />}
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Dashboard