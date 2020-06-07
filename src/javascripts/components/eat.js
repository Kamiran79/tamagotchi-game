import utils from '../helpers/utils';

const buildEatEvent = () => {
  let domString = '';
  domString += `
      <div class="squareEat">                
        <div id="eat1"><i class="fas fa-cookie-bite"></i></div>
        <div id="play1"><i class="fas fa-skating"></i></div>
        <div id="fight1"><i class="fas fa-angry"></i></div>
        <div id="sleep1"><i class="fas fa-bed"></i></div>
        <p class="name1" id="eatHealth">Sammy</p>
        <p class="healthScore" id="eatHealth">Health: 100%</p>
        <button class="btn1" id="eatHealth">eat Healthy</button>
        <button class="btn2" id="eatHealth">eat Junck</button>
      </div>  
  `;
  utils.printToDom('#app', domString);
};

export default { buildEatEvent };


// sleep icon
// <i class="fas fa-bed"></i>

// fight
// <i class="fas fa-angry"></i>
