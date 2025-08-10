import React, { useState, useRef, useEffect } from 'react';
import { Download, Upload, Type, Image as ImageIcon, X, Palette, Sparkles, Zap, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface TemplateData {
  headline: string;
  subheading: string;
  beforeImage: File | null;
  afterImage: File | null;
  beforeImageUrl: string;
  afterImageUrl: string;
  customColors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
}

interface TemplateStyle {
  id: string;
  name: string;
  description: string;
  layout: 'horizontal' | 'vertical' | 'split' | 'lifestyle';
  defaultColors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
  };
  icon: React.ReactNode;
}

export const BeforeAfterTemplate: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [templateData, setTemplateData] = useState<TemplateData>({
    headline: 'Post Malone Edition',
    subheading: 'What They Wore → What They Could Wear With Vesti AI',
    beforeImage: null,
    afterImage: null,
    beforeImageUrl: '',
    afterImageUrl: '',
    customColors: {
      primary: '#FF6B9D',
      secondary: '#8B5CF6',
      accent: '#22C55E',
      text: '#FFFFFF'
    }
  });

  const [selectedFormat, setSelectedFormat] = useState<'instagram' | 'tiktok'>('instagram');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const templateStyles: TemplateStyle[] = [
    {
      id: 'classic',
      name: 'Classic Vesti',
      description: 'Original pink-to-purple gradient with white banner',
      layout: 'horizontal',
      defaultColors: {
        primary: '#FF6B9D',
        secondary: '#8B5CF6',
        accent: '#22C55E',
        text: '#FFFFFF'
      },
      icon: <Palette className="h-6 w-6" />
    },
    {
      id: 'split-screen',
      name: 'Split Screen',
      description: 'Vertical split with black banner and arrows',
      layout: 'split',
      defaultColors: {
        primary: '#000000',
        secondary: '#666666',
        accent: '#FFFFFF',
        text: '#FFFFFF'
      },
      icon: <ArrowUp className="h-6 w-6" />
    },
    {
      id: 'which-one',
      name: 'Which One',
      description: 'Side-by-side with "WHICH ONE DO YOU CHOOSE?"',
      layout: 'vertical',
      defaultColors: {
        primary: '#F5F5DC',
        secondary: '#8B7355',
        accent: '#000000',
        text: '#000000'
      },
      icon: <ArrowLeft className="h-6 w-6" />
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      description: 'Elegant script with gold speckles and soft gradient',
      layout: 'lifestyle',
      defaultColors: {
        primary: '#FFF8DC',
        secondary: '#F4A460',
        accent: '#FFD700',
        text: '#000000'
      },
      icon: <Sparkles className="h-6 w-6" />
    }
  ];

  const getCurrentTemplate = () => {
    return templateStyles.find(t => t.id === selectedTemplate);
  };

  const handleImageUpload = (side: 'before' | 'after', file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setTemplateData(prev => ({
        ...prev,
        [side === 'before' ? 'beforeImage' : 'afterImage']: file,
        [side === 'before' ? 'beforeImageUrl' : 'afterImageUrl']: imageUrl
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (field: 'headline' | 'subheading', value: string) => {
    setTemplateData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleColorChange = (colorType: keyof TemplateData['customColors'], value: string) => {
    setTemplateData(prev => ({
      ...prev,
      customColors: {
        ...prev.customColors,
        [colorType]: value
      }
    }));
  };

  const resetColors = () => {
    const template = getCurrentTemplate();
    if (template) {
      setTemplateData(prev => ({
        ...prev,
        customColors: template.defaultColors
      }));
    }
  };

  const drawImageOnCanvas = (ctx: CanvasRenderingContext2D, imageUrl: string, x: number, y: number, width: number, height: number) => {
    const img = new Image();
    img.onload = () => {
      const imgAspect = img.width / img.height;
      const frameAspect = width / height;
      
      let drawWidth = width;
      let drawHeight = height;
      let drawX = x;
      let drawY = y;

      if (imgAspect > frameAspect) {
        drawHeight = width / imgAspect;
        drawY = y + (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgAspect;
        drawX = x + (width - drawWidth) / 2;
      }

      ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    };
    img.src = imageUrl;
  };

  const generateTemplate = () => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedTemplate) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const template = getCurrentTemplate();
    if (!template) return;

    const width = 1080;
    const height = selectedFormat === 'instagram' ? 1350 : 1920;
    const colors = templateData.customColors;
    
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    if (template.layout === 'horizontal') {
      // Classic horizontal layout
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, colors.primary);
      gradient.addColorStop(1, colors.secondary);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add texture
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let i = 0; i < 15; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 80 + 40;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Title
      ctx.textAlign = 'center';
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 96px sans-serif';
      ctx.fillText('THIS', width / 2 - 120, 180);
      ctx.fillText('THAT', width / 2 + 120, 180);
      
      ctx.font = 'italic 48px sans-serif';
      ctx.fillText('or', width / 2, 200);

      // Headline
      ctx.font = 'bold 56px sans-serif';
      ctx.fillText(templateData.headline, width / 2, 300);

      // Banner
      const bannerY = 380;
      const bannerHeight = 60;
      const bannerWidth = width * 0.85;
      const bannerX = (width - bannerWidth) / 2;
      
      ctx.fillStyle = 'white';
      ctx.fillRect(bannerX, bannerY, bannerWidth, bannerHeight);
      ctx.fillStyle = colors.accent;
      ctx.fillRect(bannerX, bannerY, bannerWidth, 3);
      ctx.fillRect(bannerX, bannerY + bannerHeight - 3, bannerWidth, 3);
      ctx.fillStyle = 'black';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText(templateData.subheading, width / 2, bannerY + 38);

      // Images
      const imageWidth = width * 0.38;
      const imageHeight = imageWidth * 1.25;
      const gap = width * 0.08;
      const totalWidth = imageWidth * 2 + gap;
      const startX = (width - totalWidth) / 2;
      const imageY = 500;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 3;
      ctx.strokeRect(startX, imageY, imageWidth, imageHeight);
      ctx.strokeRect(startX + imageWidth + gap, imageY, imageWidth, imageHeight);

      if (templateData.beforeImageUrl) {
        drawImageOnCanvas(ctx, templateData.beforeImageUrl, startX, imageY, imageWidth, imageHeight);
      }
      if (templateData.afterImageUrl) {
        drawImageOnCanvas(ctx, templateData.afterImageUrl, startX + imageWidth + gap, imageY, imageWidth, imageHeight);
      }

      // Labels
      const labelHeight = 50;
      const labelY = imageY + imageHeight + 25;
      
      ctx.fillStyle = 'white';
      ctx.fillRect(startX, labelY, imageWidth, labelHeight);
      ctx.fillRect(startX + imageWidth + gap, labelY, imageWidth, labelHeight);
      
      ctx.fillStyle = 'black';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('The Fit', startX + imageWidth / 2, labelY + 32);
      ctx.fillText('The Look', startX + imageWidth + gap + imageWidth / 2, labelY + 32);

      // Footer
      ctx.fillStyle = colors.text;
      ctx.font = '20px sans-serif';
      ctx.fillText('getvesti.com', width / 2, height - 50);

    } else if (template.layout === 'split') {
      // Split screen layout - EXACT MATCH to your image
      const sectionHeight = height / 3;
      
      // Top section (THIS) - grey background
      ctx.fillStyle = colors.secondary;
      ctx.fillRect(0, 0, width, sectionHeight);
      
      // Middle banner - black
      ctx.fillStyle = colors.primary;
      ctx.fillRect(0, sectionHeight, width, sectionHeight);
      
      // Bottom section (THAT) - grey background
      ctx.fillStyle = colors.secondary;
      ctx.fillRect(0, sectionHeight * 2, width, sectionHeight);

      // Banner text - white text on black
      ctx.textAlign = 'center';
      ctx.fillStyle = colors.accent;
      ctx.font = 'bold 72px sans-serif';
      ctx.fillText('THIS', width / 2 - 80, sectionHeight + 120);
      ctx.fillText('THAT', width / 2 + 80, sectionHeight + 120);
      
      ctx.font = 'italic 36px sans-serif';
      ctx.fillText('or', width / 2, sectionHeight + 140);

      // Curved arrows pointing to each section
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 4;
      
      // Top arrow (pointing up to top section)
      ctx.beginPath();
      ctx.moveTo(width / 2, sectionHeight + 20);
      ctx.quadraticCurveTo(width / 2 - 30, sectionHeight - 10, width / 2, sectionHeight - 40);
      ctx.stroke();
      
      // Bottom arrow (pointing down to bottom section)
      ctx.beginPath();
      ctx.moveTo(width / 2, sectionHeight * 2 + 20);
      ctx.quadraticCurveTo(width / 2 + 30, sectionHeight * 2 + 50, width / 2, sectionHeight * 2 + 80);
      ctx.stroke();

      // Image areas - large rectangular areas for images
      const imageWidth = width * 0.7;
      const imageHeight = sectionHeight * 0.7;
      const imageX = (width - imageWidth) / 2;
      
      // Top image area
      const topImageY = sectionHeight * 0.15;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.strokeRect(imageX, topImageY, imageWidth, imageHeight);
      
      if (templateData.beforeImageUrl) {
        drawImageOnCanvas(ctx, templateData.beforeImageUrl, imageX, topImageY, imageWidth, imageHeight);
      }

      // Bottom image area
      const bottomImageY = sectionHeight * 2.15;
      ctx.strokeRect(imageX, bottomImageY, imageWidth, imageHeight);
      
      if (templateData.afterImageUrl) {
        drawImageOnCanvas(ctx, templateData.afterImageUrl, imageX, bottomImageY, imageWidth, imageHeight);
      }

      // Text overlays like in your image
      ctx.fillStyle = colors.accent;
      ctx.font = 'bold 24px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Tell us what you think', width - 200, 100);
      
      ctx.textAlign = 'right';
      ctx.fillText('Studio Shodwe', 200, height - 100);

    } else if (template.layout === 'vertical') {
      // Which one layout - EXACT MATCH to your image
      const leftWidth = width / 2;
      const rightWidth = width / 2;
      
      // Backgrounds - different colors for each side
      ctx.fillStyle = colors.primary; // Light beige
      ctx.fillRect(0, 0, leftWidth, height);
      ctx.fillStyle = colors.secondary; // Darker grey-brown
      ctx.fillRect(leftWidth, 0, rightWidth, height);

      // Title at top - spans both sections
      ctx.textAlign = 'center';
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 48px sans-serif';
      ctx.fillText('WHICH ONE DO YOU CHOOSE ?', width / 2, 80);

      // Image areas - white rounded frames
      const imageWidth = width * 0.35;
      const imageHeight = height * 0.5;
      const imageY = 150;
      
      // Left image with white frame
      const leftImageX = (leftWidth - imageWidth) / 2;
      ctx.fillStyle = 'white';
      ctx.fillRect(leftImageX, imageY, imageWidth, imageHeight);
      
      if (templateData.beforeImageUrl) {
        drawImageOnCanvas(ctx, templateData.beforeImageUrl, leftImageX, imageY, imageWidth, imageHeight);
      }

      // Right image with white frame
      const rightImageX = leftWidth + (rightWidth - imageWidth) / 2;
      ctx.fillRect(rightImageX, imageY, imageWidth, imageHeight);
      
      if (templateData.afterImageUrl) {
        drawImageOnCanvas(ctx, templateData.afterImageUrl, rightImageX, imageY, imageWidth, imageHeight);
      }

      // Buttons at bottom - white with dark borders
      const buttonWidth = 120;
      const buttonHeight = 40;
      const buttonY = height - 100;
      
      // Left button
      const leftButtonX = (leftWidth - buttonWidth) / 2;
      ctx.fillStyle = 'white';
      ctx.strokeStyle = colors.text;
      ctx.lineWidth = 2;
      ctx.fillRect(leftButtonX, buttonY, buttonWidth, buttonHeight);
      ctx.strokeRect(leftButtonX, buttonY, buttonWidth, buttonHeight);
      
      ctx.fillStyle = colors.text;
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText('This', leftWidth / 2, buttonY + 28);

      // Right button
      const rightButtonX = leftWidth + (rightWidth - buttonWidth) / 2;
      ctx.fillStyle = 'white';
      ctx.fillRect(rightButtonX, buttonY, buttonWidth, buttonHeight);
      ctx.strokeRect(rightButtonX, buttonY, buttonWidth, buttonHeight);
      
      ctx.fillStyle = colors.text;
      ctx.fillText('That', leftWidth + rightWidth / 2, buttonY + 28);

    } else if (template.layout === 'lifestyle') {
      // Lifestyle layout - EXACT MATCH to your image
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, colors.primary); // Light off-white
      gradient.addColorStop(1, colors.secondary); // Deeper creamy beige
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Gold speckles scattered across background
      ctx.fillStyle = colors.accent;
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 3 + 1;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Title - script font "this or That"
      ctx.textAlign = 'center';
      ctx.fillStyle = colors.text;
      ctx.font = 'italic 64px cursive';
      ctx.fillText('this or That', width / 2, 120);

      // Image areas - side by side with white borders
      const imageWidth = width * 0.4;
      const imageHeight = height * 0.4;
      const gap = width * 0.05;
      const totalWidth = imageWidth * 2 + gap;
      const startX = (width - totalWidth) / 2;
      const imageY = 200;

      // Left image with white border
      ctx.fillStyle = 'white';
      ctx.fillRect(startX, imageY, imageWidth, imageHeight);
      
      if (templateData.beforeImageUrl) {
        drawImageOnCanvas(ctx, templateData.beforeImageUrl, startX, imageY, imageWidth, imageHeight);
      }

      // Right image with white border
      ctx.fillRect(startX + imageWidth + gap, imageY, imageWidth, imageHeight);
      
      if (templateData.afterImageUrl) {
        drawImageOnCanvas(ctx, templateData.afterImageUrl, startX + imageWidth + gap, imageY, imageWidth, imageHeight);
      }

      // Number overlays - white circles with numbers
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.arc(startX + imageWidth / 2, imageY + imageHeight + 30, 25, 0, 2 * Math.PI);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(startX + imageWidth + gap + imageWidth / 2, imageY + 30, 25, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = colors.text;
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('1', startX + imageWidth / 2, imageY + imageHeight + 38);
      ctx.fillText('2', startX + imageWidth + gap + imageWidth / 2, imageY + 38);
    }
  };

  useEffect(() => {
    if (selectedTemplate && (templateData.beforeImageUrl || templateData.afterImageUrl)) {
      setTimeout(generateTemplate, 100);
    }
  }, [templateData, selectedFormat, selectedTemplate]);

  const downloadTemplate = () => {
    const canvas = canvasRef.current;
    if (!canvas || !selectedTemplate) return;

    generateTemplate();
    
    const link = document.createElement('a');
    link.download = `before-after-${selectedTemplate}-${selectedFormat}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  if (!selectedTemplate) {
    return (
      <div className="space-y-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-purple-400" />
            Choose Your Template Style
          </h2>
          
          <p className="text-gray-300 mb-8">
            Select a template style that matches your brand and content. Each template has unique layouts and customizable colors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {templateStyles.map((template) => (
              <button
                key={template.id}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setTemplateData(prev => ({
                    ...prev,
                    customColors: template.defaultColors
                  }));
                }}
                className="group relative bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                {/* Template Preview - Actual Template Layout */}
                <div className="w-full h-48 rounded-lg mb-4 relative overflow-hidden border border-white/20 shadow-lg">
                  {template.id === 'classic' && (
                    <div className="w-full h-full relative">
                      {/* Classic Vesti Template Preview */}
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-400 to-purple-600"></div>
                      {/* Subtle texture overlay */}
                      <div className="absolute inset-0 opacity-10">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-16 h-16 bg-white rounded-full"
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                        <div className="text-xl font-bold tracking-wide">THIS or THAT</div>
                        <div className="text-sm opacity-90 mt-1 font-medium">Post Malone Edition</div>
                        <div className="w-4/5 h-0.5 bg-white/40 mt-3 rounded-full"></div>
                        <div className="text-xs mt-2 opacity-80">What They Wore → What They Could Wear</div>
                        <div className="flex gap-3 mt-4">
                          <div className="w-14 h-16 bg-white/20 rounded-lg border border-white/40 shadow-inner"></div>
                          <div className="w-14 h-16 bg-white/20 rounded-lg border border-white/40 shadow-inner"></div>
                        </div>
                        <div className="flex gap-3 mt-2">
                          <div className="w-14 h-5 bg-white rounded text-black text-xs flex items-center justify-center font-bold shadow-sm">The Fit</div>
                          <div className="w-14 h-5 bg-white rounded text-black text-xs flex items-center justify-center font-bold shadow-sm">The Look</div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {template.id === 'split-screen' && (
                    <div className="w-full h-full relative">
                      {/* Split Screen Template Preview */}
                      <div className="absolute inset-0 flex flex-col">
                        <div className="h-1/3 bg-gray-500"></div>
                        <div className="h-1/3 bg-black flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="text-lg font-bold tracking-wide">THIS or THAT</div>
                            <div className="text-sm opacity-80">or</div>
                          </div>
                        </div>
                        <div className="h-1/3 bg-gray-500"></div>
                      </div>
                      {/* Curved arrows */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/3 -mt-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 17L10 3M10 3L3 10M10 3L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-1/3 -mb-3">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M10 3L10 17M10 17L3 10M10 17L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      {/* Image areas with better styling */}
                      <div className="absolute top-3 left-3 right-3 h-1/3 -mt-2 bg-white/10 border border-white/30 rounded-lg shadow-inner"></div>
                      <div className="absolute bottom-3 left-3 right-3 h-1/3 -mb-2 bg-white/10 border border-white/30 rounded-lg shadow-inner"></div>
                      {/* Text overlays */}
                      <div className="absolute top-2 right-3 text-white text-xs font-medium opacity-80">Tell us what you think</div>
                      <div className="absolute bottom-2 left-3 text-white text-xs font-medium opacity-80">Studio Shodwe</div>
                    </div>
                  )}
                  
                  {template.id === 'which-one' && (
                    <div className="w-full h-full relative">
                      {/* Which One Template Preview */}
                      <div className="absolute inset-0 flex">
                        <div className="w-1/2 bg-amber-50"></div>
                        <div className="w-1/2 bg-amber-100"></div>
                      </div>
                      <div className="absolute top-3 left-0 right-0 text-center">
                        <div className="text-black text-sm font-bold tracking-wide">WHICH ONE DO YOU CHOOSE ?</div>
                      </div>
                      <div className="absolute top-14 left-3 right-3 bottom-12 flex gap-3">
                        <div className="flex-1 bg-white rounded-lg border-2 border-gray-200 shadow-sm"></div>
                        <div className="flex-1 bg-white rounded-lg border-2 border-gray-200 shadow-sm"></div>
                      </div>
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-4">
                        <div className="w-16 h-7 bg-white border-2 border-black rounded flex items-center justify-center shadow-sm">
                          <span className="text-black text-xs font-bold">This</span>
                        </div>
                        <div className="w-16 h-7 bg-white border-2 border-black rounded flex items-center justify-center shadow-sm">
                          <span className="text-black text-xs font-bold">That</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {template.id === 'lifestyle' && (
                    <div className="w-full h-full relative">
                      {/* Lifestyle Template Preview */}
                      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200"></div>
                      {/* Gold speckles with better positioning */}
                      <div className="absolute inset-0">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"
                            style={{
                              left: `${10 + Math.random() * 80}%`,
                              top: `${10 + Math.random() * 80}%`
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="absolute top-4 left-0 right-0 text-center">
                        <div className="text-black text-lg italic font-serif tracking-wide">this or That</div>
                      </div>
                      <div className="absolute top-16 left-3 right-3 bottom-6 flex gap-3">
                        <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm relative">
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                            <span className="text-black text-xs font-bold">1</span>
                          </div>
                        </div>
                        <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm relative">
                          <div className="absolute -top-1 right-2 w-7 h-7 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                            <span className="text-black text-xs font-bold">2</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Template Info */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white/10 text-purple-400">
                    {template.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-white mb-1">{template.name}</h3>
                    <p className="text-sm text-gray-400">{template.description}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <ImageIcon className="h-6 w-6 text-purple-400" />
            {getCurrentTemplate()?.name} Template
          </h2>
          <button
            onClick={() => setSelectedTemplate(null)}
            className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            Change Template
          </button>
        </div>

        {/* Format Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">Export Format</label>
          <div className="flex gap-4">
            <button
              onClick={() => setSelectedFormat('instagram')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedFormat === 'instagram'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              Instagram (1080×1350)
            </button>
            <button
              onClick={() => setSelectedFormat('tiktok')}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedFormat === 'tiktok'
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              TikTok (1080×1920)
            </button>
          </div>
        </div>

        {/* Color Customization */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-300">Colors</label>
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="px-3 py-1 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              {showColorPicker ? 'Hide' : 'Customize'} Colors
            </button>
          </div>
          
          {showColorPicker && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
              <div>
                <label className="block text-xs text-gray-400 mb-2">Primary</label>
                <input
                  type="color"
                  value={templateData.customColors.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                  className="w-full h-10 rounded-lg border border-white/20 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Secondary</label>
                <input
                  type="color"
                  value={templateData.customColors.secondary}
                  onChange={(e) => handleColorChange('secondary', e.target.value)}
                  className="w-full h-10 rounded-lg border border-white/20 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Accent</label>
                <input
                  type="color"
                  value={templateData.customColors.accent}
                  onChange={(e) => handleColorChange('accent', e.target.value)}
                  className="w-full h-10 rounded-lg border border-white/20 cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">Text</label>
                <input
                  type="color"
                  value={templateData.customColors.text}
                  onChange={(e) => handleColorChange('text', e.target.value)}
                  className="w-full h-10 rounded-lg border border-white/20 cursor-pointer"
                />
              </div>
              <div className="col-span-2 md:col-span-4">
                <button
                  onClick={resetColors}
                  className="w-full py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                >
                  Reset to Default Colors
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Text Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Headline</label>
            <div className="relative">
              <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={templateData.headline}
                onChange={(e) => handleInputChange('headline', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter headline..."
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Subheading</label>
            <div className="relative">
              <Type className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                value={templateData.subheading}
                onChange={(e) => handleInputChange('subheading', e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter subheading..."
              />
            </div>
          </div>
        </div>

        {/* Image Uploads */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">The Fit (Before)</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload('before', file);
                }}
                className="hidden"
                id="before-image"
              />
              <label
                htmlFor="before-image"
                className="block w-full h-32 border-2 border-dashed border-white/30 rounded-xl cursor-pointer hover:border-white/50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {templateData.beforeImageUrl ? (
                    <div className="relative">
                      <img
                        src={templateData.beforeImageUrl}
                        alt="Before"
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setTemplateData(prev => ({
                            ...prev,
                            beforeImage: null,
                            beforeImageUrl: ''
                          }));
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-gray-400 text-sm">Upload image</span>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">The Look (After)</label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload('after', file);
                }}
                className="hidden"
                id="after-image"
              />
              <label
                htmlFor="after-image"
                className="block w-full h-32 border-2 border-dashed border-white/30 rounded-xl cursor-pointer hover:border-white/50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  {templateData.afterImageUrl ? (
                    <div className="relative">
                      <img
                        src={templateData.afterImageUrl}
                        alt="After"
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setTemplateData(prev => ({
                            ...prev,
                            afterImage: null,
                            afterImageUrl: ''
                          }));
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="h-8 w-8 text-gray-400 mb-2" />
                      <span className="text-gray-400 text-sm">Upload image</span>
                    </>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-300 mb-3">Live Preview</label>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <canvas
              ref={canvasRef}
              className="w-full max-w-md mx-auto border border-white/20 rounded-lg shadow-2xl"
              style={{
                aspectRatio: selectedFormat === 'instagram' ? '1080/1350' : '1080/1920'
              }}
            />
          </div>
        </div>

        {/* Download */}
        <div className="flex justify-center">
          <button
            onClick={downloadTemplate}
            disabled={!templateData.beforeImageUrl || !templateData.afterImageUrl}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download PNG
          </button>
        </div>
      </div>
    </div>
  );
}; 
 