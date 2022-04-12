import React from "react";
import Link from "next/link";

export async function getStaticProps(context) {
  const res = await fetch("https://swapi.dev/api/people/");
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

const People = ({ data }) => {
  return (
    <div>
      <h2 className="people-heading">People</h2>
      <div className="people-data">
        {data.results.map((people) => {
          const urlArr = people.url.split("/");
          const id = urlArr[urlArr.length - 2];

          return (
            <div className="people-btn" key={people.name}>
              <Link href={`/people/${id}`}>{people.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
