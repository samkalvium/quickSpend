import React from "react";
import { motion } from "framer-motion";
import './Home.css';

const Home = () => {
  return (
    <motion.div
      className="dashboardContainer"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <aside className="sidebar">
        <div className="profileSection">
          <img src="https://i.pravatar.cc/100" alt="Janice Chandler" className="avatar" />
          <p className="username">Janice Chandler</p>
        </div> 
        <nav className="navLinks">
          <a href="#" className="active">🏠 Home</a>
          <a href="/exp">💸 Expenses</a>
          <a href="#">🧳 Trips</a>
          <a href="#">✅ Approvals</a>
          <a href="#">⚙️ Settings</a>
          <a href="#">📞 Support</a>
        </nav>
      </aside>

      <main className="dashboardMain">
        <div className="panelRow">
          <div className="panel tasks">
            <h3>Pending Tasks</h3>
            <ul>
              <li>Pending Approvals <span>5</span></li>
              <li>New Trips Registered <span>1</span></li>
              <li>Unreported Expenses <span>4</span></li>
              <li>Upcoming Expenses <span>0</span></li>
              <li>Unreported Advances <span>€0.00</span></li>
            </ul>
          </div>
          <div className="panel expenses">
            <h3>Recent Expenses</h3>
            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Employee</th>
                  <th>Team</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Office Supplies</td>
                  <td>John Smith</td>
                  <td><span className="badge marketing">Marketing</span></td>
                  <td>€150.00</td>
                </tr>
                <tr>
                  <td>Business Lunch</td>
                  <td>Sarah Jade</td>
                  <td><span className="badge hr">HR</span></td>
                  <td>€75.50</td>
                </tr>
                <tr>
                  <td>Travel Expenses</td>
                  <td>Mike Brown</td>
                  <td><span className="badge operations">Operations</span></td>
                  <td>€450.25</td>
                </tr>
                <tr>
                  <td>Client Dinner</td>
                  <td>Jennifer Lee</td>
                  <td><span className="badge marketing">Marketing</span></td>
                  <td>€120.00</td>
                </tr>
                <tr>
                  <td>Hotel</td>
                  <td>David Wilson</td>
                  <td><span className="badge finance">Finance</span></td>
                  <td>€275.75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="quickActions">
          <a className="actionBtn" href="/addExp">+ New expense</a>
          <button className="actionBtn">+ Add receipt</button>
          <button className="actionBtn">+ Create report</button>
          <button className="actionBtn">+ Create trip</button>
        </div>

        <div className="charts">
          <div className="chartPanel">
            <h3>Team Spending Trend</h3>
            <img src="https://via.placeholder.com/300x120?text=Chart+1" alt="Team Trend" />
          </div>
          <div className="chartPanel">
            <h3>Day-to-Day Expenses</h3>
            <img src="https://via.placeholder.com/300x120?text=Chart+2" alt="Daily Expenses" />
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
