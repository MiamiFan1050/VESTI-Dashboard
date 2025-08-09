import { Upload, QrCode, Camera } from 'lucide-react';

export default function UploadQrCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Get Started in Seconds
        </h2>
        <p className="text-gray-600 text-lg">
          Upload your photo or scan the QR code to start trying on clothes virtually
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Upload Photo Section */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Photo</h3>
            <p className="text-gray-600 text-sm mb-4">
              For the best results, use a full-body photo
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-white text-purple-600 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-purple-200">
              <Upload className="w-4 h-4 mr-2" />
              Choose Photo
            </button>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg mb-4">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scan QR Code</h3>
            <p className="text-gray-600 text-sm mb-4">
              Upload photos from your phone
            </p>
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                <QrCode className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Scan with your phone's camera
            </p>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-2">Quick Setup Instructions:</h4>
        <ol className="text-sm text-gray-600 space-y-2">
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium text-xs mr-2 mt-0.5">1</span>
            <span>Upload a full-body photo or scan the QR code with your phone</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium text-xs mr-2 mt-0.5">2</span>
            <span>Browse your favorite online stores and select any clothing item</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium text-xs mr-2 mt-0.5">3</span>
            <span>See how the item looks on you instantly with our AI technology</span>
          </li>
        </ol>
      </div>
    </div>
  );
} 