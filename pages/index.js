import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hackoverflow Society</title>
      </Head>

      <div className="hero min-h-screen" style={{ backgroundImage: `url("/homeoverlay.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold">For Students. By Students.</h1>

            <h3 className="mb-5">Hackoverflow Society</h3>

            <h5 className="mb-5">Autonomous Students' Society Recognized by Chandigarh University</h5>
            <a href="/join-hs" className="btn btn-primary btn-wide">Join HS</a>
          </div>
        </div>
      </div>
    </>
  );
}
