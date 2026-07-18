import mongoose from "mongoose";

const pitchSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    type: {
      type: String,
      enum: ["proposal", "email", "whatsapp", "followup"],
      default: "proposal",
    },
    prompt: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      default: "gpt-4.1-mini",
    },
  },
  {
    timestamps: true,
  },
);

const Pitch = mongoose.model("Pitch", pitchSchema);

export default Pitch;
