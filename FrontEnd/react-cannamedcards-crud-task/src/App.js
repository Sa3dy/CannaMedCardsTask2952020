import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { GlobalStyles } from './globalStyles';

import AddTask from "./components/add-task.component";
import Task from "./components/task.component";
import TasksList from "./components/tasks-list.component";


function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />

        <Router>
          <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/tasks" className="navbar-brand">
                CannaMedCardsTask2952020
            </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/tasks"} className="nav-link">
                    Tasks
                </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Add Task
                </Link>
                </li>
                <li className="nav-item">
                  <button onClick={() => {
                    if (theme === 'light') {
                      setTheme('dark');
                    } else {
                      setTheme('light');
                    }
                  }}>Toggle theme</button>
                </li>
              </div>
            </nav>

            <div className="container mt-3">
              <Switch>
                <Route exact path={["/", "/tasks"]} component={TasksList} />
                <Route exact path="/add" component={AddTask} />
                <Route path="/tasks/:id" component={Task} />
              </Switch>
            </div>
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
