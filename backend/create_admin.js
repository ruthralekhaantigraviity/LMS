const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        const adminEmail = 'admin@fic.com';
        const existingAdmin = await User.findOne({ email: adminEmail });
        
        if (existingAdmin) {
            console.log('Admin user already exists');
            process.exit(0);
        }

        const admin = await User.create({
            name: 'System Admin',
            email: adminEmail,
            password: 'admin123',
            phone: '1234567890',
            role: 'admin'
        });

        console.log('Admin user created successfully!');
        console.log('Email: admin@fic.com');
        console.log('Password: admin123');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

createAdmin();
