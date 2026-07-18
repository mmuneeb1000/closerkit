import PitchCard from "./PitchCard";

export default function PitchList({ pitches, onView, onDelete }) {
  return (
    <div className="flex flex-col gap-4">
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
