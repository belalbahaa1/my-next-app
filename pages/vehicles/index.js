import React from "react";
import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch("https://swapi.dev/api/vehicles/");
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

const Vehicles = ({ data }) => {
  return (
    <div>
      <h2 className="people-heading">Vehicles</h2>
      <div className="people-data">
        {data.results.map((vehicles) => {
          const urlArr = vehicles.url.split("/");
          const id = urlArr[urlArr.length - 2];

          return (
            <div className="people-btn" key={vehicles.name}>
              <Link href={`/vehicles/${id}`}>{vehicles.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vehicles;
