export default function ArticleCard(props) {
  return (
    <>
      <div className="max-w-md m-6 hover:scale-105">
        <a href={props.path} target="_blank">
          <img
            className="h-48 w-full object-cover max-w-72"
            src={props.image}
            alt={props.alt}
          />

          <p className="font-normal text-black bg-secondary p-3 overflow-hidden max-w-72 lg:max-h-28">
            {props.paragraph}
          </p>
        </a>
      </div>
    </>
  );
}
