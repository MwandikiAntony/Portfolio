import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section className="max-w-xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p>
        Have a project in mind or want to work together? Drop me a message!
      </p>
      <ContactForm />
    </section>
  );
};

export default Contact;
