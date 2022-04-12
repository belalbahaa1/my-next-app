import React from "react";
import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch("https://swapi.dev/api/planets/");
  const data = await res.json();
  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

const Planets = ({ data }) => {
  return (
    <div>
      <h2 className="people-heading">Planets</h2>
      <div className="people-data">
        {data.results.map((planets) => {
          const urlArr = planets.url.split("/");
          const id = urlArr[urlArr.length - 2];

          return (
            <div className="people-btn" key={planets.name}>
              <Link href={`/planets/${id}`}>{planets.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Planets;
