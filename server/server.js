import Path from 'path';
import Hapi from 'hapi';
import Inert from 'inert';
import Routes from './routes';
import Config from './config/config';

const server = new Hapi.Server({
	connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '../client/dist')
            }
        }
    }
});

server.connection({
	host: Config.server.host,
	port: Config.server.port,
	routes: {
		cors: true
	},
	state: {
		ignoreErrors: true
	}
});

/*
** SERVER plugins
*/
var plugins = [
	{
		register: Inert
	}
];

server.register(plugins, () => {});

server.route(Routes.endpoints);

server.start(err => {
	if(err) {
		console.log(err);
		return;
	}

	console.log( `Server started at ${ server.info.uri }` );
});