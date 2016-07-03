'use strict';

exports.endpoints = [
	{
		method: 'GET',
		path: '/hello',
		handler: (request, reply) => {
			reply('Hello World');

		}
	},
	/*
	** STATIC files	
	*/
	{
		method: 'GET',
		path: '/{login*}',
		handler: {
			directory: {
				path: '.',
				index: true
			}
		}
	}
];