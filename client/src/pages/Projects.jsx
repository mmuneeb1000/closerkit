import { useEffect, useState } from "react";
import api from "../api/axios";

import ProjectCard from "../components/projects/ProjectCard";
import EmptyProjects from "../components/projects/EmptyProjects";
import ProjectModal from "../components/projects/ProjectModal";
import DeleteModal from "../components/projects/DeleteModal";
import ProposalModal from "../components/projects/ProposalModal";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showProposalModal, setShowProposalModal] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);
  const [proposal, setProposal] = useState("");
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    try {
      setLoading(true);

      const { data } = await api.get("/projects");

      setProjects(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load projects.");
    } finally {
      setLoading(false);
    }
  }

  async function createProject(project) {
    try {
      const { data } = await api.post("/projects", project);

      setProjects((prev) => [data, ...prev]);
      setShowProjectModal(false);
    } catch (err) {
      console.error(err);
    }
  }

  function handleDeleteClick(project) {
    setSelectedProject(project);
    setShowDeleteModal(true);
  }

  async function deleteProject() {
    try {
      await api.delete(`/projects/${selectedProject._id}`);

      setProjects((prev) =>
        prev.filter((project) => project._id !== selectedProject._id),
      );

      setSelectedProject(null);
      setShowDeleteModal(false);
    } catch (err) {
      console.error(err);
    }
  }

  async function generateProposal(project) {
    setSelectedProject(project);
    setShowProposalModal(true);
    setProposal(null);

    try {
      const { data } = await api.post("/pitches/proposal", {
        projectId: project._id,
      });

      setProposal(data.proposal || data.response);
    } catch (err) {
      console.error(err);
    }
  }
  async function updateProject(id, projectData) {
    try {
      const { data } = await api.put(`/projects/${id}`, projectData);

      setProjects((prev) =>
        prev.map((project) => (project._id === id ? data : project)),
      );

      setEditingProject(null);
      setShowProjectModal(false);
    } catch (err) {
      console.error(err);
    }
  }
  function handleEdit(project) {
    setEditingProject(project);
    setShowProjectModal(true);
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-surface flex items-center justify-center">
        <p className="text-muted">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-surface flex items-center justify-center">
        <p className="text-danger">{error}</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div
          className="mb-8 flex flex-col gap-4 text-center items-center justify-between
        lg:flex-row lg:text-left"
        >
          <div>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <h1 className="text-4xl font-bold text-neutral-900">Projects</h1>

              <span
                className="flex min-h-6 min-w-6 items-center justify-center 
              rounded-full bg-green-500 px-2 text-sm font-semibold text-white"
              >
                {projects.length}
              </span>
            </div>
            <p className="mt-2 text-muted">
              Manage your clients and generate AI-powered proposals.
            </p>
          </div>

          <button
            onClick={() => setShowProjectModal(true)}
            className="rounded-lg bg-green-600 px-7 py-3 font-medium text-white transition hover:bg-green-800"
          >
            New Project
          </button>
        </div>

        {projects.length === 0 ? (
          <EmptyProjects />
        ) : (
          <div className="grid gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onGenerate={generateProposal}
                onEdit={handleEdit}
                onDelete={() => handleDeleteClick(project)}
              />
            ))}
          </div>
        )}

        <ProjectModal
          open={showProjectModal}
          project={editingProject}
          onCreate={createProject}
          onUpdate={updateProject}
          onClose={() => {
            setEditingProject(null);
            setShowProjectModal(false);
          }}
        />

        <DeleteModal
          open={showDeleteModal}
          project={selectedProject}
          onClose={() => {
            setSelectedProject(null);
            setShowDeleteModal(false);
          }}
          onConfirm={deleteProject}
        />

        <ProposalModal
          open={showProposalModal}
          proposal={proposal}
          onClose={() => {
            setProposal("");
            setSelectedProject(null);
            setShowProposalModal(false);
          }}
        />
      </div>
    </section>
  );
}
