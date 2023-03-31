export interface IUser {
    id: number;
    name: string;
    email: string;
}

export class User {
    private props: IUser

    constructor(props: IUser) {
        this.props = props;        
    }

    get Name()
    {
        return this.props.name;
    }

    private set Name(name: string)
    {
        this.props.name = name;
    }

    get Email()
    {
        return this.props.name;
    }

    private set Email(email: string)
    {
        this.props.email = email;
    }
}
