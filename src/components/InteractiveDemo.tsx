import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DemoOption {
  id: string
  name: string
  image: string
  gender: 'male' | 'female'
}

const people: DemoOption[] = [
  { id: 'model-01', name: 'Sarah', image: '/images/sarah-before.jpg', gender: 'female' },
  { id: 'model-02', name: 'Alex', image: '/images/alex-before', gender: 'female' },
  { id: 'model-03', name: 'Jordan', image: '/images/Model_03_beforee.jpg', gender: 'male' },
  { id: 'model-04', name: 'Taylor', image: '/images/Model_04_before.jpg', gender: 'male' },
]

const womenClothing: DemoOption[] = [
  { id: 'w-clothing-01', name: 'Lime Green Bikini', image: '/images/Sarahb-1.webp', gender: 'female' },
  { id: 'w-clothing-02', name: 'Black & White Bikini', image: '/images/Sarahb-2.webp', gender: 'female' },
  { id: 'w-clothing-03', name: 'White One-Shoulder Bikini', image: '/images/Sarahb-3.webp', gender: 'female' },
  { id: 'w-clothing-04', name: 'Metallic Bronze Bikini', image: '/images/Sarahb-4.webp', gender: 'female' },
]

const menClothing: DemoOption[] = [
  { id: 'm-clothing-01', name: 'Casual T-Shirt', image: '/images/Clothing_01.jpeg', gender: 'male' },
  { id: 'm-clothing-02', name: 'Denim Jacket', image: '/images/Clothing_02.jpg', gender: 'male' },
  { id: 'm-clothing-03', name: 'Formal Shirt', image: '/images/Clothing_04.jpg', gender: 'male' },
  { id: 'm-clothing-04', name: 'Hoodie', image: '/images/Clothing_05.png', gender: 'male' },
]

const results: Record<string, Record<string, string>> = {
  'model-01': {
    'w-clothing-01': '/images/Sarahr-1.webp',
    'w-clothing-02': '/images/Sarahr-2.webp',
    'w-clothing-03': '/images/Sarahr-3.webp',
    'w-clothing-04': '/images/Sarahr-4.webp',
  },
  'model-02': {
    'w-clothing-01': '/images/alex-r1',
    'w-clothing-02': '/images/alex-r2',
    'w-clothing-03': '/images/alex-r3',
    'w-clothing-04': '/images/alex-r4',
  },
  'model-03': {
    'm-clothing-01': '/images/Model_09_after.jpeg',
    'm-clothing-02': '/images/Model_11_after.jpg',
    'm-clothing-03': '/images/Model_12_after.jpg',
    'm-clothing-04': '/images/Model_10_after.png',
  },
  'model-04': {
    'm-clothing-01': '/images/Model_13_after.jpg',
    'm-clothing-02': '/images/Model_14_after.jpg',
    'm-clothing-03': '/images/Model_after_16.jpg',
    'm-clothing-04': '/images/Model_15_after.jpg',
  },
}

