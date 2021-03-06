import { CreateUser, Login } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    Login(user: Login): Promise<{
        data: import("../entities/user.entity").User;
    }>;
    getUser(): Promise<{
        data: import("../entities/user.entity").User[];
    }>;
    getOneUser(username: string): Promise<{
        data: import("../entities/user.entity").User;
    }>;
    newUser(user: CreateUser): Promise<{
        data: CreateUser & import("../entities/user.entity").User;
    }>;
}
