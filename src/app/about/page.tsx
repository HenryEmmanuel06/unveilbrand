export default function About() {
  return (
    <main className="min-h-screen bg-[#040508]">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-20">
        <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 leading-tight">
          We Are A Group of Passionate<br />
          Designers, Developers.
        </h1>
        <p className="text-base md:text-lg text-center text-[#E0E0E0] max-w-2xl mb-10">
          We have many years of experience working for big brands both directly and indirectly through big Agencies. We partner with you and your team to deliver technology solutions that would help you better serve your customers.
        </p>
        <div className="flex justify-center">
          <img src="/images/about purple arrow.svg" alt="Scroll Down" className="w-10 h-10 md:w-12 md:h-12" />
        </div>
      </section>
      {/* Content will be added later */}
    </main>
  );
} 