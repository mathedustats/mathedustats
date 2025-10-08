import { useState } from "react";
import { BookOpen, Download, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

type ModuleInfo = {
  title: string;
  summary: string;
  points: string[];
  href: string;
};

function ModuleCard({
  title,
  summary,
  points,
  onPreview,
}: {
  title: string;
  summary: string;
  points: string[];
  onPreview: () => void;
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
      <Button className="mt-auto self-start" onClick={onPreview}>
        <Eye className="mr-2 h-4 w-4" /> Baca Modul
      </Button>
    </div>
  );
}

export default function ModulAjar() {
  const modules: ModuleInfo[] = [
    {
      title: "Modul 1: Pengantar Statistik Pendidikan",
      summary:
        "Memahami konsep dasar statistik dalam konteks analisa data masuk sekolah dan distribusi siswa.",
      points: [
        "Pengertian dan manfaat statistik pendidikan",
        "Jenis-jenis data dalam pendidikan",
        "Metode pengumpulan data siswa",
      ],
      href: "/assets/modul-ajar/modul1.pdf",
    },
    {
      title: "Modul 2: Analisis Data Masuk Sekolah",
      summary:
        "Teknik analisis statistik untuk memahami pola dan tren penerimaan siswa baru.",
      points: [
        "Statistika deskriptif data penerimaan",
        "Visualisasi data dengan grafik",
        "Interpretasi hasil analisis",
      ],
      href: "/assets/modul-ajar/modul2.pdf",
    },
    {
      title: "Modul 3: Prediksi dan Proyeksi",
      summary:
        "Metode prediksi jumlah siswa dan proyeksi kebutuhan fasilitas pendidikan.",
      points: [
        "Model regresi sederhana",
        "Peramalan pertumbuhan siswa",
        "Perencanaan kapasitas sekolah",
      ],
      href: "/assets/modul-ajar/modul3.pdf",
    },
  ];

  const [selected, setSelected] = useState<ModuleInfo | null>(null);

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
        <div className="container space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {modules.map((m) => (
              <ModuleCard
                key={m.title}
                title={m.title}
                summary={m.summary}
                points={m.points}
                onPreview={() => setSelected(m)}
              />
            ))}
          </div>

          {selected && (
            <div className="rounded-xl border bg-card">
              <div className="flex items-center justify-between px-4 py-3 border-b">
                <h2 className="font-semibold text-[hsl(var(--primary))]">
                  {selected.title}
                </h2>
                <div className="flex items-center gap-2">
                  <a
                    href={selected.href}
                    download
                    className="inline-flex items-center gap-2 rounded-md bg-[hsl(var(--primary))] px-3 py-2 text-white text-sm"
                  >
                    <Download className="h-4 w-4" /> Unduh PDF
                  </a>
                  <Button variant="secondary" onClick={() => setSelected(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="w-full h-[75vh]">
                  <iframe
                    title={`Preview ${selected.title}`}
                    src={`${selected.href}#view=FitH`}
                    className="w-full h-full rounded-md border"
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Jika pratinjau tidak tampil, Anda dapat
                  {" "}
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-[hsl(var(--primary))]"
                  >
                    membuka file PDF di tab baru
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
