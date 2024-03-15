// Contact.tsx
import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";
import ContactForm from "./contactForm";

const Contact = () => {
  const data: RegularPage = getListPage("contact/_index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-7 md:col-9 mb-8">
              <h1 className="mb-4 text-h3 lg:text-h1 text-center">
                Contact Us
              </h1>
              <p className="text-center">
                Have something to ask? Want to book a call? We are happy to
                help.
              </p>
              <p className="text-center pb-20">
                We love understanding our users and their needs, so feel free to
                reach out and introduce yourselves.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