export function InteractiveDemo() {
  const [selectedPerson, setSelectedPerson] = useState<DemoOption | null>(null)
  const [selectedGarment, setSelectedGarment] = useState<DemoOption | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [activeStep, setActiveStep] = useState<'person' | 'clothing' | 'result'>('person')
  const [viewMode, setViewMode] = useState<'before' | 'after'>('after')

  const handlePersonSelect = (person: DemoOption) => {
    setSelectedPerson(person)
    setSelectedGarment(null)
    setShowResult(false)
    setViewMode('after')
    setActiveStep('clothing')
  }

  const handleTryOn = () => {
    if (!selectedPerson || !selectedGarment) return
    
    setIsLoading(true)
    setShowResult(false)
    setViewMode('after')
    setActiveStep('result')
    
    setTimeout(() => {
      setIsLoading(false)
      setShowResult(true)
    }, 1500)
  }

  const canTryOn = selectedPerson && selectedGarment
  const availableClothing = selectedPerson?.gender === 'male' ? menClothing : womenClothing

  return (
    <div className="w-full py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm border border-purple-200 mb-4 sm:mb-6">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Interactive Demo</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
            Experience{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VESTI Magic
            </span>
          </h2>
          
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto px-2">
            Try our AI-powered virtual try-on technology in seconds. Select a model, choose clothing, and see the magic happen.
          </p>
        </div>

        {/* Demo Container */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
          {/* Step Indicator */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-center space-x-4 sm:space-x-8">
              <div className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-300 ${
                activeStep === 'person' ? 'text-white' : 'text-white/60'
              }`}>
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  activeStep === 'person' 
                    ? 'bg-white text-purple-600' 
                    : 'bg-white/20 text-white'
                }`}>
                  1
                </div>
                <span className="text-xs sm:text-sm font-medium">Choose Model</span>
              </div>
              
              <div className={`w-6 sm:w-12 h-px transition-all duration-300 ${
                activeStep === 'clothing' || activeStep === 'result' 
                  ? 'bg-white' 
                  : 'bg-white/30'
              }`}></div>
              
              <div className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-300 ${
                activeStep === 'clothing' || activeStep === 'result' ? 'text-white' : 'text-white/60'
              }`}>
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  activeStep === 'clothing' || activeStep === 'result'
                    ? 'bg-white text-purple-600' 
                    : 'bg-white/20 text-white'
                }`}>
                  2
                </div>
                <span className="text-xs sm:text-sm font-medium">Select Clothing</span>
              </div>
              
              <div className={`w-6 sm:w-12 h-px transition-all duration-300 ${
                activeStep === 'result' ? 'bg-white' : 'bg-white/30'
              }`}></div>
              
              <div className={`flex items-center space-x-1 sm:space-x-2 transition-all duration-300 ${
                activeStep === 'result' ? 'text-white' : 'text-white/60'
              }`}>
                <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-300 ${
                  activeStep === 'result'
                    ? 'bg-white text-purple-600' 
                    : 'bg-white/20 text-white'
                }`}>
                  3
                </div>
                <span className="text-xs sm:text-sm font-medium">See Result</span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 sm:p-8">
            <AnimatePresence mode="wait">
              {activeStep === 'person' && (
                <motion.div
                  key="person-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Choose Your Model</h3>
                    <p className="text-xs sm:text-sm text-slate-600">Select a person to try on clothing</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {people.map((person) => (
                      <motion.button
                        key={person.id}
                        onClick={() => handlePersonSelect(person)}
                        className={`group relative aspect-[3/4] overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 ${
                          selectedPerson?.id === person.id
                            ? 'ring-2 ring-purple-500 shadow-lg scale-105'
                            : 'hover:ring-1 hover:ring-purple-300 hover:scale-102 shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                          <p className="text-white font-medium text-xs sm:text-sm truncate">{person.name}</p>
                          <p className="text-white/80 text-xs capitalize truncate">{person.gender}</p>
                        </div>
                        {selectedPerson?.id === person.id && (
                          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded-full flex items-center justify-center shadow-sm">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeStep === 'clothing' && selectedPerson && (
                <motion.div
                  key="clothing-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Choose Clothing</h3>
                    <p className="text-xs sm:text-sm text-slate-600">{selectedPerson.name}'s {selectedPerson.gender === 'male' ? 'Men\'s' : 'Women\'s'} Collection</p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    {availableClothing.map((garment) => (
                      <motion.button
                        key={garment.id}
                        onClick={() => setSelectedGarment(garment)}
                        className={`group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 ${
                          selectedGarment?.id === garment.id
                            ? 'ring-2 ring-purple-500 shadow-lg scale-105'
                            : 'hover:ring-1 hover:ring-purple-300 hover:scale-102 shadow-md'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <img
                          src={garment.image}
                          alt={garment.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3">
                          <p className="text-white font-medium text-xs sm:text-sm truncate">{garment.name}</p>
                        </div>
                        {selectedGarment?.id === garment.id && (
                          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded-full flex items-center justify-center shadow-sm">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  <motion.button
                    onClick={handleTryOn}
                    disabled={!canTryOn || isLoading}
                    className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                      canTryOn && !isLoading
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                    whileHover={canTryOn && !isLoading ? { scale: 1.01 } : {}}
                    whileTap={canTryOn && !isLoading ? { scale: 0.99 } : {}}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white mr-2 sm:mr-3"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      'Try On Now'
                    )}
                  </motion.button>
                </motion.div>
              )}

              {activeStep === 'result' && (
                <motion.div
                  key="result-step"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1 sm:mb-2">Your Result</h3>
                    <p className="text-xs sm:text-sm text-slate-600">See the magic happen</p>
                  </div>
                  
                  {isLoading ? (
                    <div className="aspect-[4/5] bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-4 border-purple-600 border-t-transparent mx-auto mb-3 sm:mb-4"></div>
                        <p className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">AI Processing...</p>
                        <p className="text-xs sm:text-sm text-slate-600">Creating your virtual try-on</p>
                      </div>
                    </div>
                  ) : showResult ? (
                    <div className="space-y-4 sm:space-y-6">
                      {/* Before/After Toggle */}
                      <div className="flex items-center justify-center">
                        <div className="bg-slate-100 rounded-full p-1 flex">
                          <motion.button
                            onClick={() => setViewMode('before')}
                            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                              viewMode === 'before'
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                            whileTap={{ scale: 0.95 }}
                          >
                            Before
                          </motion.button>
                          <motion.button
                            onClick={() => setViewMode('after')}
                            className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                              viewMode === 'after'
                                ? 'bg-white text-slate-900 shadow-sm'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                            whileTap={{ scale: 0.95 }}
                          >
                            After
                          </motion.button>
                        </div>
                      </div>

                      {/* Image Display */}
                      <div className="relative aspect-[4/5] bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden border border-slate-200">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={viewMode}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="w-full h-full relative"
                          >
                            <img
                              src={viewMode === 'before' ? selectedPerson!.image : results[selectedPerson!.id][selectedGarment!.id]}
                              alt={viewMode === 'before' ? `${selectedPerson?.name} before` : `${selectedPerson?.name} after`}
                              className="w-full h-full object-cover"
                            />
                            
                            {/* AI Badge */}
                            {viewMode === 'after' && (
                              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                                AI Generated
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>

                      {/* Info Display */}
                      <div className="text-center">
                        <p className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">
                          {selectedPerson?.name} wearing {selectedGarment?.name}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600">
                          Tap the buttons above to compare
                        </p>
                      </div>

                      {/* Try Again Button */}
                      <motion.button
                        onClick={() => {
                          setActiveStep('person')
                          setSelectedPerson(null)
                          setSelectedGarment(null)
                          setShowResult(false)
                          setViewMode('after')
                        }}
                        className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
                        whileTap={{ scale: 0.99 }}
                      >
                        Try Another Look
                      </motion.button>
                    </div>
                  ) : (
                    <div className="aspect-[4/5] bg-slate-50 rounded-lg sm:rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                      <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-2">Ready!</p>
                        <p className="text-xs sm:text-sm text-slate-600">Click to try on</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Demo Info */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium border border-purple-200">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>Same AI technology as our Chrome extension</span>
          </div>
        </div>
      </div>
    </div>
  )
}
