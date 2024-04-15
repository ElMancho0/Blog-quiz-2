import Publication from "@/app/components/Publication";
import Footer from "@/app/components/Footer";
import AddPublication from "@/app/components/AddPublication";

export default async function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center bg-beige k p-5">
    <h1 className="text-4xl font-bold text-orange p-5">Crea una publicación</h1>
    <AddPublication/>
    </main>
    <Footer />
    </>
  );
}
