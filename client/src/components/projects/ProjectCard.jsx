import {
  FiEdit2,
  FiTrash2,
  FiFileText,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";

export default function ProjectCard({ project, onGenerate, onEdit, onDelete }) {
  return (
    <article className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="text-xl font-semibold text-text">
        {project.businessName}
      </h2>

      <div className="mt-4 space-y-2 text-sm text-muted">
        <p>{project.industry}</p>

        <div className="flex items-center gap-2">
          <FiMapPin />
          <span>{project.city}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiGlobe />
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:text-primary"
          >
            {project.website}
          </a>
        </div>

        {project.notes && (
          <p className="line-clamp-2 text-sm">{project.notes}</p>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => onGenerate(project)}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white 
          transition hover:bg-green-700"
        >
          <FiFileText />
          Generate
        </button>

        <button
          onClick={() => onEdit?.(project)}
          className="flex items-center gap-2 rounded-lg border 
          border-gray-200 px-4 py-2 transition hover:bg-gray-100"
        >
          <FiEdit2 />
          Edit
        </button>

        <button
          onClick={onDelete}
          className="flex items-center gap-2 rounded-lg border 
          border-red-200 px-4 py-2 text-danger transition hover:bg-red-50"
        >
          <FiTrash2 />
        </button>
      </div>
    </article>
  );
}
