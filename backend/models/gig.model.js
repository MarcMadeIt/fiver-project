import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({




}, {
    timestamps: true
});

export default mongoose.model("Post", postSchemap)