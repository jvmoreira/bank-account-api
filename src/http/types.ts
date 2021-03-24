export type ApiResponse = ApiSuccessResponse | ApiResponseError;

export type ApiSuccessResponse =
  | ApiSuccessPayload
  & { status: 'SUCCESS' };

export type ApiResponseError =
  | ApiErrorPayload
  & { status: 'ERROR' };

export type ApiSuccessPayload = {
  data: object,
  message?: string,
};

export type ApiErrorPayload = {
  data?: object,
  message: string,
};
