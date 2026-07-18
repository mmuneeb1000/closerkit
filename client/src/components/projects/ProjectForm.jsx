import { useEffect, useState } from "react";

export default function ProjectForm({ onCreate, onUpdate, onClose, project }) {
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    industry: "",
    city: "",
    notes: "",
  });

  useEffect(() => {
    if (project) {
      setFormData({
        businessName: project.businessName || "",
        website: project.website || "",
        industry: project.industry || "",
        city: project.city || "",
        notes: project.notes || "",
      });
    }
  }, [project]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (project) {
      await onUpdate(project._id, formData);
    } else {
      await onCreate(formData);
    }

    setFormData({
      businessName: "",
      website: "",
      industry: "",
      city: "",
      notes: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        type="text"
        name="businessName"
        placeholder="Business Name"
        value={formData.businessName}
        onChange={handleChange}
        className="rounded-lg border p-3"
        required
      />

      <input
        type="url"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
        className="rounded-lg border p-3"
      />

      <input
        type="text"
        name="industry"
        placeholder="Industry"
        value={formData.industry}
        onChange={handleChange}
        className="rounded-lg border p-3"
        required
      />

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className="rounded-lg border p-3"
        required
      />

      <textarea
        name="notes"
        placeholder="Additional notes..."
        value={formData.notes}
        onChange={handleChange}
        rows={5}
        className="rounded-lg border p-3"
      />

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border px-5 py-2 hover:bg-gray-100"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-neutral-800 px-5 py-2 text-white hover:bg-neutral-900"
        >
          {project ? "Update Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}
