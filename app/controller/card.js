'use strict';

const Controller = require('egg').Controller;

class CardController extends Controller {
  async index() {
    this.ctx.body = 'create card success!';
  }
}

module.exports = CardController;
