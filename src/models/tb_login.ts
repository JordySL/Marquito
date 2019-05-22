export class tb_login {
    static mapFromResponse(data: any): tb_login {
        return new tb_login(
            data.LOGNOM,
            data.LOGCON)
    }
    constructor(
        public LOGNOM: string,
        public LOGCON: string) { }
}
