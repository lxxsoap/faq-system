// 定义通用的接口响应类型
export interface ApiResponse<T> {
    code: number;
    description: string;
    detail: T;
  }