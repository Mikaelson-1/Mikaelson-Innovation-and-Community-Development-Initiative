export const JoinSection: React.FC = () => (
  <section className="join-section rounded-2xl bg-gradient-to-br from-teal-500 to-blue-600 p-10 text-center text-white">
    <h2 className="mb-3 text-3xl font-extrabold">Join Our Movement</h2>
    <p className="mx-auto mb-6 max-w-2xl text-lg">
      Be part of the generation that transforms Africa. Join our community of
      ambitious students and changemakers today.
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href="/community"
        className="rounded-full bg-white px-6 py-3 font-semibold text-teal-500 hover:bg-gray-100"
      >
        Join Community
      </a>
      <a
        href="/contact"
        className="rounded-full border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
      >
        Contact Us
      </a>
    </div>
  </section>
);
