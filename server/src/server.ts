var bodyParser = require('body-parser')
import { createExpressServer } from 'routing-controllers';

const PORT = 8080;

console.info(`Starting server on http://localhost:${PORT}`);

const routes: any[] = [];

const app = createExpressServer(
    {
        controllers: routes,
        cors: {
            //TODO: (note: don't use '*' in production)
            origin: PORT,
        }
    }
);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

app.listen(PORT);
