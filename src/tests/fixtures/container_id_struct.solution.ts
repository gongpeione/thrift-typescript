export interface IOtherStructArgs {
    name: string;
}
export class OtherStruct {
    public name: string;
    constructor(args?: IOtherStructArgs) {
        if (args != null) {
            if (args.name != null) {
                this.name = args.name;
            }
            else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, "Required field name is unset!");
            }
        }
    }
    public write(output: TProtocol): void {
        output.writeStructBegin("OtherStruct");
        if (this.name != null) {
            output.writeFieldBegin("name", Thrift.Type.STRING, 1);
            output.writeString(this.name);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public read(input: TProtocol): void {
        input.readStructBegin();
        while (true) {
            const ret: {
                fname: string;
                ftype: Thrift.Type;
                fid: number;
            } = input.readFieldBegin();
            const ftype: Thrift.Type = ret.ftype;
            const fid: number = ret.fid;
            if (ftype === Thrift.Type.STOP) {
                break;
            }
            switch (fid) {
                case 1:
                    this.name = input.readString();
                    break;
                default: {
                    input.skip(ftype);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return;
    }
}
export interface IMyStructArgs {
    field1: Set<OtherStruct>;
}
export class MyStruct {
    public field1: Set<OtherStruct>;
    constructor(args?: IMyStructArgs) {
        if (args != null) {
            if (args.field1 != null) {
                this.field1 = args.field1;
            }
            else {
                throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, "Required field field1 is unset!");
            }
        }
    }
    public write(output: TProtocol): void {
        output.writeStructBegin("MyStruct");
        if (this.field1 != null) {
            output.writeFieldBegin("field1", Thrift.Type.SET, 1);
            output.writeSetBegin(Thrift.Type.STRUCT, this.field1.size);
            this.field1.forEach((value_1: OtherStruct): void => {
                value_1.write(output);
            });
            output.writeSetEnd();
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    }
    public read(input: TProtocol): void {
        input.readStructBegin();
        while (true) {
            const ret: {
                fname: string;
                ftype: Thrift.Type;
                fid: number;
            } = input.readFieldBegin();
            const ftype: Thrift.Type = ret.ftype;
            const fid: number = ret.fid;
            if (ftype === Thrift.Type.STOP) {
                break;
            }
            switch (fid) {
                case 1:
                    this.field1 = new Set<OtherStruct>();
                    const metadata_1: {
                        etype: Thrift.Type;
                        size: number;
                    } = input.readSetBegin();
                    const size_1: number = metadata_1.size;
                    for (let i_1: number = 0; i_1 < size_1; i_1++) {
                        const value_2: OtherStruct = new OtherStruct();
                        value_2.read(input);
                        this.field1.add(value_2);
                    }
                    input.readSetEnd();
                    break;
                default: {
                    input.skip(ftype);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return;
    }
}