import { BackgroundBeamsWithCollision } from "@/shared/ui/background-beams-with-collision";
import { Navbar } from "../_components/navbar";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative bg-blue-900">
        <div className="mx-auto min-h-max w-[1280px]">
          <Navbar />
        </div>
      </div>
      <div className="mx-auto mb-10 mt-10 flex max-w-7xl flex-col gap-4">
        <div className="text-md font-bold md:text-4xl">Kebijakan Privasi</div>
        <div className="text-md md:text-xl">
          Halo, terima kasih udah pakai Fatih! Kami super peduli sama privasi
          dan keamanan data kamu, jadi di sini kami jelasin gimana caranya
          aplikasi ini nge-handle data kamu.
        </div>
        <div className="text-md font-bold md:text-xl">
          1. No Data Collection
        </div>
        <div className="text-md md:text-xl">
          Tenang aja, Fatih gak ngumpulin data pribadi kamu sama sekali! Semua
          data, kayak catatan solat atau progres ibadah, cuma disimpan di HP
          kamu. Gak ada data yang dikirim atau disimpen di server luar, jadi
          datamu aman.
        </div>
        <div className="text-md font-bold md:text-xl">
          2. Data Disimpan Lokal
        </div>
        <div className="text-md md:text-xl">
          Semua yang kamu catat di aplikasi, 100% disimpan di memori HP kamu.
          Gak ada data yang bakal keluar atau dipake buat hal lain di luar
          aplikasi.
        </div>
        <div className="text-md font-bold md:text-xl">3. Akses Lokasi</div>
        <div className="text-md md:text-xl">
          Fatih butuh akses lokasi cuma buat satu hal: ngitung waktu solat
          sesuai tempat kamu berada. Itu aja. Lokasi kamu gak disimpen,
          dibagikan, atau dikirim ke siapa-siapa. Jadi aman banget deh!
        </div>
        <div className="text-md font-bold md:text-xl">4. Keamanan Data</div>
        <div className="text-md md:text-xl">
          Karena semua datamu disimpan di HP kamu, penting banget buat kamu jaga
          keamanan HP. Pakai password atau kunci biar gak ada yang bisa akses
          data solatmu tanpa izin.
        </div>
        <div className="text-md font-bold md:text-xl">5. Hak Kamu</div>
        <div className="text-md md:text-xl">
          Data yang ada di Fatih sepenuhnya dalam kendali kamu. Mau hapus data?
          Gampang, tinggal hapus aplikasi dari HP, dan semua data lokal kamu
          otomatis hilang.
        </div>
        <div className="text-md font-bold md:text-xl">6. Update Kebijakan</div>
        <div className="text-md md:text-xl">
          Kami mungkin bakal update kebijakan ini dari waktu ke waktu. Kalo ada
          perubahan, kami bakal kasih tahu lewat aplikasi atau platform resmi.
          Jadi, keep an eye on it ya!
        </div>
      </div>
    </main>
  );
}
