export default function ProjectCategories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
            activeCategory === category
              ? "border-green-600 bg-green-600 text-white"
              : "border-neutral-900 hover:border-green-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
