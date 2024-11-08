import React, { useState } from 'react';
import { Globe, Loader2, ChevronDown } from 'lucide-react';

interface DebugData {
  url: string;
  response: any;
}

export default function WebsiteSummary() {
  const [website, setWebsite] = useState('http://gabeecoffee.com');
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [debugData, setDebugData] = useState<DebugData | null>(null);

  const extractCompanyOverview = (summaryVector: string): string => {
    const startMarker = "1. Company Overview";
    const endMarker = "2. Core Services and Offerings";
    
    const startIndex = summaryVector.indexOf(startMarker);
    const endIndex = summaryVector.indexOf(endMarker);
    
    if (startIndex !== -1 && endIndex !== -1) {
      const overview = summaryVector.slice(startIndex + startMarker.length, endIndex)
        .trim()
        .replace(/^\s*[-:]\s*/, '');
      return overview;
    }
    
    return "Company Overview section not found";
  };

  const formatUrl = (url: string): string => {
    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `http://${formattedUrl}`;
    }
    return formattedUrl;
  };

  const handleWebsiteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setDescription('');
    setDebugData(null);

    const formattedUrl = formatUrl(website);
    const apiUrl = `https://tam-api-a0u1.onrender.com/domain?domain_url=${encodeURIComponent(formattedUrl)}`;
    
    console.log('Making API request to:', apiUrl);

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Origin': window.location.origin
        },
        credentials: 'omit'
      });
      
      const data = await response.json();
      console.log('API Response:', data);

      if (!data.summary_vector) {
        throw new Error('No summary data available for this website');
      }

      const overview = extractCompanyOverview(data.summary_vector);
      setDescription(overview);
      setDebugData({ url: apiUrl, response: data });
    } catch (err) {
      console.error('API Error:', err);
      
      // Provide a more user-friendly error message
      setError(
        'We are currently experiencing technical difficulties accessing the API. ' +
        'Our team has been notified and is working on resolving this issue. ' +
        'Please try again later.'
      );
      
      setDebugData({ 
        url: apiUrl,
        response: { 
          error: err instanceof Error ? err.message : 'Unknown error',
          note: 'API access is currently restricted. Please ensure the API server has CORS enabled for this domain.'
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-slate-50 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Website Summary Tool</h2>
          <p className="text-lg text-slate-600">
            Get an AI-generated company description from any website
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleWebsiteSubmit} className="mb-8">
            <div className="flex gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter website URL"
                  className="block w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Generate'
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-4">
              <p className="font-medium mb-2">Error</p>
              <p>{error}</p>
            </div>
          )}

          {description && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Company Overview</h3>
                <p className="text-blue-800 leading-relaxed">{description}</p>
              </div>

              {debugData && (
                <details className="bg-slate-50 rounded-xl overflow-hidden">
                  <summary className="bg-slate-100 px-6 py-3 cursor-pointer hover:bg-slate-200 transition-colors flex items-center justify-between">
                    <span className="font-medium text-slate-700">Debug Information</span>
                    <ChevronDown className="h-5 w-5 text-slate-500" />
                  </summary>
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">API Request URL:</h4>
                      <div className="bg-slate-800 text-slate-200 p-3 rounded-lg overflow-x-auto">
                        <code>{debugData.url}</code>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">API Response:</h4>
                      <div className="bg-slate-800 text-slate-200 p-3 rounded-lg overflow-x-auto">
                        <pre><code>{JSON.stringify(debugData.response, null, 2)}</code></pre>
                      </div>
                    </div>
                  </div>
                </details>
              )}
            </div>
          )}

          {isLoading && !error && !description && (
            <div className="text-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-slate-600">Analyzing website content...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}