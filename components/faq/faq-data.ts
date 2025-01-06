export interface FaqItem {
  id: string;
  icon: "book" | "clock" | "search";
  title: string;
  description: string;
  tags: string[];
  links: {
    text: string;
    onClick: () => void;
    active?: boolean;
  }[];
  customContent?: React.ReactNode;
}

export const faqItems: FaqItem[] = [
  {
    id: "registration",
    icon: "book",
    title: "Bagaimana cara daftar Sukanda OneLink?",
    description:
      "Untuk mendaftar di Sukanda OneLink silahkan klik tombol Daftar Sekarang di...",
    tags: ["daftar", "registrasi", "akun", "baru"],
    links: [
      {
        text: "Akses Katalog",
        onClick: () => console.log("Akses Katalog clicked"),
      },
      {
        text: "Cara Mencari Produk",
        onClick: () => console.log("Cara Mencari Produk clicked"),
      },
      {
        text: "Keterangan Produk Lengkap",
        onClick: () => console.log("Keterangan Produk clicked"),
      },
    ],
  },
  {
    id: "operational",
    icon: "clock",
    title: "Jam Operasional Sukanda OneLink",
    description:
      "Order customer yang masuk ke Sukanda OneLink, akan kami proses pada jam berikut:",
    tags: ["jam", "operasional", "waktu", "kerja"],
    links: [
      {
        text: "Menghapus Produk di Keranjang",
        onClick: () => console.log("Menghapus Produk clicked"),
      },
      {
        text: "Menyimpan Produk Pesanan Rutin",
        onClick: () => console.log("Menyimpan Produk clicked"),
      },
      {
        text: "Memesan Produk Rutin",
        onClick: () => console.log("Memesan Produk clicked"),
      },
    ],
  },
  {
    id: "orders",
    icon: "search",
    title: "Bagaimana Cara Melihat Daftar dan Status Pesanan Saya",
    description:
      "Anda bisa melakukan pengecekan seluruh transaksi pembelian dengan cara:",
    tags: ["pesanan", "order", "status", "tracking"],
    links: [
      { text: "Status Pesanan", onClick: () => console.log("Status clicked") },
      {
        text: "Membatalkan Pesanan",
        onClick: () => console.log("Cancel clicked"),
      },
      { text: "Cara Pemesanan", onClick: () => console.log("How to clicked") },
    ],
  },
];
