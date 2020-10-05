export interface LoginRequest {
  login: string;
  password: string;
}


export interface LoginResponse {
  code: number;
  message: string;
  body: { token: string };
}
