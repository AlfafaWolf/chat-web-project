export class User {
    constructor(
        public email: string,
        public password: string,
        public gender?: string,
        public firstName?: string,
        public lastName?: string,
        public userID?: string
    ){}
}