import { Play, FlaskConical, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

function StatChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-foreground/10 px-2.5 py-1 text-xs text-foreground/80">
      {icon}
      {text}
    </span>
  );
}

function MediaCard({
  color,
  icon: Icon,
  title,
  desc,
  action,
}: {
  color: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  action: React.ReactNode;
}) {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-[hsl(var(--secondary))]/60 bg-card shadow-sm flex flex-col">
      <div className={`flex items-center justify-center ${color} p-6 text-white`}>
        <Icon className="h-8 w-8" />
      </div>
      <div className="p-6 flex flex-col h-full">
        <h3 className="font-semibold text-[hsl(var(--cta))]">{title}</h3>
        <p className="mt-2 text-sm text-foreground/80">{desc}</p>
        <div className="mt-auto flex items-center justify-between">
          {action}
        </div>
      </div>
    </div>
  );
}

export default function MediaPembelajaran() {
  return (
    <>
      <section className="bg-[hsl(var(--highlight-section))]">
        <div className="container py-10">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--secondary))] text-[hsl(var(--cta))]">📽️</span>
            <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--cta))]">
              Media Pembelajaran Interaktif
            </h1>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <MediaCard
              color="bg-violet-500"
              icon={Play}
              title="Video Tutorial: Dasar Statistik"
              desc="Video pembelajaran interaktif tentang konsep dasar statistik dan penerapannya dalam analisis data pendidikan."
              action={
                <div className="flex w-full items-center justify-between">
                  <StatChip icon={<span>⏱️</span>} text="15 menit" />
                  <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white">
                    <a href="https://drive.google.com/drive/folders/15PQ5-lqmRX9I4fkBWVZ5mjPMHL96v6ez?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Tonton Video
                    </a>
                  </Button>
                </div>
              }
            />
            <MediaCard
              color="bg-emerald-500"
              icon={FlaskConical}
              title="Simulasi Interaktif: Grafik Data"
              desc="Tools interaktif untuk membuat berbagai jenis grafik dari data siswa dan melihat hasilnya secara real-time."
              action={
                <div className="flex w-full items-center justify-between">
                  <StatChip icon={<span>🧪</span>} text="Praktik" />
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    <a href="https://drive.google.com/drive/folders/1bGiMtcHeew_nFB5W6Yi7UdiMgRzrR84w?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Buka Simulasi
                    </a>
                  </Button>
                </div>
              }
            />
            <MediaCard
              color="bg-orange-500"
              icon={Target}
              title="Kuis Interaktif: Uji Pemahaman"
              desc="Kuis dengan berbagai soal untuk menguji pemahaman tentang statistik pendidikan dan analisis data."
              action={
                <div className="flex w-full items-center justify-between">
                  <StatChip icon={<span>📝</span>} text="20 Soal" />
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
                    <a href="https://drive.google.com/drive/folders/1c5gXZoDGi0A2t5jLqtVyK1tXehgbgjlQ?usp=sharing" target="_blank" rel="noopener noreferrer">
                      Mulai Kuis
                    </a>
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
