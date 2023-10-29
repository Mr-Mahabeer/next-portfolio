import Link from "next/link";

const Blog = ({ blogs }) => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          {(blogs).slice(0.4)?.map((data, index) => {
            const blog = data.node
            const author = blog?.author?.node
            const featuredImage = blog.featuredImage?.node?.sourceUrl ?? "static/img/blog-1.jpg"
            return <div className="col-md-6 m-15px-tb" key={index}>
              <div className="blog-grid">
                <div className="blog-img">
                  <Link href={`https://www.technojunction.in/post/${blog.slug}`} target="_blank" >
                    <a target="_blank" rel="noreferrer">
                      <img src={featuredImage} title="" alt="" />
                    </a>
                  </Link>
                </div>
                <div className="blog-info">
                  <div className="meta">{blog?.date} - {author.name}</div>
                  <h6>
                    <Link href={`https://www.technojunction.in/post/${blog.slug}`}>
                      <a target="_blank" rel="noreferrer">
                        {blog.title}
                      </a>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          })}

          <div className="col-12 read-more-blog text-center">
            <Link href="https://www.technojunction.in/" target="_blank">
              <a target="_blank" className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
