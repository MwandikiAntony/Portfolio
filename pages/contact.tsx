import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="max-w-xl mx-auto  px-6 py-20 space-y-6">
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-600">
        <strong>Whether you’re looking to collaborate on a new project, discuss a potential partnership,
        or just want to say hello — I’d love to hear from you. I’m currently open to freelance,
        contract, and full-time opportunities where I can help build impactful digital solutions.</strong>
      </p>
      <p className="text-gray-700 dark:text-gray-450">
        Fill out the form below, and I’ll get back to you as soon as possible. You can also reach
        out via <a href="mailto:yourname@email.com" className="text-blue-600 hover:underline">email </a> 
         or connect with me on{" "}
        <a href="https://www.linkedin.com/in/your-linkedin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>.
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
