import image from "../assets/news.jpg";
const NewsItems = ({ title, description, src, url }) => {
  return (
    <>
      <div
        className="card bg-dark text-light d-inline-block m-3 p-2"
        style={{ maxWidth: "300px" }}
      >
        <img
          src={src ? src : image}
          style={{ height: "200px", width: "280px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50)}</h5>
          <p className="card-text">
            {description ? description.slice(0, 90) : "Latest News Updates"}
          </p>
          <a href={url} className="btn btn-primary">
            Read more...
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
