export interface MyJwtPayload extends JwtPayload {
  userId: string;
  role: string;
}