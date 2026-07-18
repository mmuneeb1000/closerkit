import Project from "../models/Project.js";

export const createProject = async (req, res) => {
  try {
    const { businessName, website, industry, city, notes } = req.body;

    // Validate input
    if (!businessName) {
      return res.status(400).json({
        message: "Business name is required",
      });
    }

    // Create project
    const project = await Project.create({
      user: req.user._id,
      businessName,
      website,
      industry,
      city,
      notes,
    });

    res.status(201).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(projects);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    res.status(200).json(project);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    const updatedProject = await Project.findByIdAndUpdate(
      project._id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        message: "Project not found",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
