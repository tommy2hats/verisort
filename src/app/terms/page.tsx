export const metadata = {
  title: "Terms of Service - Verisort",
  description:
    "Terms of Service for Verisort AI Ltd — agreements, subscriptions, and responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 sm:mb-12">
          <h1
            className="font-extrabold text-3xl leading-tight sm:text-4xl"
            style={{ color: "var(--primary)" }}
          >
            Terms of Service
          </h1>
          <p
            className="mt-3 max-w-3xl text-sm sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            These Terms govern your use of Verisort. By using Verisort you agree
            to these terms.
          </p>
        </header>

        <article className="prose max-w-none space-y-8">
          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">Agreement</h2>
            <p>
              When you use Verisort, you are entering into an agreement with
              Verisort AI Ltd, a company registered in England & Wales. These
              Terms, together with any order, subscription or documentation we
              reference, form the agreement between you and Verisort.
            </p>
          </section>

          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">
              What Verisort provides
            </h2>
            <p>
              Our platform helps you and your colleagues search your own
              documents privately and quickly. We provide search, indexing, and
              AI-assisted tools to help surface relevant content stored in your
              account.
            </p>
          </section>

          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Ownership & data
            </h2>
            <p>
              You retain ownership of everything you upload to Verisort. We do
              not use your documents to train AI models and only process them to
              provide the service. You are responsible for ensuring you have the
              necessary rights to upload and process any content you submit.
            </p>
          </section>

          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">
              AI results and professional use
            </h2>
            <p>
              Because the platform uses AI, results should always be checked
              before you rely on them for legal, regulatory or professional
              matters. We provide AI-assisted results to aid discovery, not as
              professional advice.
            </p>
          </section>

          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Subscriptions and payments
            </h2>
            <p>
              Where applicable, subscriptions are governed by the terms of the
              selected plan. Fees, billing cycles, and refund policies will be
              set out at purchase. You are responsible for keeping payment
              details current.
            </p>
          </section>

          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">Termination</h2>
            <p>
              Either party may terminate the agreement in accordance with the
              terms set out in the subscription or order. On termination we will
              handle your data as described in our Privacy Policy and as
              required by law.
            </p>
          </section>

          <section className="space-y-3 border-b py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">
              Liability and warranty
            </h2>
            <p>
              To the maximum extent permitted by law, Verisort provides the
              service "as is" and disclaims implied warranties. Our liability
              for direct losses is limited as set out in the full Terms and will
              not include indirect or consequential losses.
            </p>
          </section>

          <section className="space-y-3 py-4 sm:py-6">
            <h2 className="font-semibold text-xl sm:text-2xl">Governing law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any
              disputes arising under or in connection with these Terms will be
              subject to the exclusive jurisdiction of the English courts,
              unless otherwise agreed.
            </p>
          </section>

          <footer
            className="mt-6 border-t pt-6"
            style={{ borderColor: "var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              For support or questions about these Terms, contact:{" "}
              <a
                href="mailto:legal@verisort.com"
                className="text-primary underline"
              >
                legal@verisort.com
              </a>
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}
