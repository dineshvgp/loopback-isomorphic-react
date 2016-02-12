import React from 'react';
import Router from 'react-router';
import reactRoutes from '../../common/react/routes';

export default function routes(app) {
 //  	app.get('/', function(req, res){
	// 	// React.renderToString takes your component
 //    // and generates the markup
	// 	// var reactHtml = React.renderToString(ReactApp({}));
 //    // Output html rendered by react
	// 	// console.log(myAppHtml);
 //    res.render('index.ejs', {reactOutput: "reactHtml"});
	// });

  app.get('/*', function (req, res) {
    const router = Router.create({
      location: req.url,
      routes: reactRoutes
    });

    router.run(function (Handler) {
      const { CoffeeShop } = app.models;

      // Example of how to retrieve a model
      CoffeeShop.findById(1).then(function(model) {
        const { name, city } = model;

        console.log("===========name", model);

        const html = React.renderToString(
          <Handler bootstrap={{...model.__data}} />
        );

        res.render('index', {
          reactOutput: html,
          bootstrap: JSON.stringify(model)
        });
      });

    });
  });



}
	
