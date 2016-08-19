var express = require('express'),
	router = express.Router(),
	createStore =  require('redux').createStore,
	Provider = require('react-redux').Provider,
	React = require('react'),
	ReactDOMServer = require('react-dom/server');

// require("node-jsx").install({extension: '.jsx', harmony: true});  //支持es6写法
// var Index = require('../views/index.jsx');
var blogDao = require('../dao/blogpost/blogDao.js');
// 
/* GET home page. */
router.get('/', function(req, res, next) {
	// blogDao.select(req, res, function(result) {
	// 	var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Index, {title: '博乐汇', data: result.content}));
	// 	res.send(html);
	// }); 
	
  	res.render('index', { title: 'Express', postItem: html });
});

module.exports = router;
