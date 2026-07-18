import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiTarget,
  FiFolder,
  FiFileText,
  FiClock,
  FiSearch,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiGlobe,
} from "react-icons/fi";

export default function Home() {
  const features = [
    {
      icon: <FiFolder size={28} />,
      title: "Client Project Management",
      description:
        "Organize prospects, businesses, notes, websites, industries, and locations in one clean workspace.",
    },
    {
      icon: <FiFileText size={28} />,
      title: "AI Proposal Generator",
      description:
        "Generate personalized website development proposals tailored to every business in seconds.",
    },
    {
      icon: <FiClock size={28} />,
      title: "Proposal History",
      description:
        "Every proposal is securely saved so you can revisit, copy, edit, or regenerate it later.",
    },
    {
      icon: <FiTarget size={28} />,
      title: "Lead Focused",
      description:
        "Designed specifically for freelancers and agencies looking to convert more website leads.",
    },
    {
      icon: <FiSearch size={28} />,
      title: "Business Research",
      description:
        "Store research, websites, notes, and business details before reaching out.",
    },
    {
      icon: <FiShield size={28} />,
      title: "Private Workspace",
      description:
        "Every account has its own protected projects and proposal history.",
    },
  ];

  const workflow = [
    "Create a client project.",
    "Add the company website and notes.",
    "Generate a personalized proposal with AI.",
    "Review, copy, or download it.",
    "Send it through email or WhatsApp.",
    "Track your growing proposal library.",
  ];

  const future = [
    "Cold email generator",
    "WhatsApp message generator",
    "SEO website audits",
    "Landing page recommendations",
    "Google Maps prospecting",
    "Proposal templates",
    "PDF exports",
    "Proposal analytics",
  ];

  return (
    <main className="bg-surface">
      <section className="border-b bg-white">
        <div
          className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 
        py-6 lg:py-24 text-center lg:flex-row lg:text-left"
        >
          <div className="flex-1">
            <span
              className="inline-flex items-center rounded-full 
            bg-green-100 px-4 py-2 text-sm font-medium text-neutral-900"
            >
              AI Powered Sales Workspace
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-neutral-900 lg:text-5xl">
              Close More Website
              <br />
              Clients With AI
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700">
              CloserKit helps freelancers, web developers, and agencies organize
              prospects, generate personalized website proposals, and manage
              client outreach from a single dashboard.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                to="/register"
                className="rounded-xl bg-green-600 px-7 py-2 font-medium 
                text-white transition hover:bg-green-800"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="rounded-xl border px-7 py-2 font-medium hover:bg-gray-50"
              >
                Login
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-evenly gap-8 text-center text-sm text-neutral-700">
              <div>
                <p className="text-3xl font-bold text-neutral-900">AI</p>
                <p>Proposal Writing</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-neutral-900">24/7</p>
                <p>Available</p>
              </div>

              <div>
                <p className="text-3xl font-bold text-neutral-900">100%</p>
                <p>Cloud Based</p>
              </div>
            </div>
          </div>

          <div className="w-full mb-4 lg:flex-1">
            <div className="rounded-3xl border bg-gray-50 p-8 shadow-xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Dashboard Preview</h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-neutral-900">
                  Live
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <FiFolder className="text-neutral-900" size={28} />
                  <p className="mt-3 text-3xl font-bold">24</p>
                  <p className="text-neutral-700">Projects</p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <FiFileText className="text-neutral-900" size={28} />
                  <p className="mt-3 text-3xl font-bold">93</p>
                  <p className="text-neutral-700">Proposals</p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <FiTrendingUp className="text-neutral-900" size={28} />
                  <p className="mt-3 text-3xl font-bold">71%</p>
                  <p className="text-neutral-700">Response Rate</p>
                </div>

                <div className="rounded-xl bg-white p-5 shadow-sm">
                  <FiZap className="text-neutral-900" size={28} />
                  <p className="mt-3 text-3xl font-bold">8 sec</p>
                  <p className="text-neutral-700">Average Generation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900">
            Everything You Need
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-700">
            CloserKit combines project management with AI-powered proposal
            generation to simplify client outreach.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 inline-flex rounded-xl bg-green-100 p-4 text-neutral-900">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-neutral-700">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-8 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold">Simple Workflow</h2>

          <div className="mt-16 space-y-6">
            {workflow.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-6 rounded-xl border bg-gray-50 p-6"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full 
                bg-green-600 font-bold text-white"
                >
                  {index + 1}
                </div>

                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}

      <section className="mx-auto max-w-7xl px-6 py-10 lg:py-24">
        <div className="rounded-3xl bg-white p-12 shadow-sm">
          <div className="flex items-center gap-3">
            <FiLayers size={30} className="text-neutral-900" />

            <h2 className="text-4xl font-bold">Planned Features</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {future.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border p-5"
              >
                <FiCheckCircle className="text-neutral-900" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-green-600 pt-8 pb-20 lg:py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FiGlobe size={56} className="mx-auto mb-8" />

          <h2 className="text-3xl lg:text-5xl font-bold">
            Ready to Close More Clients?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-50">
            Start organizing your prospects, generate personalized website
            proposals in seconds, and build a repeatable outreach workflow.
          </p>

          <Link
            to="/register"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 
            font-semibold text-black transition hover:scale-105"
          >
            Create Free Account
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
