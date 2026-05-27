import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { TrustStrip } from "@/components/landing/trust-strip"
import { CeoSummary } from "@/components/landing/ceo-summary"
import { DigitalConsistency } from "@/components/landing/digital-consistency"
import { DetailedAuditSections } from "@/components/landing/detailed-audit-sections"
import { UserJourneyRisk } from "@/components/landing/user-journey-risk"
import { CompetitiveContext } from "@/components/landing/competitive-context"
import { Priorities } from "@/components/landing/priorities"
import { WhyInternalAudit } from "@/components/landing/why-internal-audit"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta"
import { GTMTracking } from "@/components/gtm-tracking"

export default function AvoAuditLandingPage() {
  return (
    <main className="min-h-screen">
      <GTMTracking />
      <Header />
      <Hero />
      <TrustStrip />
      <CeoSummary />
      <DigitalConsistency />
      <DetailedAuditSections />
      <UserJourneyRisk />
      <CompetitiveContext />
      <Priorities />
      <WhyInternalAudit />
      <FinalCta />
      <Footer />
      <MobileStickyCta />
    </main>
  )
}
