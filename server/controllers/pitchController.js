import Project from "../models/Project.js";
import Pitch from "../models/Pitch.js";
import { generateProposal } from "../services/openaiService.js";

export const createProposal = async (req, res) => {
  try {
    const { projectId } = req.body;

    const project = await Project.findOne({
      _id: projectId,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    // Generate AI proposal
    const aiResult = await generateProposal(project);

    // Save to MongoDB
    const pitch = await Pitch.create({
      user: req.user._id,
      project: project._id,
      type: "proposal",
      prompt: aiResult.prompt,
      response: aiResult.response,
      model: aiResult.model,
    });

    res.status(201).json(pitch);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const getPitches = async (req, res) => {
  try {
    const pitches = await Pitch.find({
      user: req.user._id,
    })
      .populate("project")
      .sort({ createdAt: -1 });

    res.status(200).json(pitches);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const deletePitch = async (req, res) => {
  try {
    const pitch = await Pitch.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!pitch) {
      return res.status(404).json({
        message: "Pitch not found",
      });
    }

    await pitch.deleteOne();

    res.status(200).json({
      message: "Pitch deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const deleteAllPitches = async (req, res) => {
  try {
    await Pitch.deleteMany({
      user: req.user._id,
    });

    res.status(200).json({
      message: "All proposals deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
