import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera, FaChevronDown } from "react-icons/fa";
import "./integrate.css";

export default function TourPackages() {
  const [showForm1, setShowForm1] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [showForm4, setShowForm4] = useState(false);
  const [showForm5, setShowForm5] = useState(false);
  const [showForm6, setShowForm6] = useState(false);

  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [description1, setDescription1] = useState("");
  const [previewUrl1, setPreviewUrl1] = useState(null);
  const [fileError1, setFileError1] = useState(false);

  const [previewUrls, setPreviewUrls] = useState([null, null, null, null]);
  const [fileErrors, setFileErrors] = useState([false, false, false, false]);
  const [description2, setDescription2] = useState("");
  const [placesCovered, setPlacesCovered] = useState("");
  const [travelTip, setTravelTip] = useState("");

  const [itineraryItems, setItineraryItems] = useState([]);
  const [form4Items, setForm4Items] = useState([{ name: "", input1: "", input2: "" }]);
  const [inclusionList, setInclusionList] = useState([""]);
  const [specialAttentionList, setSpecialAttentionList] = useState([""]);

  const baseurl = process.env.REACT_APP_API_URL;

  const uploadImage = async (file) => {
    if (!file) return "";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "test-name");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dmfxly4bz/image/upload",
        formData
      );
      return res.data.secure_url;
    } catch (err) {
      console.error("Image upload error:", err);
      return "";
    }
  };


  const handleSingleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadImage(file);
      if (url) {
        setPreviewUrl1(url);
        setFileError1(false);
      } else {
        setPreviewUrl1(null);
        setFileError1(true);
      }
    } else {
      setPreviewUrl1(null);
      setFileError1(true);
    }
  };

  const handleMultipleFileChange = async (e, index) => {
    const file = e.target.files[0];
    const newPreviews = [...previewUrls];
    const newErrors = [...fileErrors];

    if (file) {
      const url = await uploadImage(file);
      if (url) {
        newPreviews[index] = url;
        newErrors[index] = false;
      } else {
        newPreviews[index] = null;
        newErrors[index] = true;
      }
    } else {
      newPreviews[index] = null;
      newErrors[index] = true;
    }

    setPreviewUrls(newPreviews);
    setFileErrors(newErrors);
  };


  const handleItineraryInputChange = (index, field, value) => {
    const updated = [...itineraryItems];
    updated[index][field] = value;
    setItineraryItems(updated);
  };

  const handleForm4Change = (index, field, value) => {
    const updated = [...form4Items];
    updated[index][field] = value;
    setForm4Items(updated);
  };


  const addItinerary = () => {
    setItineraryItems([...itineraryItems, { title: "", details: "" }]);
  };

  const handleSubmit = async () => {
    try {
      // Check if main cover image exists
      if (!previewUrl1) {
        alert("Please upload the main cover image!");
        return;
      }

      // Check if at least one extra image exists
      const uploadedExtras = previewUrls.filter(url => url !== null);

      const payload = {
        title1,
        title2,
        description1,
        image1: previewUrl1, // Cloudinary URL
        images: uploadedExtras,
        description2,
        itineraryItems: itineraryItems,
        form4Items,
        inclusionList,
        specialAttentionList: specialAttentionList,
        placesCovered,
        travelTip,
      };

      const res = await axios.post(`${baseurl}/api/tour/`, payload);
      console.log("Success:", res.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form!");
    }
  };


  return (
    <div className="container mt-5 text-center shadow-lg p-4 rounded outer-shadow">
      <h1 className="integrate-title tittle-a">Add Popular Packages</h1>

      <AccordionButton title="Title, Image & Description" show={showForm1} setShow={setShowForm1}>
        <div className="row bg-secondary p-4 rounded border border-3 custom-shadow">
          <div className="col-md-6 mb-4">
            {previewUrl1 ? (
              <img src={previewUrl1} alt="Preview" className="img-fluid rounded shadow" style={{ minHeight: "300px", minWidth: "500px" }} />
            ) : (
              <Placeholder />
            )}
            <input type="file" className={`form-control ${fileError1 ? "is-invalid" : ""}`} onChange={handleSingleFileChange} />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control mb-3" placeholder="Title 1" value={title1} onChange={(e) => setTitle1(e.target.value)} />
            <input type="text" className="form-control mb-3" placeholder="Title 2" value={title2} onChange={(e) => setTitle2(e.target.value)} />
            {/* <textarea className="form-control" placeholder="Description" rows="10" value={description1} onChange={(e) => setDescription1(e.target.value)} /> */}
          </div>
        </div>
      </AccordionButton>

      <AccordionButton title="Images & Description" show={showForm2} setShow={setShowForm2}>
        <div className="row bg-secondary p-4 rounded border border-3 custom-shadow">
          <div className="col-md-6">
            <div className="row">
              {previewUrls.map((url, i) => (
                <div key={i} className="col-6 mb-3">
                  {url ? <img src={url} alt={`Preview ${i + 1}`} className="img-fluid rounded border shadow" style={{ minHeight: "140px", minWidth: "200px" }} /> : <Placeholder small />}
                  <input type="file" className={`form-control mt-2 ${fileErrors[i] ? "is-invalid" : ""}`} onChange={(e) => handleMultipleFileChange(e, i)} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <textarea className="form-control mb-3" placeholder="Description" rows="5" value={description2} onChange={(e) => setDescription2(e.target.value)} />
            <input type="text" className="form-control mb-3" placeholder="Places Covered" value={placesCovered} onChange={(e) => setPlacesCovered(e.target.value)} />
            <input type="text" className="form-control" placeholder="Travel Tip" value={travelTip} onChange={(e) => setTravelTip(e.target.value)} />
          </div>
        </div>
      </AccordionButton>

      <AccordionButton title="Add Itinerary" show={showItinerary} setShow={setShowItinerary}>
        <div className="bg-white p-4 rounded shadow mb-4">
          {itineraryItems.map((item, index) => (
            <div key={index} className="d-flex flex-column flex-md-row gap-3 mb-3">
              <input type="text" className="form-control w-100 w-md-25" placeholder="Title" value={item.title} onChange={(e) => handleItineraryInputChange(index, "title", e.target.value)} />
              <textarea className="form-control w-100" placeholder="Details" rows="3" value={item.details} onChange={(e) => handleItineraryInputChange(index, "details", e.target.value)} />
            </div>
          ))}
          <button className="btn btn-success" onClick={addItinerary}>+ Add Itinerary</button>
        </div>
      </AccordionButton>

      <AccordionButton title="Destination, Duration, Price" show={showForm4} setShow={setShowForm4}>
        <div className="p-4 bg-white rounded shadow mt-2">
          {form4Items.map((item, index) => (
            <div key={index} className="mb-4">
              <input type="text" className="form-control mb-2" placeholder="Destination" value={item.name} onChange={(e) => handleForm4Change(index, "name", e.target.value)} />
              <input type="text" className="form-control mb-2" placeholder="Duration" value={item.input1} onChange={(e) => handleForm4Change(index, "input1", e.target.value)} />
              <input type="text" className="form-control" placeholder="Price" value={item.input2} onChange={(e) => handleForm4Change(index, "input2", e.target.value)} />
            </div>
          ))}
        </div>
      </AccordionButton>

      <AccordionList title="Special Attention" list={specialAttentionList} setList={setSpecialAttentionList} show={showForm6} setShow={setShowForm6} />
      <AccordionList title="Inclusion" list={inclusionList} setList={setInclusionList} show={showForm5} setShow={setShowForm5} />

      <button className="btn btn-primary mt-4 px-5 py-2" onClick={handleSubmit}>Submit Package</button>
    </div>
  );
}

const handleListChange = (setList, list, index, value) => {
  const updated = [...list];
  updated[index] = value;
  setList(updated);
};

const handleAddListItem = (setList, list) => {
  setList([...list, ""]);
};

const handleRemoveListItem = (setList, list, index) => {
  const updated = list.filter((_, i) => i !== index);
  setList(updated);
};

function AccordionButton({ title, show, setShow, children }) {
  return (
    <>
      <button className="btn btn-secondary w-100 mb-4 d-flex justify-content-between align-items-center" onClick={() => setShow(!show)}>
        <span>{title}</span>
        <FaChevronDown className={`ms-2 transition ${show ? "rotate-180" : ""}`} />
      </button>
      {show && children}
    </>
  );
}

function AccordionList({ title, list, setList, show, setShow }) {
  return (
    <AccordionButton title={title} show={show} setShow={setShow}>
      <div className="bg-secondary p-4 rounded border border-3 custom-shadow">
        {list.map((item, index) => (
          <div className="d-flex mb-3" key={index}>
            <input type="text" className="form-control me-2" placeholder={`${title} ${index + 1}`} value={item} onChange={(e) => handleListChange(setList, list, index, e.target.value)} />
            {list.length > 1 && (
              <button className="btn btn-danger" onClick={() => handleRemoveListItem(setList, list, index)}>&times;</button>
            )}
          </div>
        ))}
        {list.length < 6 && (
          <button className="btn btn-outline-light mt-2" onClick={() => handleAddListItem(setList, list)}>+ Add More</button>
        )}
      </div>
    </AccordionButton>
  );
}

function Placeholder({ small = false }) {
  return (
    <div className="d-flex justify-content-center align-items-center border rounded shadow" style={{ height: small ? "140px" : "300px", backgroundColor: "#e9ecef" }}>
      <FaCamera size={small ? 30 : 50} className="text-secondary" />
    </div>
  );
}


