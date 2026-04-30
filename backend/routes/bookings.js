const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

// @desc    Create a new booking (Free Class)
// @route   POST /api/bookings
// @access  Public
router.post('/', async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json({ success: true, data: booking });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// @desc    Get all bookings (Admin and HR only)
// @route   GET /api/bookings
// @access  Private (Admin, HR)
router.get('/', protect, authorize('admin', 'hr'), async (req, res) => {
    try {
        const bookings = await Booking.find().populate('courseId', 'title').sort({ createdAt: -1 });
        res.json({ success: true, count: bookings.length, data: bookings });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// @desc    Update booking status (Admin, HR)
// @route   PUT /api/bookings/:id
// @access  Private (Admin, HR)
router.put('/:id', protect, authorize('admin', 'hr'), async (req, res) => {
    try {
        let booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ success: false, message: 'Booking not found' });
        }
        booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.json({ success: true, data: booking });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;
