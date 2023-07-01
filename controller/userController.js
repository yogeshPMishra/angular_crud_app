const User = require('../model/User');

exports.register = async(req, res) => {
    try {
        const { name, email, phone, comment } = req.body;
        if (!name || !email || !phone || !comment) {
            return res.status(400).json({
                message: "All fields are required."
            })
        }
        const isExist_Email = await User.find({ email: email });
        if (isExist_Email.length != 0) {
            return res.status(400).json({
                message: "This Email Is Already Exist !!!"
            });
        }
        const createUser = await User.create({
            name,
            email,
            phone,
            comment
        })

        if (!createUser) {
            return res.status(400).json({
                message: "Failed to create your account, try again."
            })
        }
        return res.status(201).json({
            message: "Yay ! Your account have been successfully created ."
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

exports.getsdata = async(req, res) => {
    try {
        const user = await User.find({}).sort({ _id: -1 });
        if (user.length == 0) {
            return res.status(400).json({
                message: "Database Is Empty."
            });
        }
        return res.status(201).json({
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

exports.getdata = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id });
        if (data.length == 0) {
            return res.status(400).json({
                message: "Invalid Id !!!"
            });
        }
        return res.status(200).json({
            data: data
        });

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

exports.update = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id });
        if (data.length == 0) {
            return res.status(400).json({
                message: "Invalid Id !!!"
            });
        }
        const { name, email, phone, comment } = req.body;
        if (!name || !email || !phone || !comment) {
            return res.status(400).json({
                message: "All fields are required."
            })
        }
        const filter = { _id: id };
        const updatedata = { name: name, email: email, phone: phone, comment: comment };
        const updateUser = await User.findOneAndUpdate(filter, updatedata);
        return res.status(200).json({
            message: "Your account have been updated successfully ."
        });

    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

exports.deletedata = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id });
        if (data.length == 0) {
            return res.status(400).json({
                message: "Invalid Id !!!"
            });
        }
        const deletedata = await User.deleteOne({ _id: id });
        return res.status(200).json({
            message: "Your account have been deleted successfully."
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
}