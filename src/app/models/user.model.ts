export default interface UserModel {
    _id: string,
    email: string,
    image: string,
    rating: number,
    reviewers: number,
    username: string,
    _kmd: {
        authoken: string,
        roles: Array<RoleModel>
    }
}

interface RoleModel {
    grantDate: string,
    grantedBy: string,
    roleId: string
}