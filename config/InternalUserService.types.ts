export interface User {
  id: string;
  name: string;
}

export interface FindUserRequest {
  id: string;
}
export interface FindUserResponse {
  user: User;
}
