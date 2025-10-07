import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

function ModuleCard({
  title,
  summary,
  points,
  href,
}: {
  title: string;
  summary: string;
  points: string[];
  href: string;
}) {
  return (
    <div className="h-full rounded-xl border border-[hsl(var(--secondary))]/60 bg-white/90 p-6 shadow-sm flex flex-col">
      <h3 className="text-[hsl(var(--primary))] font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-foreground/80">{summary}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-foreground/80">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <Button asChild className="mt-auto self-start">
        <a href={href} target="_blank" rel="noopener noreferrer">Baca Modul</a>
      </Button>
    </div>
  );
}

export default function ModulAjar() {
  return (
    <>
      <section className="bg-[hsl(var(--highlight-section))]">
        <div className="container py-10">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-[hsl(var(--secondary))] p-3 text-[hsl(var(--cta))]">
              <BookOpen className="h-6 w-6" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--cta))]">
              Modul Ajar Statistik
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <ModuleCard
              title="Modul 1: Pengantar Statistik Pendidikan"
              summary="Memahami konsep dasar statistik dalam konteks analisa data masuk sekolah dan distribusi siswa."
              points={[
                "Pengertian dan manfaat statistik pendidikan",
                "Jenis-jenis data dalam pendidikan",
                "Metode pengumpulan data siswa",
              ]}
              href="https://drive.google.com/drive/folders/1JXNJ1--rX_RylEuI8lgRZ5xmcfsEgzfU?usp=sharing"
            />
            <ModuleCard
              title="Modul 2: Analisis Data Masuk Sekolah"
              summary="Teknik analisis statistik untuk memahami pola dan tren penerimaan siswa baru."
              points={[
                "Statistika deskriptif data penerimaan",
                "Visualisasi data dengan grafik",
                "Interpretasi hasil analisis",
              ]}
              href="https://drive.google.com/drive/folders/1Vmh0P3K7QIkEkrQPDOg65wiJWLvqBIyu?usp=sharing"
            />
            <ModuleCard
              title="Modul 3: Prediksi dan Proyeksi"
              summary="Metode prediksi jumlah siswa dan proyeksi kebutuhan fasilitas pendidikan."
              points={[
                "Model regresi sederhana",
                "Peramalan pertumbuhan siswa",
                "Perencanaan kapasitas sekolah",
              ]}
              href="https://drive.google.com/drive/folders/1Ht0P-VzAS2o4IKI5v-RghFFzAvxSazBo?usp=sharing"
            />
          </div>
        </div>
      </section>
    </>
  );
}
