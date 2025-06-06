import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			default:
				"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png",
		},
		category: {
			type: String,
			default: "uncatagorized",
		},
		slug: {
			type: String,
			required: true,
			unique: true,
		},
		isDraft: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
