import { BookOpen, ClipboardList, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import type { ElementType } from "react";

function FeatureCard({
  icon: Icon,
  title,
  description,
  to,
}: {
  icon: ElementType;
  title: string;
  description: string;
  to: string;
}) {
  return (
    <div className="group h-full rounded-xl border border-[hsl(var(--secondary))]/50 bg-card p-6 shadow-sm transition hover:shadow-md hover:border-[hsl(var(--secondary))] flex flex-col">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-[hsl(var(--secondary))] p-3 text-[hsl(var(--cta))]">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-[hsl(var(--cta))]">{title}</h3>
      </div>
      <p className="mt-3 text-foreground/80">{description}</p>
      <Button asChild className="mt-auto">
        <Link to={to}>Lihat Selengkapnya</Link>
      </Button>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[hsl(var(--highlight-section))]">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[hsl(var(--cta))]">
              Mathedustats: Sumber Belajar Matematika dan Data Statistik Terpadu
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
              Portal edukasi yang menyajikan modul ajar, LKPD, dan media
              pembelajaran, sekaligus menghubungkan Anda ke data statistik
              terbaru.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button asChild size="lg" className="px-8">
                <Link to="#konten-utama">Jelajahi Konten</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section id="konten-utama" className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={BookOpen}
              title="Modul Ajar"
              description="Akses materi ajar dan panduan lengkap untuk mendukung proses belajar."
              to="/modul-ajar"
            />
            <FeatureCard
              icon={ClipboardList}
              title="LKPD"
              description="Kumpulan LKPD (Lembar Kerja Peserta Didik) yang siap digunakan."
              to="/lkpd"
            />
            <FeatureCard
              icon={MonitorPlay}
              title="Media Pembelajaran"
              description="Media pendukung pembelajaran: video, presentasi, dan interaktif."
              to="/media-pembelajaran"
            />
          </div>
        </div>
      </section>

      {/* External CTA Section */}
      <section className="bg-[hsl(var(--highlight-section))]">
        <div className="container py-12">
          <div className="rounded-2xl border border-[hsl(var(--secondary))]/60 bg-background p-8 text-center shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--cta))]">
              Koneksi Cepat ke Data Statistik
            </h2>
            <p className="mt-2 text-foreground/80">
              Akses data statistik resmi dari BPS Kabupaten Nganjuk.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 px-10 text-base hover:bg-[#7096D1]"
            >
              <a
                href="https://nganjukkab.bps.go.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akses Data Statistik BPS Nganjuk
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
