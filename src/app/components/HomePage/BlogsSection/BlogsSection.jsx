import PrimaryBtn from "../../shared/Buttons/PrimaryBtn";
import SectionHeading from "../../shared/SectionHeading";
import SingleBlogCard from "../../shared/SingleBlogCard";

const BlogsSection = () => {
  return (
    <div className="px-8 py-20 bg-[#eee] text-center">
      {/* Section Heading */}
      <SectionHeading
        heading={"From Our Blogs"}
        subHeading={"Our Recent Posts"}
      />
      <div className="blog-layout mt-8 text-start mb-12">
        {blogs.map((blog, index) => (
          <SingleBlogCard blog={blog} key={index} />
        ))}
      </div>
      <PrimaryBtn text={"SEE MORE"} path={"/"} />
    </div>
  );
};

export default BlogsSection;

const blogs = [
  {
    id: 1,
    title: "Quaerat eligendi dolores autem omnis sed",
    image: "/images/blog/medium-size/1.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-09-2024",
  },
  {
    id: 2,
    title: "Nulla voluptatum maiores dolorem nobis",
    image: "/images/blog/medium-size/2.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-01-2025",
  },
  {
    id: 3,
    title: "Laudantium minus excepturi expedita dolore",
    image: "/images/blog/medium-size/3.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "12-12-2024",
  },
  {
    id: 4,
    title: "Aliquam nihil dolorem beatae totam tempora",
    image: "/images/blog/medium-size/4.jpg",
    description:
      "Maiores accusamus unde nulla quaerat deserunt, beatae molestias blanditiis aut recusandae saepe, quis, culpa voluptatum?",
    date: "29-02-2025",
  },
];
