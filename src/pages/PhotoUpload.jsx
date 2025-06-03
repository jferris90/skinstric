import Header from '../components/Header';
import BackBtn from '../components/BackBtn';
import CameraCapture from '../components/CameraCapture';
import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PhotoUpload = () => {
  const fileInputRef = useRef(null);
  const [base64Image, setBase64Image] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const navigate = useNavigate();

  const handleGalleryClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          // Remove everything before and including the first comma
          const base64Only = reader.result.substring(reader.result.indexOf(',') + 1);
          setBase64Image(`/${base64Only}`);
          console.log(base64Only); // Logs only the base64 string
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle camera icon click
  const handleCameraClick = () => {
    if (window.confirm("Do you want to take a picture using your camera?")) {
      setShowCamera(true);
    }
  };

  {/*// When CameraCapture returns a photo, set it as base64Image
  const handleCameraCapture = (dataUrl) => {
    // Remove the data:image/png;base64, prefix if present
    const base64Only = dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
    setBase64Image(`/${base64Only}`);
    localStorage.setItem('userPhoto', dataUrl);
    setShowCamera(false);
  }; */}

  const handleCameraCapture = (dataUrl) => {
    setBase64Image(dataUrl); // Use full data URL for preview
    localStorage.setItem('userPhoto', dataUrl); // Store full data URL
    setShowCamera(false);
};

  useEffect(() => {
    const postImage = async () => {
      if (base64Image) {
        setUploading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        try {
          const res = await axios.post(
            'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
            { 
              "image": base64Image
            }
          );
          setUploading(false);
          if (res.status === 200) {
            localStorage.setItem('skinstricApiResponse', JSON.stringify(res.data.data));
            setUploadSuccess(true);
            alert("Success! Your image was uploaded successfully!")
          }
        } catch (err) {
          setUploading(false);
          alert("Error, your image was not uploaded successfully, please try again with an image file")
        }
      }
    };
    postImage();
  }, [base64Image]);

  useEffect(() => {
    if (uploadSuccess) {
      navigate('/results');
    }
  }, [uploadSuccess, navigate]);

  if (uploading) {
    return (
      <div className="flex justify-center items-center h-screen w-full bg-white">
        <div className="relative flex justify-center items-center w-60 h-60">
          <img
            src="/Rectangle 2780.png"
            className="absolute top-1/2 left-1/2 w-60 h-60 scale-125 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-spin1"
            alt="Rectangle 2780"
          />
          <img
            src="/Rectangle 2781.png"
            className="absolute top-1/2 left-1/2 w-48 h-48 scale-125 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin2"
            alt="Rectangle 2781"
          />
          <img
            src="/Rectangle 2782.png"
            className="absolute top-1/2 left-1/2 w-36 h-36 scale-125 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin3"
            alt="Rectangle 2782"
          />
          <span className="text-[12px] font-roobertTrial text-[#1A1B1C] animate-pulse z-40 absolute top-1/2 left-1/2 ml-4 transform -translate-x-1/2 -translate-y-1/2 w-[126px]">
            Uploading image...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header text="INTRO" />
      <div className="absolute top-12 left-5 text-[8px] font-bold font-roobertTrial uppercase">
        To Start Analysis
      </div>
      <main className="flex justify-center items-center h-[80vh] w-full">
        <div className="flex justify-center items-center gap-62 -ml-12 -mt-2">
          {/* Camera Icon with concentric rectangles */}
          <div className="relative flex justify-center items-center w-44 h-44">
            <img src="/Rectangle 2780.png" className="absolute top-1/2 left-1/2 w-36 h-36 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-spin1" alt="Rectangle 2780" />
            <img src="/Rectangle 2781.png" className="absolute top-1/2 left-1/2 w-32 h-32 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin2" alt="Rectangle 2781" />
            <img src="/Rectangle 2782.png" className="absolute top-1/2 left-1/2 w-28 h-28 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin3" alt="Rectangle 2782" />
            <img src="/camera.png" alt="camera text" className="absolute left-[52%] top-[10%]"></img>
            {base64Image && (
              <img
                src={base64Image}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-full mx-auto my-4"
              />
            )}
            <img
              src="/camera-icon.png"
              alt="Camera Icon"
              className="w-19 h-19 z-40 relative cursor-pointer"
              onClick={handleCameraClick}
            />
            {showCamera && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
                <CameraCapture onCapture={handleCameraCapture} onClose={() => setShowCamera(false)} />
              </div>
            )}
          </div>
          {/* Gallery Icon with concentric rectangles */}
          <div className="relative flex justify-center items-center w-44 h-44">
            <img
              src="/Rectangle 2780.png"
              className="absolute top-1/2 left-1/2 w-36 h-36 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-spin1"
              alt="Rectangle 2780"
            />
            <img
              src="/Rectangle 2781.png"
              className="absolute top-1/2 left-1/2 w-32 h-32 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-spin2"
              alt="Rectangle 2781"
            />
            <img
              src="/Rectangle 2782.png"
              className="absolute top-1/2 left-1/2 w-28 h-28 scale-200 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-spin3"
              alt="Rectangle 2782"
            />
            <img src="/gallery.png" alt="Gallery text" className="absolute z-10 right-[60%] -bottom-[10%]"></img>
            <img src="/gallery-icon.png" alt="Gallery Icon" className="w-19 h-19 z-40 relative cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out" onClick={handleGalleryClick} />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </main>

      <footer className="relative">
        <div className="absolute -bottom-[49px] left-[19px] flex items-center">
          <BackBtn />
        </div>
      </footer>
    </>
  )
}

export default PhotoUpload