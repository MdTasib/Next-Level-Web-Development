import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    // createing an interface
    interface IUser {
        id: string;
        role: "student";
        password: string;
        name: {
            firstName: string;
            middleName?: string;
            lastName: string;
        }
        dateOfBirth?: string;
        gender: "male" | "female";
        email?: string;
        contactNo: string;
        emergencyContactNo: string;
        presentAddress: string;
        permanentAddress: string;
    }

    // schema
    const userSchema = new Schema<IUser>({
        id: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            firstName: {
                type: String,
                required: true,
            },
            middleName: {
                type: String
            },
            lastName: {
                type: String,
                required: true,
            }
        },
        dateOfBirth: {
            type: String,
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female"]
        },
        email: {
            type: String
        },
        contactNo: {
            type: String,
            required: true,
        },
        emergencyContactNo: {
            type: String,
            required: true,
        },
        presentAddress: {
            type: String,
            required: true,
        },
        permanentAddress: {
            type: String,
            required: true,
        }
    });

    // model
    const User = model<IUser>("User", userSchema);

    const createUserToDb = async() => {
        const user = new User({
            id: "123",
        role: "student",
        password: "1234",
        name: {
            firstName: "Ohidul",
            lastName: "Alam",
        },
        gender: "male",
        email: "test@gmail.com",
        contactNo: "01234",
        emergencyContactNo: "01213",
        presentAddress: "fatick",
        permanentAddress: "test",
        })

        await user.save();
        console.log(user);
    }
    createUserToDb();
})

export default app;