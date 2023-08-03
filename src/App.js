
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { channels,messageCountList } from './data';
import engagementMessageOverTimeChartOptions from './EngagementHelper';

function App() {
  // const options = {
  //   title: {
  //     text: 'My chart'
  //   },
  //   series: [{
  //     data: [5,3,1,5,7,8]
  //   }]
  // }
const options=engagementMessageOverTimeChartOptions(messageCountList, channels)

  return (
    <div className="App">
    
      <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
    </div>
  );
}

export default App;
