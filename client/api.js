import React from 'react';
import $ from 'jquery';
// const data = require('./tempData.js')


const API = React.createClass ({
  getInitialHead(){
    return { newData }
  },
  componentDidMount() {
    const that = this;


          // let newData = data.map(market => {
          //
          //  console.log()
          // let newMarket = Object.assign({}, market, {operation_hours: []})
          //
          // let days = market.operation_hours.split(', ');
          //
          //     for (let i in days) {
          //       var weekdays = days[i].split("  ")
          //       var hours = weekdays[1].split("-")
          //       let dayArr = weekdays[0].split('/')
          //
          //       dayArr.forEach(day => {
          //         let newObject = {}
          //         newObject['day'] = day.substring(0,3)
          //         newObject['to'] = hours[0]
          //         newObject['from'] = hours[1]
          //         newMarket.operation_hours.push(newObject)
          //       })
          //     }
          //   return newMarket
          // });

    $.ajax({
			url: 'https://data.ny.gov/resource/t2q6-3ieq.json',
			success: function (data) {

				setTimeout (function(){

          let newData = data.filter(market => {
            console.log('Market:',market.operation_hours)
            return market.operation_hours.indexOf('Dec') === -1 && market.operation_hours.indexOf('Monthly') === -1 && market.operation_hours !== undefined && market.operation_hours.indexOf(',') === -1 && market.operation_hours.indexOf('/') === -1
          }).map(market => {
          console.log('______')

           console.log()

          let newMarket = Object.assign({}, market, {operation_hours: []})
          console.log('operation hours:',market.operation_hours)
          let days = market.operation_hours.split(', ');

          for (let i in days) {
            var weekdays = days[i].split(/[ ]+/)
            console.log('WEEKDAYS:',weekdays)
            var hours = weekdays[1].split('-')
            console.log('HOURS:',hours)

            let dayArr = weekdays[0].indexOf('/') ? weekdays[0].split('/') : (weekdays[0].indexOf('-') ? weekdays[0].split('-') : weekdays[0])

            console.log('DAYARR:',dayArr)

            dayArr.forEach(day => {
              let newObject = {};
                newObject['day'] = day;
                newObject['open'] = hours[0];
                newObject['close'] = hours[1];
              newMarket.operation_hours.push(newObject);
            })
          }
            return newMarket
          });
          //
          newData.forEach((cv) => {
            console.log(cv.market_name, '\n',cv.operation_hours)
            console.log('_________________')
          })

				}, 1000)
			},
			error: function (jqXHR) {
				console.log(jqXHR)
			}
		})
    console.log('newData:',newData)
    that.setState({newData: newData})
  },
  render() {
    return (
      <div>



      </div>
    )
  }
})

export default API;
