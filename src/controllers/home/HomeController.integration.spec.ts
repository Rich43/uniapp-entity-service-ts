import { PlatformTest } from '@tsed/common';
import SuperTest from 'supertest';
import HomeController from './HomeController';
import Server from '../../Server';

describe('HomeController', () => {
    let request: SuperTest.SuperTest<SuperTest.Test>;

    beforeEach(void PlatformTest.bootstrap(Server, {
        mount: {
            '/': [HomeController],
        },
    }));
    beforeEach(() => {
        request = SuperTest(void PlatformTest.callback());
    });

    afterEach(void PlatformTest.reset);

    it('should call GET /hello-world', async () => {
        const response = await request.get('/hello-world').expect(200);

        expect(response.text).toEqual('hello');
    });
});
