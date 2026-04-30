const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    studentEmail: { type: String, required: true },
    studentPhone: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    courseName: { type: String }, // For easy display if course is deleted
    preferredDate: { type: Date },
    message: { type: String },
    status: {
        type: String,
        enum: ['pending', 'called', 'enrolled', 'rejected'],
        default: 'pending'
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Can be assigned to HR
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
