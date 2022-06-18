import { Appender, BaseAppender, LogEvent } from '@tsed/logger';
import { $log } from '@tsed/common';
import config from 'config';
import logging from './logging';

@Appender({ name: 'winston' })
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WinstonAppender extends BaseAppender {
    write(loggingEvent: LogEvent) {
        logging.log(
            loggingEvent.level.levelStr.toLowerCase(),
            this.layout(loggingEvent, this.config.timezoneOffset),
        );
    }
}

export default function configureLogging() {
    $log.appenders.clear();
    $log.appenders
        .set('stdout', {
            type: 'winston',
            levels: config.get('logLevel'),
            layout: {
                type: process.env.NODE_ENV === 'production' ? 'json' : 'console',
            },
        });
}
