import { CloudFrontResponse } from 'aws-lambda';

export interface IResponseOption {
  status: string;
  statusDescripton: string;
}

const defaultOptionState: IResponseOption = {
  status: '200',
  statusDescripton: 'OK',
} as const;

export const createResponse = (response: CloudFrontResponse, body: string, option?: IResponseOption) => {
  const postOption = {
    ...defaultOptionState,
    ...option,
  };

  return {
    ...response,
    ...postOption,
    body
  }
};
