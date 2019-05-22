export class tb_Registro {
    static mapFromResponse(data: any): tb_Registro {
        return new tb_Registro(
            data.USUCOD,
            data.LOGCOD,
            data.USUNOM,
            data.USUAPE,
            data.USUNAC,
            data.USUDIR,
            data.USUCOR,
            data.LOGNOM,
            data.LOGCON,
            data.USUREG,
            data.FECREG,
            data.ESTREG)
    }
    constructor(
        public USUCOD: number,
        public LOGCOD: number,
        public USUNOM: string,
        public USUAPE: string,
        public USUNAC: string,
        public USUDIR: string,
        public USUCOR: string,
        public LOGNOM: string,
        public LOGCON: string,
        public USUREG: string,
        public FECREG: string,
        public ESTREG: number) { }
}
