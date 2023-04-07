import mongoose from "../config/mongoose.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        rquired: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    }
});

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;