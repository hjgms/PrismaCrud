import { prisma } from "./script"

export async function createUser(name: string, email: string, password: string){
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    });
    return newUser;
}

export async function findUser(obj: object) {
    const findedUser = await prisma.user.findMany({
        where: obj
    })
    return findedUser;
}

export async function allUser() {
    const findedUser = await prisma.user.findMany();
    return findedUser;
}

export async function deleteUser(id: number, name: string) {
    const deletedUser = await prisma.user.delete({
        where: {
            id: id,
            name: name
        }
    })
    return deleteUser;
}