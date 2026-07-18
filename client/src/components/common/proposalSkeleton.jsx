export default function ProposalSkeleton() {
  return (
    <div className="mt-6 animate-pulse space-y-3">
      <div className="h-5 w-3/4 rounded bg-gray-200" />
      <div className="h-4 w-full rounded bg-gray-200" />
      <div className="h-4 w-5/6 rounded bg-gray-200" />
      <div className="h-4 w-4/6 rounded bg-gray-200" />

      <div className="pt-4 flex gap-2">
        <div className="h-10 w-28 rounded-lg bg-gray-200" />
        <div className="h-10 w-24 rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
