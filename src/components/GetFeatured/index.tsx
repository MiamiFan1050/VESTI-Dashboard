import { useState } from 'react';
import { Upload, Camera, Sparkles, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface PhotoSubmission {
  basePhoto: File | null;
  clothingItem: File | null;
  resultPhoto: File | null;
  description: string;
}

export function GetFeatured() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submission, setSubmission] = useState<PhotoSubmission>({
    basePhoto: null,
    clothingItem: null,
    resultPhoto: null,
    description: ''
  });

  const handleFileChange = (step: keyof Omit<PhotoSubmission, 'description'>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSubmission(prev => ({ ...prev, [step]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Convert files to base64 strings for email attachment
      const basePhotoStr = submission.basePhoto ? await fileToBase64(submission.basePhoto) : '';
      const clothingItemStr = submission.clothingItem ? await fileToBase64(submission.clothingItem) : '';
      const resultPhotoStr = submission.resultPhoto ? await fileToBase64(submission.resultPhoto) : '';

      await emailjs.send(
        'service_7g7d7m9',
        'template_3uxsp9f',
        {
          basePhoto: basePhotoStr,
          clothingItem: clothingItemStr,
          resultPhoto: resultPhotoStr,
          description: submission.description
        },
        'uUxCq93I6S-H6COPh'
      );

      // Show success message
      alert('Thank you! Your submission has been received.');
      
      // Reset form
      setSubmission({
        basePhoto: null,
        clothingItem: null,
        resultPhoto: null,
        description: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting your photos. Please try again.');
    }
  };

  // Helper function to convert File to base64 string
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-2/3 h-2/3 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-2/3 h-2/3 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of the{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VESTI AI Community
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Share your virtual try-on transformation and inspire others. Selected submissions will be featured on our platform!
          </p>
        </div>

        {/* Submission Steps */}
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                  1
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Upload Your Base Photo</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-purple-200 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange('basePhoto')}
                    className="hidden"
                    id="basePhoto"
                  />
                  <label htmlFor="basePhoto" className="cursor-pointer">
                    <Upload className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                    <p className="text-gray-600">Click to upload your photo or drag and drop</p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                  </label>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-medium text-purple-800 mb-2">Photo Guidelines:</h4>
                  <ul className="text-sm text-purple-700 space-y-2">
                    <li>• Good lighting, preferably natural daylight</li>
                    <li>• Plain background</li>
                    <li>• Full body shot</li>
                    <li>• Wear fitted clothing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                  2
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Upload Clothing Item</h3>
              </div>
              
              <div className="border-2 border-dashed border-purple-200 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange('clothingItem')}
                  className="hidden"
                  id="clothingItem"
                />
                <label htmlFor="clothingItem" className="cursor-pointer">
                  <Camera className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                  <p className="text-gray-600">Upload the clothing item you tried on</p>
                  <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                </label>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold">
                  3
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">Share Your Result</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-2 border-dashed border-purple-200 rounded-xl p-8 text-center hover:border-purple-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange('resultPhoto')}
                    className="hidden"
                    id="resultPhoto"
                  />
                  <label htmlFor="resultPhoto" className="cursor-pointer">
                    <Sparkles className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                    <p className="text-gray-600">Upload your virtual try-on result</p>
                    <p className="text-sm text-gray-500 mt-2">PNG, JPG up to 10MB</p>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your experience (optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="Share your thoughts about using VESTI AI..."
                    value={submission.description}
                    onChange={(e) => setSubmission(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Submit for Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Selected submissions will be featured in our showcase and social media
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 