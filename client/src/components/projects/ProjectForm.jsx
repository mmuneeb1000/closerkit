import { useEffect, useState, useRef } from "react";

export default function ProjectForm({ onCreate, onUpdate, onClose, project }) {
  const [formData, setFormData] = useState({
    businessName: "",
    website: "",
    industry: "",
    city: "",
    notes: "",
  });
  const businessNameRef = useRef(null);
  useEffect(() => {
    if (businessNameRef.current) {
      businessNameRef.current.focus();
    }
  }, []);
  useEffect(() => {
    if (project) {
      setFormData({
        businessName: project.businessName || "",
        website: project.website || "",
        industry: project.industry || "",
        city: project.city || "",
        phone: project.phone || "",
        notes: project.notes || "",
      });
    }
  }, [project]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "website") {
      let website = value.replace(/\s+/g, "").toLowerCase();

      if (
        website &&
        !website.startsWith("http://") &&
        !website.startsWith("https://")
      ) {
        website = `https://${website}`;
      }
      setFormData((prev) => ({
        ...prev,
        website,
      }));

      return;
    }

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
      phone: "",
      notes: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <div>
        <label
          htmlFor="businessName"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Business Name
        </label>

        <input
          ref={businessNameRef}
          id="businessName"
          type="text"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Prime Estate Advisors"
          autoComplete="organization"
          required
          className="w-full rounded-lg border border-gray-300 p-2 
          focus-input"
        />
      </div>

      <div>
        <label
          htmlFor="website"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Website
        </label>

        <input
          id="website"
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://example.com"
          autoComplete="url"
          className="w-full rounded-lg border border-gray-300 p-2 focus-input"
        />
      </div>

      <div>
        <label
          htmlFor="industry"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Industry
        </label>

        <input
          id="industry"
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="Property Dealer"
          required
          className="w-full rounded-lg border border-gray-300 p-2 focus-input"
        />
      </div>

      <div>
        <label
          htmlFor="city"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          City
        </label>

        <input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Islamabad"
          autoComplete="address-level2"
          required
          className="w-full rounded-lg border border-gray-300 p-2 focus-input"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Business Phone Number
          <span className="ml-1 text-gray-500">(Optional)</span>
        </label>

        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+92 300 11224433"
          autoComplete="tel"
          className="w-full rounded-lg border border-gray-300 p-2 focus-input"
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Project Notes
          <span className="ml-1 text-gray-500">(Optional)</span>
        </label>

        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={5}
          placeholder="Describe the current website, pain points, redesign ideas, or anything that will help generate a better proposal."
          className="w-full rounded-lg border border-gray-300 p-2 focus-input"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100 focus:border-green-600 focus:ring-2 focus:ring-green-600 focus:outline-none"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition hover:bg-green-800 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:outline-none"
        >
          {project ? "Update Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}
