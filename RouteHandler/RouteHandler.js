

const RouteHandler = require ('express').Router ();
const path = require ('path');
const { homeController } = require (path.resolve (__dirname, '..', 'controller', 'homeController'));

RouteHandler.get ('/', homeController);

module.exports = {
    RouteHandler
}
