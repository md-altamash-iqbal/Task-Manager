const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name: {type: String, required: true },
        email: {type: String, require: true, unique: true},
        password: {type: String, require: true},
        ProfileImageUrl: {type: String, default: null},
        role: {type: String, enum: ["admin", "member"], default: "member"}, //Role-based access
    },
    {
        timestamps: true
    }
);
module.exports = mongoose.model("User", UserSchema)