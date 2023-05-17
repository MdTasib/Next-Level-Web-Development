import User from "./user.model";

export const createUserToDb = async() => {
    const user = new User({
        id: "123234",
        role: "student",
        password: "1234222",
        name: {
            firstName: "Test",
            lastName: "user",
        },
        gender: "male",
        email: "test@gmail.com",
        contactNo: "01234",
        emergencyContactNo: "01213",
        presentAddress: "fatick",
        permanentAddress: "test",
    })

    await user.save();
    return user;
}