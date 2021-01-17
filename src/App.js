import {React, Component } from 'react';
import './App.scss';
import Graph from './components/graph/graph.component'
import { sound } from './data/sound'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        list: [16,12,13,4,5,9,2,7,11,3,18,20,19,5,7,8,1,3,6],
        pointer: 0,
        sortRunning: false
    }
  }

  reset = () => {
    let originalData = [1, 5, 16, 6, 10, 15, 13, 7, 11, 14, 5, 4 ,9, 8, 6 ,4, 3, 3, 7]
    this.setState({list: originalData})
  }

  playSortingSound = () => {
    sound.finished.pause()
    sound.finished.currentTime = 0
    sound.sorting.play()
  }

  playFinishedSound = () => {
    sound.sorting.pause()
    sound.sorting.currentTime = 0
    sound.finished.play()
  }

  bubbleSort = () => {

    if(!this.state.sortRunning) {
      this.playSortingSound()

      let array = this.state.list
      let count = array.length-1
      let i = 0;
      let finished
      
      
      let started = setInterval(()=> {
        
        if(i===0) {
          finished = true
        }
          
        if(array[i]>array[i+1]) {
            let temp = array[i]
            array[i] = array[i+1]
            array[i+1] = temp
            finished = false;
        }

        if(i===count-1) {
          i=0;
          count--;
        } else {
          i++
        }

        this.setState({list: array, pointer: i, sortRunning: true})


        if(count===0 || (finished===true && i===0)) {
          console.log("CLEARED")
          this.playFinishedSound()
          clearInterval(started)
          this.setState({sortRunning: false})
        }

      }, 50)
    }
  }

  insertionSort = () => {

    if(!this.state.sortRunning) {
      this.playSortingSound();

      let array = this.state.list
      let i = 0
      let currentIdx = 0
      let timeToIterate = true
      
      let started = setInterval(()=> {

        if(array.length>1) {

          if(timeToIterate) {
            i++;
            currentIdx=i;
            timeToIterate=false
          }

          if(currentIdx > 0 && (array[currentIdx] < array[currentIdx-1])) {
            let temp = array[currentIdx]
            array[currentIdx] = array[currentIdx-1]
            array[currentIdx-1] = temp
            currentIdx--;
          } else {
            timeToIterate = true
          }
        }

        this.setState({list: array, pointer: currentIdx, sortRunning: true})

        if(array.length===1 || i===array.length) {
          console.log("CLEARED")
          this.playFinishedSound();
          clearInterval(started)
          this.setState({sortRunning: false})
        }

      }, 50)

    }

  }


  render() {

    return (
      <div className="App">
        <h1 className="title">SORTING APP</h1>
        <Graph list={this.state.list} pointer={this.state.pointer} sortRunning={this.state.sortRunning} />
        <button className="button bubble" onClick={this.bubbleSort}>BUBBLE SORT</button>
        <button className="button insertion" onClick={this.insertionSort}>INSERTION SORT</button>
        <button className="button reset" onClick={this.reset}>RESET</button>
      </div>
    )
  }
}

export default App;
