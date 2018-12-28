'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi,试试水啊啊好了没？';
  }
}

module.exports = HomeController;
