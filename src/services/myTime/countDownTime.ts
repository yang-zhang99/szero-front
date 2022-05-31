import { request } from 'umi';


export async function countDownTime(body: {}, options?: { [p: string]: any }) {
  return request<API.CountDownTime>('http://127.0.0.1:29080/count-down-timer', {
    method: 'GET',
    data: body,
    ...(options || {}),
  });
}
