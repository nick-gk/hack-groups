export default class StorageHelper {
   private static readonly tokenKey: string = 'jwtToken';
   private static readonly refreshTokenKey: string = 'refreshJwtToken';
   private static readonly username: string = 'username';

   static getToken() {
      return window.localStorage[this.tokenKey];
   }

   static getRefreshToken() {
      return window.localStorage[this.refreshTokenKey];
   }

   static getUsername() {
      return window.localStorage[this.username];
   }

   static saveTokesAndUsername(token: string, refreshToken?: string, username?: string) {
      this.saveToken(token);
      window.localStorage[this.refreshTokenKey] = refreshToken;
      window.localStorage[this.username] = username;
   }

   static saveToken(token: string): void {
      window.localStorage[this.tokenKey] = token;
   }

   static killSession() {
      window.localStorage.clear();
   }
}
