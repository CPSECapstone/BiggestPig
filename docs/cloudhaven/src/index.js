import SwaggerUI as swaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

const spec = require('./swagger-config.yaml');

const ui = swaggerUI({
  spec,
  dom_id: '#swagger',
});

ui.initOAuth({
  appName: 'Swagger UI Webpack Demo',
  // See https://demo.identityserver.io/ for configuration details.
  clientId: 'implicit'
});
