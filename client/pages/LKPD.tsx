import { useState } from "react";
import { Download, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

function LevelBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${color}`}>
      {label}
    </span>
  );
}

type LkpdInfo = {
  level: string;
  levelColor: string;
  title: string;
  summary: string;
  activities: string[];
  buttonColor: string;
  href: string;
};

function LkpdCard({
  level,
  levelColor,
  title,
  summary,
  activities,
  buttonColor,
  onPreview,
}: {
  level: string;
  levelColor: string;
  title: string;
  summary: string;
  activities: string[];
  buttonColor: string;
  onPreview: () => void;
}) {
  return (
    <div className="h-full rounded-xl border border-[hsl(var(--secondary))]/60 bg-card p-6 shadow-sm flex flex-col">
      <LevelBadge label={level} color={levelColor} />
      <h3 className="mt-3 text-[hsl(var(--primary))] font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-foreground/80">{summary}</p>
      <div className="mt-3">
        <p className="text-sm font-medium text-foreground">Aktivitas:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
          {activities.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
      <Button className={`mt-auto text-white ${buttonColor}`} onClick={onPreview}>
        <Eye className="mr-2 h-4 w-4" /> Lihat LKPD
      </Button>
    </div>
  );
}

export default function LKPD() {
  const items: LkpdInfo[] = [
    {
      level: "LEVEL DASAR",
      levelColor: "bg-emerald-600",
      title: "LKPD 1: Mengolah Data Siswa",
      summary:
        "Praktik langsung mengolah data jumlah siswa per kelas dan menghitung statistik dasar.",
      activities: [
        "Input data siswa dalam tabel",
        "Menghitung rata-rata, median, dan modus",
        "Membuat bagan batang sederhana",
      ],
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      href: "/assets/lkpd/lkpd1.pdf",
    },
    {
      level: "LEVEL MENENGAH",
      levelColor: "bg-amber-500",
      title: "LKPD 2: Analisis Tren Penerimaan",
      summary:
        "Menganalisis data penerimaan siswa selama 5 tahun terakhir dan membuat interpretasi.",
      activities: [
        "Membuat grafik garis tren",
        "Menghitung persentase perubahan",
        "Menulis kesimpulan dari data",
      ],
      buttonColor: "bg-amber-500 hover:bg-amber-600",
      href: "/assets/lkpd/lkpd2.pdf",
    },
    {
      level: "LEVEL LANJUT",
      levelColor: "bg-rose-600",
      title: "LKPD 3: Proyeksi dan Prediksi",
      summary:
        "Model sederhana untuk memprediksi jumlah siswa tahun depan berdasarkan data historis.",
      activities: [
        "Menghitung tren linear",
        "Membuat prediksi 2 tahun ke depan",
        "Evaluasi akurasi model",
      ],
      buttonColor: "bg-rose-600 hover:bg-rose-700",
      href: "/assets/lkpd/lkpd3.pdf",
    },
  ];

  const [selected, setSelected] = useState<LkpdInfo | null>(null);

  return (
    <>
      <section className="bg-[hsl(var(--highlight-section))]">
        <div className="container py-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--cta))]">📄</span>
            <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--cta))]">
              Lembar Kerja Peserta Didik (LKPD)
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container space-y-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {items.map((it) => (
              <LkpdCard
                key={it.title}
                level={it.level}
                levelColor={it.levelColor}
                title={it.title}
                summary={it.summary}
                activities={it.activities}
                buttonColor={it.buttonColor}
                onPreview={() => setSelected(it)}
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
                    <Download className="h-4 w-4" /> Unduh LKPD
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
                  Jika pratinjau tidak tampil, Anda dapat {" "}
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
