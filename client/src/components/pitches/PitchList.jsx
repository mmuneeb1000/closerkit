import PitchCard from "./PitchCard";

export default function PitchList({ pitches, onView, onDelete }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {pitches.map((pitch) => (
        <PitchCard
          key={pitch._id}
          pitch={pitch}
          onView={onView}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
