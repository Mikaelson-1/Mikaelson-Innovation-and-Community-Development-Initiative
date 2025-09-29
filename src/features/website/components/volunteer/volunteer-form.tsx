import React from "react";

const VolunteerForm: React.FC = () => (
  <section className="application-form px-6 py-16">
    <div className="container mx-auto max-w-3xl">
      <div className="form-header text-center">
        <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
          Apply to Volunteer
        </h2>
        <p className="text-gray-600">
          Tell us about yourself and how you&apos;d like to contribute
        </p>
      </div>
      <div className="form-cta mt-8 text-center">
        <a
          href="https://forms.gle/UYgZGfb4sthtP19z6"
          target="_blank"
          rel="noopener"
          className="submit-button inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow hover:bg-blue-700"
        >
          Apply now
        </a>
      </div>
    </div>
  </section>
);

export default VolunteerForm;
