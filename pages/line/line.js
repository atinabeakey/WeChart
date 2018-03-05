import echarts from '../../ec-canvas/echarts';
let chart = null;
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  let colors = ['#5793f3', '#d14a61', '#675bba']
  let option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['销售量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      // axisTick: {
      //   alignWithLabel: true//保证刻度线与刻度标签的对齐
      // },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '销售量',
        type: 'line',
        stack: '销售量',
        /*symbol:'circle',
        symbolSize:16,*/
        areaStyle: { normal: {} },
        itemStyle: {  //折线拐点的样式
          normal: {
            color: '#f00',  //折线拐点的颜色
          }
        },
        lineStyle: {  //线条的样式
          normal: {
            color: '#20aefc',  //折线颜色
          }
        },
        data: [220, 132, 601, 314, 890, 230, 510]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title
    })
  },

  
})