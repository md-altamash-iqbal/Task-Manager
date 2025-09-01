const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

//@desc     Get all users (Admin only)
//@route     GET /api/users/
//@access   private (Admin)
const getUsers = async (req, res) => {
    try{
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
} ;
//@desc    Get user by ID
//@route   GET /api/user/:id
//@access  Private
const getUserById = async (req, res) => {
    try{
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }};

//@desc    Delete a user (Admin only)
//@route   DELETE /api/users/:id
//@access  (Private admin)
const deleteUser = async (req, res)  =>{
    try{
    } catch (error) {
        res.status(500).json({message: "Server error", error: error.message});
    }
};

module.exports = { getUsers, getUserById, deleteUser};