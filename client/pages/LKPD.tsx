import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

function LevelBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${color}`}>
      {label}
    </span>
  );
}

function LkpdCard({
  level,
  levelColor,
  title,
  summary,
  activities,
  buttonColor,
  href,
}: {
  level: string;
  levelColor: string;
  title: string;
  summary: string;
  activities: string[];
  buttonColor: string;
  href: string;
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
      <Button asChild className={`mt-auto text-white ${buttonColor}`}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Download className="mr-2 h-4 w-4" /> Download LKPD
        </a>
      </Button>
    </div>
  );
}

export default function LKPD() {
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
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <LkpdCard
              level="LEVEL DASAR"
              levelColor="bg-emerald-600"
              title="LKPD 1: Mengolah Data Siswa"
              summary="Praktik langsung mengolah data jumlah siswa per kelas dan menghitung statistik dasar."
              activities={[
                "Input data siswa dalam tabel",
                "Menghitung rata-rata, median, dan modus",
                "Membuat bagan batang sederhana",
              ]}
              buttonColor="bg-emerald-600 hover:bg-emerald-700"
              href="https://drive.google.com/drive/folders/1c5gXZoDGi0A2t5jLqtVyK1tXehgbgjlQ?usp=sharing"
            />
            <LkpdCard
              level="LEVEL MENENGAH"
              levelColor="bg-amber-500"
              title="LKPD 2: Analisis Tren Penerimaan"
              summary="Menganalisis data penerimaan siswa selama 5 tahun terakhir dan membuat interpretasi."
              activities={[
                "Membuat grafik garis tren",
                "Menghitung persentase perubahan",
                "Menulis kesimpulan dari data",
              ]}
              buttonColor="bg-amber-500 hover:bg-amber-600"
              href="https://drive.google.com/drive/folders/1bGiMtcHeew_nFB5W6Yi7UdiMgRzrR84w?usp=sharing"
            />
            <LkpdCard
              level="LEVEL LANJUT"
              levelColor="bg-rose-600"
              title="LKPD 3: Proyeksi dan Prediksi"
              summary="Model sederhana untuk memprediksi jumlah siswa tahun depan berdasarkan data historis."
              activities={[
                "Menghitung tren linear",
                "Membuat prediksi 2 tahun ke depan",
                "Evaluasi akurasi model",
              ]}
              buttonColor="bg-rose-600 hover:bg-rose-700"
              href="https://drive.google.com/drive/folders/15PQ5-lqmRX9I4fkBWVZ5mjPMHL96v6ez?usp=sharing"
            />
          </div>
        </div>
      </section>
    </>
  );
}
