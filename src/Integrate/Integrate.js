import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCamera, FaChevronDown } from "react-icons/fa";
import "./integrate.css";

export default function ImageUploadForm() {
  // Section 1
  const [showForm1, setShowForm1] = useState(false);
  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");
  const [description1, setDescription1] = useState("");
  const [previewUrl1, setPreviewUrl1] = useState(null);
  const [fileError1, setFileError1] = useState(false);

  // Section 2
  const [showForm2, setShowForm2] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([null, null, null, null]);
  const [fileErrors, setFileErrors] = useState([false, false, false, false]);
  const [description2, setDescription2] = useState("");

  // Itinerary Section
  const [showItinerary, setShowItinerary] = useState(false);
  const [itineraryItems, setItineraryItems] = useState([]);

  // Section 4 (Custom Inputs)
  const [showForm4, setShowForm4] = useState(false);
  const [form4Items, setForm4Items] = useState([
    { name: '', input1: '', input2: '', input3: '' }
  ]);

  const handleForm4Change = (index, field, value) => {
    const updated = [...form4Items];
    updated[index][field] = value;
    setForm4Items(updated);
  };

  const addForm4Item = () => {
    setForm4Items([...form4Items, { name: '', input1: '', input2: '', input3: '' }]);
  };

  // Section 5
  const [showForm5, setShowForm5] = useState(false);
  const [title5_1, setTitle5_1] = useState("");
  const [title5_2, setTitle5_2] = useState("");
  const [description5, setDescription5] = useState("");
  const [previewUrl5, setPreviewUrl5] = useState(null);
  const [fileError5, setFileError5] = useState(false);

  const handleSingleFileChange = (e, setPreview, setError) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setError(false);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
      setError(true);
    }
  };

  const handleMultipleFileChange = (e, index) => {
    const file = e.target.files[0];
    const newPreviews = [...previewUrls];
    const newErrors = [...fileErrors];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews[index] = reader.result;
        newErrors[index] = false;
        setPreviewUrls(newPreviews);
        setFileErrors(newErrors);
      };
      reader.readAsDataURL(file);
    } else {
      newPreviews[index] = null;
      newErrors[index] = true;
      setPreviewUrls(newPreviews);
      setFileErrors(newErrors);
    }
  };

  const addItinerary = () => {
    setItineraryItems([...itineraryItems, { title: "", details: "" }]);
  };

  const handleItineraryInputChange = (index, field, value) => {
    const updated = [...itineraryItems];
    updated[index][field] = value;
    setItineraryItems(updated);
  };

  return (
    <div className="container mt-5 text-center shadow-lg p-4 rounded outer-shadow">
      {/* Section 1 */}
      <h1 className="integrate-title tittle-a">Add Popular Packages</h1>
      <button className="btn btn-secondary w-100 mb-4 d-flex justify-content-between align-items-center px-4 py-2 mx-auto" onClick={() => setShowForm1(!showForm1)} style={{ minWidth: "260px" }}>
      
        <span >Title, Image & Description</span>
        <FaChevronDown className={`ms-2 transition ${showForm1 ? "rotate-180" : ""}`} />
      </button>

      {showForm1 && (
        <div className="row bg-secondary p-4 rounded border border-3 custom-shadow">
          <div className="col-md-6 text-center mb-4 mb-md-0">
            {previewUrl1 ? (
              <img src={previewUrl1} alt="Preview" className="img-fluid rounded shadow" style={{ maxHeight: "300px" }} />
            ) : (
              <div className="d-flex justify-content-center align-items-center border rounded shadow" style={{ height: "300px", backgroundColor: "#e9ecef" }}>
                <FaCamera size={50} className="text-secondary" />
              </div>
            )}
            <input type="file" className={`form-control ${fileError1 ? "is-invalid" : ""}`} onChange={(e) => handleSingleFileChange(e, setPreviewUrl1, setFileError1)} />
            {fileError1 && <div className="invalid-feedback d-block text-start">Please select a file.</div>}
          </div>
          <div className="col-md-6">
            <input type="text" placeholder="Title 1" className="form-control mb-3" value={title1} onChange={(e) => setTitle1(e.target.value)} />
            <input type="text" placeholder="Title 2" className="form-control mb-3" value={title2} onChange={(e) => setTitle2(e.target.value)} />
            <textarea placeholder="Description" rows="10" className="form-control" value={description1} onChange={(e) => setDescription1(e.target.value)}></textarea>
          </div>
        </div>
      )}

      {/* Section 2 */}
      <button className="btn btn-secondary w-100 mb-4 d-flex justify-content-between align-items-center px-4 py-2 mx-auto" onClick={() => setShowForm2(!showForm2)} style={{ minWidth: "260px" }}>
        <span>Images & Description</span>
        <FaChevronDown className={`ms-2 transition ${showForm2 ? "rotate-180" : ""}`} />
      </button>

      {showForm2 && (
        <div className="row bg-secondary w-100 p-4 rounded border border-3 custom-shadow">
          <div className="col-md-6 text-center">
            <div className="row">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="col-6 mb-3">
                  {previewUrls[i] ? (
                    <img src={previewUrls[i]} alt={`Preview ${i + 1}`} className="img-fluid rounded border shadow" style={{ maxHeight: "140px" }} />
                  ) : (
                    <div className="d-flex justify-content-center align-items-center border rounded shadow" style={{ height: "140px", backgroundColor: "#e9ecef" }}>
                      <FaCamera size={30} className="text-secondary" />
                    </div>
                  )}
                  <input type="file" className={`form-control mt-2 ${fileErrors[i] ? "is-invalid" : ""}`} onChange={(e) => handleMultipleFileChange(e, i)} />
                  {fileErrors[i] && <div className="invalid-feedback d-block text-start">Please select a file.</div>}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <textarea placeholder="Description" rows="14" className="form-control" value={description2} onChange={(e) => setDescription2(e.target.value)}></textarea>
          </div>
        </div>
      )}

      {/* Itinerary Section */}
      <button className="btn btn-secondary w-100 mb-4 d-flex justify-content-between align-items-center px-4 py-2 mx-auto" onClick={() => setShowItinerary(!showItinerary)} style={{ minWidth: "260px" }}>
        <span>Add Itinerary</span>
        <FaChevronDown className={`ms-2 transition ${showItinerary ? "rotate-180" : ""}`} />
      </button>

      {showItinerary && (
        <div className="bg-white p-4 rounded shadow mb-4">
          {itineraryItems.map((item, index) => (
            <div key={index} className="d-flex flex-column flex-md-row gap-3 mb-3">
              <input type="text" placeholder="Title" className="form-control w-100 w-md-25" value={item.title} onChange={(e) => handleItineraryInputChange(index, "title", e.target.value)} />
              <textarea placeholder="Details" rows="3" className="form-control w-100" value={item.details} onChange={(e) => handleItineraryInputChange(index, "details", e.target.value)}></textarea>
            </div>
          ))}
          <button onClick={addItinerary} className="btn btn-success">+ Add Item</button>
        </div>
      )}

      {/* Section 4 - Custom Inputs */}
      <button className="btn btn-secondary w-100 mb-4 px-4 py-2 d-flex justify-content-between align-items-center" onClick={() => setShowForm4(!showForm4)}>
        <span>Title, Image & Description</span>
        <FaChevronDown className={`ms-2 transition ${showForm4 ? "rotate-180" : ""}`} />
      </button>

      {showForm4 && (
        <div className="p-4 bg-white rounded shadow mt-2">
          {form4Items.map((item, index) => (
            <div className="mb-4 border rounded p-3" key={index}>
              <div className="row mb-3">
                <div className="col-md-3 d-flex align-items-center fw-bold">Name</div>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={item.name} onChange={(e) => handleForm4Change(index, 'name', e.target.value)} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-3 d-flex align-items-center fw-bold">Input 1</div>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={item.input1} onChange={(e) => handleForm4Change(index, 'input1', e.target.value)} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 d-flex align-items-center fw-bold">Input 2</div>
                <div className="col-md-9">
                  <input type="text" className="form-control" value={item.input2} onChange={(e) => handleForm4Change(index, 'input2', e.target.value)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Section 5 */}
      <button className="btn btn-secondary w-100 mb-4 px-4 py-2 d-flex justify-content-between align-items-center" onClick={() => setShowForm5(!showForm5)}>
        <span>Title, Image & Description</span>
        <FaChevronDown className={`ms-2 transition ${showForm5 ? "rotate-180" : ""}`} />
      </button>

      {showForm5 && (
        <div className="row ms-5">
          <div className="col-md-6">
            {[...Array(10)].map((_, i) => (
              <div className="form-check mb-2" key={`left-${i}`}>
                <input type="checkbox" className="form-check-input" id={`leftCheck${i}`} name="checkboxGroup" />
                <label className="form-check-label" htmlFor={`leftCheck${i}`}>Option {i + 1}</label>
              </div>
            ))}
          </div>
          <div className="col-md-6">
            {[...Array(10)].map((_, i) => (
              <div className="form-check mb-2" key={`right-${i}`}>
                <input type="checkbox" className="form-check-input" id={`rightCheck${i}`} name="checkboxGroup" />
                <label className="form-check-label" htmlFor={`rightCheck${i}`}>Option {i + 11}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
