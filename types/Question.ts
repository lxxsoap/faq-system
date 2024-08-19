export interface Tag {
    id: number;
    name: string;
    description: string | null;
    icon: string | null;
    topicCount: number;
    inTime: number;
  }
  
  export interface Comment {
    id: number;
    topicId: number;
    userId: number;
    style: string;
    content: string;
    inTime: number;
    commentId: number | null;
    upIds: string | null;
    tgMessageId: string | null;
    status: boolean;
    username: string;
    avatar: string | null;
    layer: number;
    likeCount: number;
    children: Comment[] | null;
  }
  interface TopicUser {
    id: number;
    username: string;
    telegramName: string | null;
    avatar: string | null;
    email: string;
    mobile: string | null;
    website: string | null;
    bio: string | null;
    score: number;
    inTime: number;
    token: string;
    emailNotification: boolean;
    active: boolean;
}

  
  export interface Question {
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
    comments: Comment[];
    topicUser: TopicUser;
  }