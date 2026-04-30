const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    instructor: { type: String, required: true },
    image: { type: String }, // URL to course thumbnail
    isFree: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ['active', 'draft', 'archived'],
        default: 'active'
    }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
