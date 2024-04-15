import PublicationCard from "@/app/components/Publication";
import Footer from "@/app/components/Footer";

async function fetchPublications() {

  const res = await fetch("https://blog-assigment-api.vercel.app/api/publications", {
    cache: "no-store",
  });
  const data = await res.json();
  return {
    props: {
      data,
    }
  }
}

export default async function Home() {

  const productsExport = await fetchPublications();
  return (
    <>
    <main className="flex min-h-screen flex-col items-center bg-beige k p-5">
    <h1 className="text-4xl p-5 font-bold text-orange">Últimas Publicaciones</h1>
      <div className=' flex flex-col md:grid md:grid-cols-2 gap-4 m-5 items-center justify-center '>
        {productsExport.props.data.map((item: any) => (
          <PublicationCard key={item.id} id={item.id} title={item.title} body={item.body} name={item.author} />
        ))}
      </div>
    </main>
    <Footer />
    </>
  );
}

