import Section from "../components/Section";

function WelcomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="mx-auto max-w-4xl text-center">
        <h1 className="bg-linear-to-br from-orange-600 to-orange-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Welcome to the Camp Network Hackathon - test version
        </h1>
        <p className="mt-4 text-base text-gray-700 sm:text-lg">
          Build, explore, and create with a network-first mindset. This space is
          reserved to add your overview, rules, and resources for participants.
        </p>
      </section>

      <Section className="max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-900">
          About Camp Network
        </h2>
        <p className="mt-2 text-center text-gray-700">
          Use this section to describe the mission, vision, and what makes Camp
          Network special. Explain how creators, developers, and communities can
          collaborate and benefit. Add links to docs, schedules, or FAQs.
        </p>
        <div className="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-orange-200/60 bg-white p-4 text-left shadow-sm">
            <div className="text-sm font-semibold text-orange-600">
              Fast Start
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Provide a quick start guide or checklist for participants.
            </div>
          </div>
          <div className="rounded-xl border border-orange-200/60 bg-white p-4 text-left shadow-sm">
            <div className="text-sm font-semibold text-orange-600">
              Collaboration
            </div>
            <div className="mt-1 text-sm text-gray-700">
              Share how teams can collaborate and where to communicate.
            </div>
          </div>
          <div className="rounded-xl border border-orange-200/60 bg-white p-4 text-left shadow-sm">
            <div className="text-sm font-semibold text-orange-600">Tracks</div>
            <div className="mt-1 text-sm text-gray-700">
              Outline hackathon tracks, prizes, and judging criteria.
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default WelcomePage;
