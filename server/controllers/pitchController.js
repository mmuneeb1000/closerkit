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
