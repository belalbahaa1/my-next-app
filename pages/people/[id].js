export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://swapi.dev/api/people");
  const data = await res.json();
  console.log(data);

  const paths = data.results.map((post) => {
    const urlArr = post.url.split("/");
    const id = urlArr[urlArr.length - 2];

    return {
      params: { id: id },
    };
  });
  return { paths, fallback: false };
}

import Link from "next/link";

export default function People({ data }) {
  return (
    <div>
      <Link href="/people">
        <a>Back</a>
      </Link>
      <h1 className="people-name">{`Person ${data.name}`}</h1>
      <p>
        <span>Gender: </span>
        {data.gender}
      </p>
      <p>
        <span>Height: </span>
        {data.height}
      </p>
      <p>
        <span>Mass: </span>
        {data.mass}
      </p>
      <p>
        <span>birthYear: </span>
        {data.birth_year}
      </p>
      <p>
        <span>eyeColor: </span>
        {data.eye_color}
      </p>
    </div>
  );
}
