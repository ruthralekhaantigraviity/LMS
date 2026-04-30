const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const testUsers = [
    {
        name: 'Super Admin',
        email: 'admin@fic.com',
        password: 'admin123',
        phone: '9999911111',
        role: 'admin'
    },
    {
        name: 'Sarah HR',
        email: 'hr@fic.com',
        password: 'hr123',
        phone: '9999922222',
        role: 'hr'
    },
    {
        name: 'David Trainer',
        email: 'trainer@fic.com',
        password: 'trainer123',
        phone: '9999933333',
        role: 'trainer'
    },
    {
        name: 'John Student',
        email: 'student@fic.com',
        password: 'student123',
        phone: '9999944444',
        role: 'student'
    }
];

const createTestUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        for (const userData of testUsers) {
            const existingUser = await User.findOne({ email: userData.email });
            if (existingUser) {
                console.log(`User ${userData.email} already exists, updating password...`);
                existingUser.password = userData.password;
                existingUser.role = userData.role;
                await existingUser.save();
            } else {
                await User.create(userData);
                console.log(`Created user: ${userData.email}`);
            }
        }

        console.log('✅ Test users ready!');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

createTestUsers();
