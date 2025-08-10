import React, { useState } from 'react';
import { 
  Sparkles, 
  Video, 
  FileText, 
  Hash, 
  Music, 
  CheckCircle, 
  Copy, 
  RefreshCw,
  Instagram,
  Twitter,
  Youtube,
  TrendingUp,
  Lightbulb,
  Zap,
  Target,
  Users,
  Eye,
  Heart,
  MessageSquare,
  Calendar,
  Clock,
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2
} from 'lucide-react';

interface ScriptIdea {
  id: string;
  platform: string;
  productAngle: string;
  hook: string;
  caption: string;
  hashtags: string[];
  shotList: string[];
  trendAudio: string;
  executionChecklist: string[];
  estimatedViews: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeToCreate: string;
}

const platforms = [
  { name: 'TikTok', icon: TrendingUp, color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { name: 'Instagram Reels', icon: Instagram, color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { name: 'YouTube Shorts', icon: Youtube, color: 'text-red-600', bgColor: 'bg-red-50' },
  { name: 'Twitter/X', icon: Twitter, color: 'text-blue-600', bgColor: 'bg-blue-50' }
];

const productAngles = [
  'Before/After Transformation',
  'Outfit Morphing',
  'Reaction Video',
  'Try-On Haul',
  'Size Comparison',
  'Style Challenge',
  'Trend Adaptation',
  'Seasonal Look',
  'Occasion Styling',
  'Body Positivity',
  'Sustainable Fashion',
  'Budget vs Luxury'
];

const trendAudios = [
  'https://www.tiktok.com/music/trending-audio-1',
  'https://www.tiktok.com/music/trending-audio-2', 
  'https://www.tiktok.com/music/trending-audio-3',
  'https://www.tiktok.com/music/trending-audio-4',
  'https://www.tiktok.com/music/trending-audio-5'
];

export function ScriptGenerator() {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedAngle, setSelectedAngle] = useState('');
  const [generatedIdeas, setGeneratedIdeas] = useState<ScriptIdea[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const generateScriptIdeas = () => {
    if (!selectedPlatform || !selectedAngle) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const newIdeas: ScriptIdea[] = [
        {
          id: '1',
          platform: selectedPlatform,
          productAngle: selectedAngle,
          hook: `"I tried ${selectedAngle.toLowerCase()} with VESTI and the results were INSANE! 🤯"`,
          caption: `Just discovered the future of online shopping! 🛍️✨\n\n${selectedAngle} has never been easier with VESTI's AI-powered virtual try-on technology. No more guessing if clothes will fit - see exactly how they look on YOU before buying! 👗👕\n\nThis is a game-changer for anyone who's ever ordered clothes online and been disappointed. The accuracy is mind-blowing! 🤯\n\nTry it yourself and thank me later! 💁‍♀️💅`,
          hashtags: ['#VirtualTryOn', '#VESTI', '#FashionTech', '#OnlineShopping', '#AI', '#Fashion', '#Style', '#Shopping', '#Tech', '#Innovation'],
          shotList: [
            'Opening hook with surprised expression',
            'Show before image (regular shopping)',
            'Demonstrate VESTI app interface',
            'Show virtual try-on process',
            'Display before/after comparison',
            'Show final result with excitement',
            'Call-to-action with app download'
          ],
          trendAudio: trendAudios[Math.floor(Math.random() * trendAudios.length)],
          executionChecklist: [
            'Set up good lighting',
            'Prepare before/after images',
            'Download VESTI app',
            'Practice hook delivery',
            'Prepare transition effects',
            'Set up camera angle',
            'Have backup content ready'
          ],
          estimatedViews: '50K-200K',
          difficulty: 'Medium',
          timeToCreate: '2-3 hours'
        },
        {
          id: '2',
          platform: selectedPlatform,
          productAngle: selectedAngle,
          hook: `"This ${selectedAngle.toLowerCase()} hack will save you HOURS of shopping time! ⏰"`,
          caption: `Stop wasting time in fitting rooms! 🚫\n\nVESTI's virtual try-on technology lets you ${selectedAngle.toLowerCase()} in seconds, not hours. Perfect for busy people who want to look amazing without the hassle! ⚡\n\nThe best part? You can try on hundreds of outfits without leaving your couch! 🛋️👗\n\nGame. Changer. Period. 💅✨`,
          hashtags: ['#TimeSaver', '#VESTI', '#VirtualTryOn', '#FashionHack', '#Efficiency', '#Shopping', '#Style', '#Tech', '#Innovation', '#Lifestyle'],
          shotList: [
            'Start with time pressure hook',
            'Show traditional shopping process (slow)',
            'Introduce VESTI as solution',
            'Demonstrate speed of virtual try-on',
            'Show multiple outfit changes quickly',
            'Display time saved',
            'End with satisfied expression'
          ],
          trendAudio: trendAudios[Math.floor(Math.random() * trendAudios.length)],
          executionChecklist: [
            'Create time pressure narrative',
            'Prepare traditional shopping footage',
            'Set up speed comparison',
            'Practice quick transitions',
            'Prepare multiple outfit options',
            'Set timer for dramatic effect',
            'Plan satisfying conclusion'
          ],
          estimatedViews: '30K-150K',
          difficulty: 'Easy',
          timeToCreate: '1-2 hours'
        },
        {
          id: '3',
          platform: selectedPlatform,
          productAngle: selectedAngle,
          hook: `"I spent $500 on clothes that didn't fit until I found VESTI! 💸"`,
          caption: `Money down the drain! 💸😭\n\nI used to spend hundreds on clothes that looked nothing like the pictures. Then I discovered VESTI's virtual try-on technology and everything changed! 🔄\n\nNow I can ${selectedAngle.toLowerCase()} with confidence, knowing exactly how clothes will look and fit before I buy. No more returns, no more wasted money! 💰✅\n\nThis technology pays for itself! 💯`,
          hashtags: ['#MoneySaver', '#VESTI', '#VirtualTryOn', '#Shopping', '#Budget', '#Fashion', '#Style', '#Tech', '#Innovation', '#SmartShopping'],
          shotList: [
            'Show pile of returned clothes',
            'Display receipt with high amount',
            'Introduce VESTI as solution',
            'Demonstrate accurate virtual try-on',
            'Show successful purchases',
            'Display money saved',
            'End with confident shopping'
          ],
          trendAudio: trendAudios[Math.floor(Math.random() * trendAudios.length)],
          executionChecklist: [
            'Gather returned clothes for props',
            'Create fake receipts',
            'Set up before/after money comparison',
            'Practice emotional delivery',
            'Prepare transformation narrative',
            'Set up savings calculation',
            'Plan confident conclusion'
          ],
          estimatedViews: '75K-300K',
          difficulty: 'Hard',
          timeToCreate: '3-4 hours'
        }
      ];
      
      setGeneratedIdeas(newIdeas);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">AI Script Generator</h2>
            <p className="text-purple-100">Create viral content ideas for VESTI</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-8 border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Platform Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Choose Platform
            </label>
            <div className="grid grid-cols-2 gap-3">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.name}
                    onClick={() => setSelectedPlatform(platform.name)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      selectedPlatform === platform.name
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Icon className={`h-6 w-6 mx-auto mb-2 ${platform.color}`} />
                    <span className="text-sm font-medium text-gray-700">{platform.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Angle Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Product Angle
            </label>
            <select
              value={selectedAngle}
              onChange={(e) => setSelectedAngle(e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            >
              <option value="">Select an angle...</option>
              {productAngles.map((angle) => (
                <option key={angle} value={angle}>{angle}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateScriptIdeas}
          disabled={!selectedPlatform || !selectedAngle || isGenerating}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-3"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-5 w-5 animate-spin" />
              Generating Ideas...
            </>
          ) : (
            <>
              <Zap className="h-5 w-5" />
              Generate Script Ideas
            </>
          )}
        </button>
      </div>

      {/* Generated Ideas */}
      {generatedIdeas.length > 0 && (
        <div className="p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-yellow-500" />
            Generated Script Ideas ({generatedIdeas.length})
          </h3>
          
          <div className="space-y-6">
            {generatedIdeas.map((idea) => (
              <div key={idea.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                {/* Idea Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Idea #{idea.id}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {idea.platform}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {idea.estimatedViews} views
                      </span>
                      <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(idea.difficulty)}`}>
                        {idea.difficulty}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {idea.timeToCreate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-4">
                    {/* Hook */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        <h5 className="font-semibold text-gray-900">Hook Line</h5>
                        <button
                          onClick={() => copyToClipboard(idea.hook, `hook-${idea.id}`)}
                          className="ml-auto text-purple-600 hover:text-purple-700"
                        >
                          {copiedId === `hook-${idea.id}` ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      <p className="text-gray-700 text-sm">{idea.hook}</p>
                    </div>

                    {/* Caption */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <h5 className="font-semibold text-gray-900">Caption + Hashtags</h5>
                        <button
                          onClick={() => copyToClipboard(idea.caption + '\n\n' + idea.hashtags.join(' '), `caption-${idea.id}`)}
                          className="ml-auto text-purple-600 hover:text-purple-700"
                        >
                          {copiedId === `caption-${idea.id}` ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      <p className="text-gray-700 text-sm whitespace-pre-line mb-3">{idea.caption}</p>
                      <div className="flex flex-wrap gap-1">
                        {idea.hashtags.map((tag, index) => (
                          <span key={index} className="text-purple-600 text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Trend Audio */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Music className="h-4 w-4 text-green-500" />
                        <h5 className="font-semibold text-gray-900">Trend Audio</h5>
                        <button
                          onClick={() => copyToClipboard(idea.trendAudio, `audio-${idea.id}`)}
                          className="ml-auto text-purple-600 hover:text-purple-700"
                        >
                          {copiedId === `audio-${idea.id}` ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      <a 
                        href={idea.trendAudio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 text-sm hover:underline flex items-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        Open Trend Audio
                      </a>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-4">
                    {/* Shot List */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Video className="h-4 w-4 text-red-500" />
                        <h5 className="font-semibold text-gray-900">Shot List</h5>
                        <button
                          onClick={() => copyToClipboard(idea.shotList.map((shot, i) => `${i + 1}. ${shot}`).join('\n'), `shots-${idea.id}`)}
                          className="ml-auto text-purple-600 hover:text-purple-700"
                        >
                          {copiedId === `shots-${idea.id}` ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      <ul className="space-y-2">
                        {idea.shotList.map((shot, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-purple-600 font-medium text-xs mt-1">{index + 1}.</span>
                            <span>{shot}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Execution Checklist */}
                    <div className="bg-white rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <h5 className="font-semibold text-gray-900">Execution Checklist</h5>
                        <button
                          onClick={() => copyToClipboard(idea.executionChecklist.map((item, i) => `☐ ${item}`).join('\n'), `checklist-${idea.id}`)}
                          className="ml-auto text-purple-600 hover:text-purple-700"
                        >
                          {copiedId === `checklist-${idea.id}` ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      <ul className="space-y-2">
                        {idea.executionChecklist.map((item, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-gray-400 mt-1">☐</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                    <Calendar className="h-4 w-4" />
                    Schedule Content
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                    <Users className="h-4 w-4" />
                    Share with Team
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                    <Star className="h-4 w-4" />
                    Save to Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 