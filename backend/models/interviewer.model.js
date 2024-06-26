import mongoose, { Schema } from 'mongoose';
import formatDate from '../utils/formatDate.js';

const interviewerSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    interviews: [{
        type: Schema.Types.ObjectId,
        ref: "Interview"
    }],
    image: {
        type: String,
        required: true
    },
    info: {
        qualification: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        },
        working: {
            type: String,
            required: true
        }
    },
    certificate: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Post"
    }],
    about: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    mastery: {
        type: Array,
        required: true,
    },
    dateJoined: {
        type: String,
        default: formatDate
    }
});

const Interviewer = mongoose.model("Interviewer", interviewerSchema);

export default Interviewer;