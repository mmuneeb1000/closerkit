import Modal from "../common/Modal";
import ProjectForm from "./ProjectForm";

export default function ProjectModal({
  open,
  onClose,
  onCreate,
  onUpdate,
  project,
}) {
  return (
    <Modal
      isOpen={open}
      onClose={onClose}
      title={project ? "Edit Project" : "New Project"}
    >
      <ProjectForm
        project={project}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onClose={onClose}
      />
    </Modal>
  );
}
