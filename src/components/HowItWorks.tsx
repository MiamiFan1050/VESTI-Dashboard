const steps = [
  {
    number: '01',
    title: 'Install Extension',
    description: 'Add Vesti to Chrome in just one click',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    number: '02',
    title: 'Browse & Shop',
    description: 'Visit your favorite online clothing stores',
    gradient: 'from-purple-600 via-fuchsia-600 to-pink-600'
  },
  {
    number: '03',
    title: 'Virtual Try-On',
    description: 'Click the Vesti button to see clothes on you',
    gradient: 'from-pink-600 to-purple-600'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-white to-pink-50/30"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Three Simple Steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of online shopping with our easy-to-use platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card Background */}
              <div className="absolute inset-0 bg-white/50 backdrop-blur-xl rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
              
              {/* Card Content */}
              <div className="relative p-8">
                {/* Step Number */}
                <div className={`bg-gradient-to-r ${step.gradient} w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {step.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-purple-200 to-pink-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}