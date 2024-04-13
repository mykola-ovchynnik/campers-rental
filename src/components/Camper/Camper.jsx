export const Camper = () => {
  return (
    <li>
      <img />
      <div info>
        <div className="namePrice">
          <h3>name</h3>
          <p>price</p>
          <button>favorite</button>
        </div>
        <div className="reviewLocation">
          <span>
            <svg>star</svg>
            rating
            <p>total reviews</p>
          </span>
          <span>
            <svg>map_pin_svg</svg>
            location
          </span>
        </div>
        <p>desciption</p>
        <ul>
          list of attributes
          <li>
            <svg></svg>2 adults
          </li>
        </ul>
        <button>show more button</button>
      </div>
    </li>
  );
};
