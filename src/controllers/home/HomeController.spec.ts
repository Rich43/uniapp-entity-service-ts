import { PlatformTest } from '@tsed/common';
import HomeController from './HomeController';

describe('HelloWorldController', () => {
    beforeEach(void PlatformTest.create);
    afterEach(void PlatformTest.reset);

    it('should do something', () => {
        const instance = PlatformTest.get<HomeController>(HomeController);
        // get fresh instance
        // const instance = PlatformTest.invoke<HomeController>(HomeController);

        expect(instance).toBeInstanceOf(HomeController);
    });
});
