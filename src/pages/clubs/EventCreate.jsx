import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import '../../styles/EventCreate.css';
import Events from '../../assets/pictures/CreateEventsPic.svg';
import { CreateEvent } from '../../service/MilanApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default function EventCreate() {
  
  
  const [eventdetails, seteventdetails] = useState({
    eventname: '',
    eventdate: '',
    eventtime: '',
    eventlocation: '',
    eventdescription: '',
  });

  const handleChange = (e) => {
    seteventdetails({ ...eventdetails, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const eventresponse = await CreateEvent(eventdetails);

    if (eventresponse.status === 200) {
      toast('🌈 Adding your Event !', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        onClose: () => {
          seteventdetails({
            eventname: '',
            eventdate: '',
            eventtime: '',
            eventlocation: '',
            eventdescription: '',
          });
        },
      });
    }
  };

  
  const { height, width } = useWindowDimensions();
    if (width < 400 ) {
    const placeholder1 = "What's your event called?";
    const placeholder2 = "Date of the event?";
    const placeholder3 = "Time of the event? (24 Hours format, IST)";
    const placeholder4 = "Where will the event take place?";
    const placeholder5 = "Tell us something more about the event";
    const label1 = "";
    const label2 = "";
    const label3 = "";
    const label4 = "";
    const label5 = "";
}
else { 
    const placeholder1 = "";
    const placeholder2 = "";
    const placeholder3 = "";
    const placeholder4 = "";
    const placeholder5 = "";
    const label1 = "What's your event called?";
    const label2 = "Date of the event?";
    const label3 = "Time of the event? (24 Hours format, IST)";
    const label4 = "Where will the event take place?";
    const label5 = "Tell us something more about the event";
  }
  
  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={Events} width="90%" alt="profile-img"></img>
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: 'auto' }}>
                <h1 className="eventCreateWelcome">
                  Create an event for your club
                </h1>
                <div className="form-outline">
                  <label>{label1}</label>
                  <input
                    type="text"
                    className="eventCreateFormInput form-control "
                    id="eventName"
                    name="eventname"
                    required
                    placeholder={placeholder1}
                    value={eventdetails.eventname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline">
                  <label>{label2}</label>
                  <input
                    type="text"
                    className="eventCreateFormInput form-control form-control-md"
                    id="eventdate"
                    name="eventdate"
                    required
                    placeholder={placeholder2}
                    value={eventdetails.eventdate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline">
                  <label>{label3}</label>
                  <input
                    type="text"
                    className="eventCreateFormInput form-control form-control-md"
                    id="eventtime"
                    name="eventtime"
                    required
                    placeholder={placeholder3}
                    value={eventdetails.eventtime}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline">
                  <label>{label4}</label>
                  <input
                    type="text"
                    className="eventCreateFormInput form-control form-control-md"
                    id="eventlocation"
                    name="eventlocation"
                    required
                    placeholder={placeholder4}
                    value={eventdetails.eventlocation}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline">
                  <label>{label5}</label>
                  <textarea
                    type="text"
                    className="eventCreateFormInput form-control form-control-lg"
                    id="eventTime"
                    name="eventdescription"
                    placeholder={placeholder5}
                    value={eventdetails.eventdescription}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn  eventCreateSubmit"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Create
                </button>
                <br></br> <br></br>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
