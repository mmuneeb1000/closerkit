import Project from "../models/Project.js";
import Pitch from "../models/Pitch.js";

export const getDashboard = async (req, res) => {
  try {
    const [projects, proposals, recentActivity] = await Promise.all([
      Project.countDocuments({
        user: req.user._id,
      }),

      Pitch.countDocuments({
        user: req.user._id,
      }),

      Pitch.find({
        user: req.user._id,
      })
        .populate("project", "businessName")
        .sort({ createdAt: -1 })
        .limit(3),
    ]);

    res.status(200).json({
      projects,
      proposals,
      recentActivity,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
