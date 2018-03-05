import  echarts from '../../ec-canvas/echarts';
let chart = null;
let title
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  let colors = ['#5793f3', '#d14a61', '#675bba']
  var option = {
    color: colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'cross'// 默认为直线，可选为：'line' | 'shadow'|'cross'
      }

    },
    grid: {
      right: 16,
      left: 20,
      bottom: 15,
      top: 70,
      containLabel: true
    },
    legend: {
      data: ['蒸发量', '降水量', '平均温度']
    },
    xAxis: [
      {
        type: 'category',
        // axisTick: {
        //   alignWithLabel: true//保证刻度线与刻度标签的对齐
        // },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '蒸发量',
        min: 'dataMin',
        max: 'dataMax',
        position: 'right',
        axisLine: {
          lineStyle: {
            color: colors[0]
          }
        },
        axisLabel: {
          formatter: '{value} ml',
          rotate: -45
        }
      },
      {
        type: 'value',
        name: '降水量',
        min: 'dataMin',
        max: 'dataMax',
        position: 'right',
        offset: 40,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: colors[1]
          }
        },
        axisLabel: {
          formatter: '{value} ml',
          rotate: -45
        }
      },
      {
        type: 'value',
        name: '温度',
        min: 0,
        max: 25,
        position: 'left',
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: colors[2]
          }
        },
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: [
      {
        name: '蒸发量',
        type: 'bar',
        smooth: true,//使折线平滑在柱状图无用
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
      },
      {
        name: '降水量',
        type: 'bar',
        yAxisIndex: 1,
        smooth: true,//使折线平滑
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
      },
      {
        name: '平均温度',
        type: 'line',
        smooth: true,//使折线平滑
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };

  chart.setOption(option);
  return chart;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ec: {
      onInit: initChart
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: options.title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})