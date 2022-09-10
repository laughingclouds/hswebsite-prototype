import Head from "next/head";
import Image from "next/image";
import Anchor from "../components/Anchor";

import ourgoallogo from "../public/ourgoallogo.png"

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
            <Anchor href="/join-hs" className="btn btn-primary btn-wide" override>Join HS</Anchor>
          </div>
        </div>
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><Image src={ourgoallogo} alt="" /></figure>

        <div className="card-body">
          <h2 className="card-title">Our Goal</h2>
          <p>Hackoverflow Society strives to make students industry-ready and equip them with the latest technologies. We believe that education is the passport to the future, and we work towards making education accessible to all.</p>
          <div className="card-actions justify-end">
            <Anchor href="/initiatives" className="btn btn-primary" override>Our Initiatives</Anchor>
          </div>
        </div>
      </div>
    </>
  );
}
