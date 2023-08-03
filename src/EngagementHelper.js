const monthDecider=(month)=>{
  const montharray=['Jan','Feb','March','April','May','June','July','Aug','Sept','Oct','Nov','Dec']
  return montharray[month-1]; 
}

const engagementMessageOverTimeChartOptions=(messageCountList,channels)=>{
  const channelsWithMessages = channels.filter(channel => {
    const channelId = channel.value;
    const messageDates = messageCountList.filter(item => item.channelId === channelId).map(item => item.timeBucket);
    return new Set(messageDates).size > 1;
  });

const dataSeries = channelsWithMessages.map(channel => {
  const channelId = channel.value;
  const messageCounts = messageCountList
    .filter(item => item.channelId === channelId)
    .map(item => parseInt(item.count, 10));
  return {
    name: channel.label,
    data: messageCounts,
  };
});

const dates = [...new Set(messageCountList.map(item => item.timeBucket))];
const categories= dates.map(c=>{
const month=monthDecider(c.slice(5,7))
  return c.slice(8,10) + ' ' +month
})

const options = {
  chart: {
    type: 'spline',
  },
  title: {
    text: 'Mercle Assignment',
  },
  xAxis: {
  categories
  },
  yAxis: {
    title: {
      text: 'Message Count'
         },
  },
  series: dataSeries,
  tooltip:{
    formatter: function () {
      return `<b>general</b><br/>${this.y} messages on ${this.x}`;
  }
  }
};

return options;
}  

export default engagementMessageOverTimeChartOptions;