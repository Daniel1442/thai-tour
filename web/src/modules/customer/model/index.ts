export interface LoginPayload{
    email: string
    password: string
}


export interface RegisterPayload{
    surname: string
    lastname: string
    email: string
    password: string
    passwordRepeated: string
}

export interface LoginResponse{
    customerId: string
    username: string
}

