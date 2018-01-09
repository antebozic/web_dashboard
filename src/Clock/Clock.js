import React, { Component } from 'react'
import './Clock.css'


class Clock extends Component {


  render(){

// clock function
    function clock() {
      var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds()
      document.querySelectorAll(".clock")[0].innerHTML =
        harold(hours) + ":" + harold(minutes) + ":" + harold(seconds)

      function harold(standIn) {
        if (standIn < 10) {
          standIn = "0" + standIn
        }
        return standIn
      }
    }
    setInterval(clock, 1000)


    return(
<div>

      <div class="clock"></div>


</div>

    )
  }
}

export default Clock
