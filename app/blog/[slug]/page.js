
export default function Page({params}) {
    return (
      <main>
      <div>
        hey this is dynamic blog page
        </div>
      </main>
    )
  }
  
//  in order to generate the static params we can use this getStaticParams() ->
/*
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

*/