import Project from "../models/Project.js";
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

    const proposal = await generateProposal(project);

    res.status(200).json({
      proposal,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
