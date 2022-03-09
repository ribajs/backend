import { ConfigService } from '@nestjs/config';
import { SsrService as Ssr } from '@ribajs/node-ssr';
export declare class SsrService {
    private ssr;
    getSharedContext: Ssr['getSharedContext'];
    render: Ssr['render'];
    renderComponent: Ssr['renderComponent'];
    logOutput: Ssr['logOutput'];
    logToErrorMessage: Ssr['logToErrorMessage'];
    constructor(config: ConfigService);
}
