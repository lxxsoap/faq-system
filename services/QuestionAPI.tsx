import apiClient from './apiClient';
import { ApiResponse } from '../types/ApiResponse';
import { Question } from '../types/Question';

export const getQuestions = async (url: string): Promise<Question[]> => {
  const response = await apiClient.get<ApiResponse<any>>(url);
  if (response.data.code === 200) {
    console.log('QuestionAPI Fetched data:', response.data.detail); // 添加日志
    if (response.data.detail.collects) {
      // 处理收藏的响应格式
      return response.data.detail.collects.records;
    } else if (response.data.detail.topics) {
      // 处理已发布的响应格式
      return response.data.detail.topics.records;
    } 
     else {
      // 处理主页的响应格式
      return response.data.detail.records;
    }
  } else {
    throw new Error(response.data.description || 'Failed to fetch questions');
  }
};


export const getQuestionDetail = async (url: string): Promise<Question> => {
  const response = await apiClient.get<ApiResponse<Question>>(url);
  if (response.data.code === 200) {
    console.log('getQuestionDetail Fetched data:', response.data.detail); // 添加日志
    return response.data.detail;
  } else {
    throw new Error(response.data.description || 'Failed to fetch question details');
  }
}