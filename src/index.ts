import './style/index.less'


import { Food } from './entity/food';

import { ScorePanel } from './entity/ScorePanel';

let food = new Food()
let panel = new ScorePanel()

setInterval(() => {
  panel.addScore()
}, 1000);


