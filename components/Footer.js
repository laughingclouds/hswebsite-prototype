import Image from 'next/image';
import footerLogo from '../public/htslogo-192x192.png';
import Anchor from './Anchor';

const FOOTER_LINKS = [
  ["Events", {
    "Upcoming Events": "/events/upcoming-events",
    "All Events": "/events/all-events",
    "Hackoverflow 3.0": "/hacoverflow-2020",
    "Google HashCode 2021": "/google-hashcode-2021",
    "Freshers' Carnival": "/freshers-carnival",
    "Hack 1-on-1": "/hack-1-on-1",
    "Hacktober Fest": "/hacktober-fest"
  }
  ],
  ["About HS", {
      "Hackoverflow Society is a student-driven technical society recognized by Chandigarh University. It was officially inducted as a society by the Hon’ble Chancellor of Chandigarh University in 2020.": ""
    }
  ],
  ["Contact", {
    "hackoverflow@cumail.in": "mailto:hackoverflow@cumail.in",
    "+91 1234567890": "tel:+91 1234567890",
    "Chandigarh University, Gharuan, Mohali, Punjab, India": "https://cuchd.in"
  }]
];

function Column({ title = "", children, rows }) {
  const rowNames = Object.keys(rows);
  return (
    <div>
      <span className='footer-title'>{title}</span>
      {rowNames.map((rowName, i) => {
        if (rows[rowName] !== "") {
          return (
            <Anchor href={rows[rowName]} key={i} className="w-36 link-hover" override>
              {rowName}
            </Anchor>
          );
        }
        return <p className='w-96'>{rowName}</p>
      })}
      {children}
    </div>
  );
}
export default function Footer({ className = "" }) {
  const classes = "footer p-10 bg-base-200 text-base-content justify-items-center " + className;

  return (
    <footer className={classes}>
      <div className='justify-items-center'>
        <Image src={footerLogo} />
        <p>Hackoverflow Society.<br />With love, since 2017</p>
      </div>

      {FOOTER_LINKS.map((column, i) => {
        return <Column title={column[0]} rows={column[1]} />;
      })}

    </footer>
  );
}