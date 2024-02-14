

export default function ArticleCard(props) {
    return (
      <>
            <div className="flex-1 m-4">
              <a href={props.path}>
                <img className= "w-96 max-h-48 object-cover" src={props.image} alt={props.alt} />
              </a>
              <p className="font-normal text-black w-96 bg-secondary">
                {props.paragraph}
              </p>
              </div>
      </>
    );
}