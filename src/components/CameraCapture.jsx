import { useRef, useState, useEffect } from "react";

const CameraCapture = ({ onCapture, onClose }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [captured, setCaptured] = useState(false);


  useEffect(() => {
  let stream;
  const getCamera = async () => {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setHasPermission(true);

      // Wait for videoRef.current to be available
      const assignStream = () => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        } else {
          setTimeout(assignStream, 50);
        }
      };
      assignStream();
    } catch {
      alert("Camera access denied or not available.");
      onClose && onClose();
    }
  };
  getCamera();

  return () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };
}, [onClose]);

  // Capture photo from video
  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, 320, 240);
      const dataUrl = canvasRef.current.toDataURL("image/png");
      console.log(dataUrl);
      setCaptured(true);
      onCapture && onCapture(dataUrl);
      // Stop the camera stream
      if (videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-4 rounded shadow-lg">
      <button className="self-end text-black text-xs mb-2" onClick={onClose}>Close</button>
      {hasPermission && !captured && (
        <div className="flex flex-col items-center gap-2">
          <video ref={videoRef} width={320} height={240} autoPlay playsInline muted className="rounded border" />
          <button
            className="px-4 py-2 bg-green-600 text-white rounded"
            onClick={handleTakePhoto}
          >
            Take Picture
          </button>
        </div>
      )}
      <canvas ref={canvasRef} width={320} height={240} style={{ display: "none" }}  />
      {captured && <div className="text-green-700 font-bold">Photo saved!</div>}
    </div>
  );
};

export default CameraCapture;