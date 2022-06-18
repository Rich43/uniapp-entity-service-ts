import { join } from 'path';
import { Configuration, Inject } from '@tsed/di';
import { PlatformApplication } from '@tsed/common';
import '@tsed/platform-express'; // /!\ keep this import
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import cors from 'cors';
import '@tsed/ajv';
import '@tsed/swagger';
import config from 'config';
import { HomeController, IndexController } from './controllers';
import configureLogging from './system/tsedLoggingConfiguration';

configureLogging();

const context = config.get<string>('context');

@Configuration({
    acceptMimes: ['application/json'],
    httpPort: config.has('host') ? `${config.get<string>('host')}:${config.get<number>('port')}` : config.get<number>('port'),
    httpsPort: false,
    componentsScan: false,
    mount: {
        [`${context}/`]: [IndexController, HomeController],
    },
    swagger: [
        {
            path: `${context}/swagger-ui`,
            specVersion: '3.0.1',
        },
    ],
    middlewares: [
        cors(),
        cookieParser(),
        compress({}),
        methodOverride(),
        bodyParser.json(),
        bodyParser.urlencoded({
            extended: true,
        }),
    ],
    views: {
        root: join(process.cwd(), '../views'),
        extensions: {
            ejs: 'ejs',
        },
    },
    exclude: [
        '**/*.spec.ts',
    ],
    logger: {},
})
export default class Server {
    @Inject()
    protected app: PlatformApplication | undefined;

    @Configuration()
    protected settings: Configuration | undefined;
}
