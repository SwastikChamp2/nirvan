import React, { useState, useEffect } from 'react';
import { Button, Form } from "react-bootstrap";
import { BsPencilSquare } from 'react-icons/bs';
import { MdLogout } from "react-icons/md";
import { MdSave } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import { stateOptions } from '../components/Listing/Listing';
import './PagesCSS/Profile.css';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';



import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';

export default function ProfilePage() {
  const auth = getAuth(); // Get the authentication service
  const db = getFirestore(); // Initialize Firestore
  const [editMode, setEditMode] = useState(true);
  const [isPaidProjectDev, setisPaidProjectDev] = useState(false);
  const [registerAsSeller, setRegisterAsSeller] = useState('no');
  const [state, setState] = useState("");
  const [headingErrorText, setHeadingErrorText] = useState(false);
  const [aboutMe, setAboutMe] = useState('');
  const [pastProjects, setPastProjects] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    bankAccountNo: '',
    bankIFSCCode: '',
    upiID: '',
    upiMobileNumber: '',
    aboutMe: '',
    resumeLink: '',
    pastProjects: '',
  });

  const requiredFieldsNonPaidProjectDev = [
    'fullName',
    'email',
    'mobile',
    'aboutMe',
    'resumeLink',
    'pastProjects',
  ];

  const requiredFieldsPaidProjectDev = [
    ...requiredFieldsNonPaidProjectDev,
    'bankAccountNo',
    'bankIFSCCode'
  ];

  const navigate = useNavigate(); // Get the navigation function

  const fetchData = async (user) => {
    try {
      const docRef = doc(db, 'Users', user.email);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setFormData({
          fullName: userData.name || '',
          email: userData.email || '',
          mobile: userData.mobile || '',
          bankAccountNo: userData.bankAccountNo || '',
          bankIFSCCode: userData.bankIFSCCode.toUpperCase() || '',
          upiID: userData.upiId || '',
          upiMobileNumber: userData.upiMobileNumber || '',
          aboutMe: userData.aboutMe || '',
          pastProjects: userData.pastProjects || '',
          resumeLink: userData.resumeLink || '',

        });
      } else {
        toast.error('No such document!');
      }
    } catch (error) {
      toast.error('Error fetching user data: ' + error.message);
    }
  };

  useEffect(() => {
    if (isPaidProjectDev && requiredFieldsPaidProjectDev.some(field => formData[field].trim() === '')) {
      setHeadingErrorText(true);
      return;
    }
    else {
      setHeadingErrorText(false);
    }

    if (!isPaidProjectDev && requiredFieldsNonPaidProjectDev.some(field => formData[field].trim() === '')) {
      setHeadingErrorText(true);
      return;
    }
    else {
      setHeadingErrorText(false);
    }
  });

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Fetch user data from Firestore
        fetchData(user);
      } else {
        // Redirect to login page if user is not authenticated
        navigate('/login');
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [auth, navigate]);

  if (!formData.email) {
    return <Loader />;
  }

  const pageTitle = editMode ? "Edit Profile Page" : "Profile Page";


  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Logout successful
        alert('Logged out successfully');
        navigate("/login");
      })
      .catch((error) => {
        // Handle logout error
        alert('Error logging out:', error);
      });
  };

  const handleRadioChange = (e) => {
    if (editMode) {
      const value = e.target.value;
      setRegisterAsSeller(value);
      setisPaidProjectDev(value === 'yes');
    }
  };


  const handleSaveClick = async () => {
    // Check if any required field is empty in edit mode

    // ------------------------------------------------------------------------------------------------------------

    if (editMode && isPaidProjectDev && requiredFieldsPaidProjectDev.some(field => formData[field].trim() === '')) {
      toast.error('Please fill in all required fields.');
      return;
    }

    if (editMode && !isPaidProjectDev && requiredFieldsNonPaidProjectDev.some(field => formData[field].trim() === '')) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Validation checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;
    const upimobileRegex = /^\d{10}$/;
    const bankAccountRegex = /^\d{11,17}$/;
    const ifscRegex = /^[A-Za-z]{4}[A-Za-z0-9]{7,13}$/;

    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!mobileRegex.test(formData.mobile)) {
      toast.error('Please enter a valid mobile number.');
      return;
    }

    if (isPaidProjectDev && !bankAccountRegex.test(formData.bankAccountNo)) {
      toast.error('Please enter a valid bank account number.');
      return;
    }

    if (isPaidProjectDev && !ifscRegex.test(formData.bankIFSCCode)) {
      toast.error('Please enter a valid IFSC code.');
      return;
    }

    if (isPaidProjectDev && formData.upiMobileNumber.trim() !== '' && !upimobileRegex.test(formData.upiMobileNumber)) {
      toast.error('Please enter a valid UPI mobile number.');
      return;
    }

    try {
      // Get the reference to the document
      const docRef = doc(db, 'Users', formData.email);
      // Update the document with the new data
      await updateDoc(docRef, {
        name: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        bankAccountNo: formData.bankAccountNo,
        bankIFSCCode: formData.bankIFSCCode.toUpperCase(),
        upiId: formData.upiID,
        upiMobileNumber: formData.upiMobileNumber,
        isPaidProjectDev: isPaidProjectDev,
        aboutMe: aboutMe,
        pastProjects: pastProjects,
        resumeLink: resumeLink,
      });
      // Show success message
      toast.success('Profile updated successfully!');
      // After saving, set edit mode to false
      setEditMode(false);
    } catch (error) {
      // Handle update error
      toast.error('Error updating profile: ' + error.message);
    }
  };



  return (
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-1">


        <MDBRow className="align-items-spaced-between">
          <MDBCol>
            <h2 className="mb-3 listing-form-heading">
              {pageTitle} &nbsp; &nbsp;
              <span>
                {editMode ? (
                  <a href="#" onClick={handleSaveClick} className="edit-button">
                    <BsPencilSquare className="text-secondary pencil-icon" size={24} />
                  </a>
                ) : (
                  <a href="#" onClick={handleEditClick} className="edit-button">
                    <BsPencilSquare className="text-secondary pencil-icon" size={24} />
                  </a>
                )}
              </span>
            </h2>


            {headingErrorText && <p className="text-danger">Please fill all the options</p>}

          </MDBCol>
          <MDBCol className="text-end">
            <a href="#" onClick={handleLogout} className="logout-button">
              <MdLogout size={24} className="logout-icon" />
              <span className="logout-text">Logout</span>
            </a>

          </MDBCol>
        </MDBRow>

        <Form.Label>Do you want to take up Paid Projects ?</Form.Label>
        <div>
          <div className={`custom-radio ${!editMode ? 'disabled' : ''}`}>
            <input
              type="radio"
              value="yes"
              checked={isPaidProjectDev}
              onChange={handleRadioChange}
              id="yes"
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className={`custom-radio ${!editMode ? 'disabled' : ''}`}>
            <input
              type="radio"
              value="no"
              checked={!isPaidProjectDev}
              onChange={handleRadioChange}
              id="no"
            />
            <label htmlFor="no">No</label>
          </div>
        </div>

        <br /> <br />


        <MDBRow>
          <MDBCol lg="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      type="text"
                      name="fullName"

                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={!editMode}
                      required={editMode}
                      maxLength={150}
                    />

                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      type="email"
                      name="email"

                      value={formData.email}
                      onChange={handleChange}
                      disabled={true}
                      required={editMode}
                    />

                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile Number</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput

                      inputMode="text"
                      name="mobile"

                      value={formData.mobile}
                      onChange={handleChange}
                      disabled={!editMode}
                      required={editMode}
                      pattern="[0-9]*" // Use a regex pattern to accept only numbers
                      onInvalid={() => {
                        if (editMode) {
                          alert('Please enter a valid number.');
                        }
                      }}
                    />

                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>About me</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <textarea
                      name="aboutMe"
                      value={formData.aboutMe}
                      onChange={handleChange}
                      disabled={!editMode}
                      required={editMode}
                      className="form-control"
                      style={{ height: "8rem" }}
                      maxLength={1500}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Past Projects and Achievements</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <textarea
                      name="pastProjects"
                      value={formData.pastProjects}
                      onChange={handleChange}
                      disabled={!editMode}
                      required={editMode}
                      className="form-control"
                      style={{ height: "8rem" }}
                      maxLength={1500}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Google Drive Link to your Resume</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <input
                      type="text"
                      name="resumeLink"
                      value={formData.resumeLink}
                      onChange={handleChange}
                      disabled={!editMode}
                      required={editMode}
                      className="form-control"
                      maxLength={150}
                    />
                  </MDBCol>
                </MDBRow>

                {/* FOR PAID PROJECT DEVS ONLY STARTS*/}

                {isPaidProjectDev && (
                  <>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Bank Account No.</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="text"
                          name="bankAccountNo"

                          value={formData.bankAccountNo}
                          onChange={handleChange}
                          disabled={!editMode}
                          required={editMode && isPaidProjectDev}
                        />

                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>Bank IFSC Code</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="text"
                          name="bankIFSCCode"

                          value={formData.bankIFSCCode.toUpperCase()}
                          onChange={handleChange}
                          disabled={!editMode}
                          required={editMode && isPaidProjectDev}
                        />

                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>UPI ID (optional)</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="text"
                          name="upiID"

                          value={formData.upiID}
                          onChange={handleChange}
                          disabled={!editMode}

                        />

                      </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                      <MDBCol sm="3">
                        <MDBCardText>UPI Mobile Number (optional)</MDBCardText>
                      </MDBCol>
                      <MDBCol sm="9">
                        <MDBInput
                          type="number"
                          name="upiMobileNumber"

                          value={formData.upiMobileNumber}
                          onChange={handleChange}
                          disabled={!editMode}

                        />

                      </MDBCol>
                    </MDBRow>

                    {/* FOR PAID PROJECTS ONLY ONLY ENDS*/}

                  </>
                )}
                <br />


              </MDBCardBody>
            </MDBCard>

            {editMode && (
              <div className="text-center">
                <Button className="listing-submit-button" onClick={handleSaveClick}>
                  Save
                </Button>
              </div>
            )}



          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );

}