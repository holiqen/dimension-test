import React from "react";
import Paper from "@mui/material/Paper";
import { ArgumentAxis, Chart, LineSeries, ValueAxis } from "@devexpress/dx-react-chart-material-ui";

const Dashboard = ({ birds }) => {
  return (
    <>
      <Paper>
        <Chart data={birds}>
          <ArgumentAxis />
          <ValueAxis />
          <LineSeries valueField="value" argumentField="argument" />
        </Chart>
      </Paper>
    </>
  );
};

export default Dashboard;
