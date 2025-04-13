import { useState } from 'react'
import './App.css'

import { Chart } from "react-google-charts";


function App() {

  const chartData = {
    "cols": [
      { "label": "Language", "type": "string" },
      { "label": "Popularity (%)", "type": "number" }
    ],
    "rows": [
      { "c": [{ "v": "JavaScript" }, { "v": 19.1 }] },
      { "c": [{ "v": "Python" }, { "v": 17.3 }] },
      { "c": [{ "v": "Java" }, { "v": 10.8 }] },
      { "c": [{ "v": "C#" }, { "v": 6.9 }] },
      { "c": [{ "v": "C++" }, { "v": 6.5 }] },
      { "c": [{ "v": "TypeScript" }, { "v": 4.7 }] },
      { "c": [{ "v": "PHP" }, { "v": 4.0 }] },
      { "c": [{ "v": "C" }, { "v": 3.3 }] },
      { "c": [{ "v": "Go" }, { "v": 2.6 }] },
      { "c": [{ "v": "Ruby" }, { "v": 1.2 }] }
    ]
  }


  return (
    <>
      <Chart
        // Try different chart types by changing this property with one of: LineChart, BarChart, AreaChart...
        chartType="PieChart"
        data={chartData}
        options={{
          title: "Average Weight by Age",
        }}
        height={350}
        legendToggle
      />
    </>
  )
}

export default App
