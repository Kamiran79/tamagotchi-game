import '../styles/main.scss';
// import buildApp from './components/buildApp';
import eat from './components/eat';


console.error('this is for test to make sure connected');


const init = () => {
  eat.buildEatEvent();
  // buildApp.buildMainCard();
};

init();

/*
    <div id="app">
      <div id="progress"></div>
      <div id="eat" class="quad"></div>
      <div id="play" class="quad"></div>
      <div id="fight" class="quad"></div>
      <div id="sleep" class="quad"></div>
      <div id="pet"></div>
*/
