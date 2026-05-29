export const metadata = {
  title: "Privacy Policy - Verisort",
  description:
    "Privacy practices for Verisort: what we collect, why, and your rights under UK GDPR.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-12 text-foreground sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 sm:mb-12">
          <h1
            className="font-extrabold text-3xl leading-tight sm:text-4xl"
            style={{ color: "var(--primary)" }}
          >
            Privacy Policy
          </h1>
          <p
            className="mt-3 max-w-3xl text-sm sm:text-base"
            style={{ color: "var(--muted-foreground)" }}
          >
            This Privacy Policy explains what we collect, why, how long we keep
            it, and who we share it with.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-4">
          <aside className="md:col-span-1">
            <div
              className="sticky top-24 rounded-lg border bg-card p-5 shadow-md"
              style={{ borderColor: "var(--border)" }}
            >
              <h2 className="mb-2 font-semibold text-lg">At a glance</h2>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Location:</strong> United Kingdom (hosting &
                  processing)
                </li>
                <li>
                  <strong>No sale of data:</strong> We do not sell personal data
                </li>
                <li>
                  <strong>AI usage:</strong> We do not use your documents to
                  train AI models
                </li>
                <li>
                  <strong>Law:</strong> Handled under the UK GDPR
                </li>
                <li>
                  <strong>Contact:</strong> Email us to exercise your rights
                </li>
              </ul>
            </div>
          </aside>

          <article className="prose max-w-none space-y-8 prose-headings:font-semibold prose-a:text-primary prose-a:underline md:col-span-3">
            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">Who we are</h3>
              <p>
                Verisort is built around privacy. We host and process your
                documents in the <strong>United Kingdom</strong>. We don’t sell
                personal data, and we don’t use your documents to train AI
                models. For website visitors and account holders, we collect
                only what we need, such as your business contact details,
                account information, and basic technical data, and we handle it
                under the UK GDPR.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">
                Information we collect
              </h3>
              <h4 className="font-medium text-base">Account & contact data</h4>
              <p>
                When you create an account or contact us we collect identifiers
                and contact details such as your name, company name, email
                address and billing details required to provide and invoice our
                services.
              </p>

              <h4 className="font-medium text-base">
                Documents & content you provide
              </h4>
              <p>
                We process documents and files you upload or submit to Verisort
                to deliver the service. These documents are never used for
                training external models and are processed only to provide the
                features you request.
              </p>

              <h4 className="font-medium text-base">Technical data</h4>
              <p>
                We collect minimal technical information (IP address, browser,
                device type, and usage logs) necessary to operate and secure our
                systems and to improve performance.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">
                How we use your data
              </h3>
              <ul>
                <li>Provide, maintain and improve Verisort services.</li>
                <li>
                  Authenticate accounts, respond to support requests, and
                  communicate important notices.
                </li>
                <li>
                  Comply with legal obligations and protect against security
                  incidents.
                </li>
                <li>
                  Perform analytics and debugging to improve reliability
                  (aggregated or pseudonymised where possible).
                </li>
              </ul>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">
                Data sharing and third parties
              </h3>
              <p>
                We do not sell your personal data. We may share information with
                trusted third-party service providers who perform services on
                our behalf (hosting, payment processing, email delivery). These
                providers are contractually obliged to limit use of personal
                data and to maintain appropriate safeguards.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">
                Storage, retention & transfers
              </h3>
              <p>
                Your data is stored in the United Kingdom. We retain personal
                data no longer than necessary for the purposes described in this
                policy, subject to legal retention obligations. When we delete
                data, we make reasonable efforts to remove it from active
                systems and backups within standard operational windows.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">Your rights</h3>
              <p>
                Under the UK GDPR you have rights including access, correction,
                deletion, and the right to object to processing for direct
                marketing. To exercise any of these rights, email us and we will
                guide you through the verification and fulfillment process.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">Security</h3>
              <p>
                We apply industry-standard technical and organisational measures
                to protect your data, including encryption in transit, access
                controls, and regular security reviews. No system is completely
                secure; however we continually monitor and improve our controls.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">
                Cookies & similar technologies
              </h3>
              <p>
                We use cookies and similar technologies for essential site
                functionality, analytics, and to improve user experience. You
                can manage cookie preferences through your browser settings;
                please note disabling some cookies may affect site
                functionality.
              </p>
            </section>

            <section className="space-y-3 border-b py-4 last:border-b-0 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">
                Changes to this policy
              </h3>
              <p>
                We may update this Privacy Policy occasionally to reflect
                changes in our practices or legal requirements. We will post the
                updated policy with a revised effective date and, where
                required, notify users of significant changes.
              </p>
            </section>

            <section className="space-y-3 py-4 sm:py-6">
              <h3 className="font-semibold text-xl sm:text-2xl">Contact us</h3>
              <p>
                If you have questions, want to exercise your data rights, or
                need more information about our privacy practices, email:{" "}
                <a
                  href="mailto:privacy@verisort.com"
                  className="text-primary underline"
                >
                  privacy@verisort.com
                </a>
                .
              </p>
            </section>

            <footer
              className="mt-8 border-t pt-6"
              style={{ borderColor: "var(--border)" }}
            >
              <p
                className="text-sm"
                style={{ color: "var(--muted-foreground)" }}
              >
                Effective date: {new Date().toLocaleDateString("en-GB")}.
                Verisort Ltd. All rights reserved.
              </p>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}
