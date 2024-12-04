import { Button, Footer, Loading, Navbar } from "@components/shared";
import EventCard from "@components/shared/cards/event/EventCard";
import EventSlider from "@components/shared/cards/event/EventSlider";
import ComponentHelmet from "@utils/ComponentHelmet";
import { CiFilter } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Events.scss";

const Events = () => {
  // demo 20 array of clubs
  const events = Array.from({ length: 20 }, () => ({
    _id: "673ac2814c6e89e58af8ca11",
    userType: "club",
    userName: "tamalcodes",
    name: "God Father Org",
    email: "tamalcodes@gmail.com",
    password: "$2a$10$90vC9McfHXpXpLlzUOFeuulorPR9dIQ2ns37uIP5sX5ehyO5C.Mmm",
    cart: [],
    __v: 0,
  }));

  return (
    <>
      <ComponentHelmet type="Clubs" />
      <Navbar />

      <div className="events_header">
        <div className="events_search_parent">
          <input
            type="text"
            name=""
            id=""
            placeholder="Type to begin search, or use the filters"
          />
          <button>
            Filters <CiFilter />
          </button>
        </div>

        <Button className="createevent">
          <FaPlus /> Create An Event
        </Button>
      </div>

      <EventSlider />

      <hr className="events_separator" />

      <div className="events_parent">
        {!events || events?.length === 0 ? (
          <Loading />
        ) : (
          events?.map((event, id) => <EventCard event={event} key={id} />)
        )}
      </div>

      <Footer />
    </>
  );
};

export default Events;
