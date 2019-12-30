import { CloudFrontResponseHandler, CloudFrontResponse } from 'aws-lambda';

const createResponse = (response: CloudFrontResponse, body: string, status: string = '200', statusDescripton: string = 'OK') => {
  return {
    ...response,
    statusDescripton,
    status,
    body,
  }
};

export const handler: CloudFrontResponseHandler = (event, context) => {
  const { request, response } = event.Records[0].cf;
  const clientResponse = createResponse(response, JSON.stringify({ uri: request.uri }));
  context.done(undefined, clientResponse);
};

