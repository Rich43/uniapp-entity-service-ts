import { Controller } from '@tsed/di';
import { Get } from '@tsed/schema';

@Controller('/hello-world')
export default class HomeController {
    @Get('/')
    get() {
        return 'hello';
    }
}
