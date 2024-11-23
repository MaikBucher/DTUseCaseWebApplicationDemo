import { ApplicationInsights } from '@microsoft/applicationinsights-web';

const appInsights = new ApplicationInsights({
    config: {
        instrumentationKey:process.env.INSTRUMENTATION_KEY
    }
});

appInsights.loadAppInsights();

export default appInsights;