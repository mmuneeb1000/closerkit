export default function PitchViewer({ pitch }) {
  if (!pitch) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">
          {pitch.project?.businessName}
        </h2>

        <p className="text-sm text-muted">{pitch.project?.industry}</p>
      </div>

      <div className="rounded-lg bg-gray-50 p-5 whitespace-pre-wrap leading-7">
        {pitch.response}
      </div>

      <div className="text-sm text-muted">
        Generated {new Date(pitch.createdAt).toLocaleString()}
      </div>
    </div>
  );
}
