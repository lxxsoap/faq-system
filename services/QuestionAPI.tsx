// services/api.ts

import apiClient from './apiClient';
import { ApiResponse } from '../types/ApiResponse';

interface Question {
  id: number;
  title: string;
  content: string;
  inTime: number;
  commentCount: number;
  collectCount: number;
  view: number;
  top: boolean;
  good: boolean;
  upIds: string | null;
  avatar: string;
  userId: number;
  username: string;
  tags: Tag[]; 
  style: string; 
}
interface Tag {
  id: number;
  name: string;
  description: string | null;
  icon: string | null;
  topicCount: number;
  inTime: number;
}

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
    } else {
      // 处理主页的响应格式
      return response.data.detail.records;
    }
  } else {
    throw new Error(response.data.description || 'Failed to fetch questions');
  }
};