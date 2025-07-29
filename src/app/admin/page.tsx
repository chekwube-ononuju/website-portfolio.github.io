"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AdminPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [currentProfilePic, setCurrentProfilePic] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('Please select a file first');
      return;
    }

    setUploading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Profile picture uploaded successfully!');
        setCurrentProfilePic(result.url);
        
        // Save to localStorage so Hero component can access it
        localStorage.setItem('profilePicture', result.url);
        
        // Clear the form
        setSelectedFile(null);
        setPreviewUrl(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Failed to upload file. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files[0]) {
      setSelectedFile(files[0]);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 py-12">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Admin Panel
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Upload your profile picture for the portfolio website
            </p>
          </div>

          {/* Current Profile Picture */}
          {currentProfilePic && (
            <div className="mb-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Current Profile Picture
              </h3>
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={currentProfilePic}
                  alt="Current profile"
                  fill
                  className="rounded-3xl object-cover shadow-lg"
                />
              </div>
            </div>
          )}

          {/* Upload Area */}
          <div
            className="border-2 border-dashed border-indigo-300 dark:border-indigo-700 rounded-2xl p-8 text-center hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            {previewUrl ? (
              <div className="space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="rounded-3xl object-cover shadow-lg"
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {selectedFile?.name}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-6xl">📸</div>
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">
                    Drop your profile picture here
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    or click to browse files
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                    Supports: JPEG, PNG, WebP (max 5MB)
                  </p>
                </div>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/jpeg,image/jpg,image/png,image/webp"
            className="hidden"
          />

          {/* Upload Button */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {uploading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Uploading...
                </span>
              ) : (
                'Upload Profile Picture'
              )}
            </button>

            {selectedFile && (
              <button
                onClick={() => {
                  setSelectedFile(null);
                  setPreviewUrl(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Message Display */}
          {message && (
            <div className={`mt-4 p-4 rounded-xl ${
              message.includes('Error') || message.includes('Failed')
                ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800'
                : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800'
            }`}>
              {message}
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-400 mb-2">
              Instructions:
            </h3>
            <ul className="text-sm text-indigo-700 dark:text-indigo-300 space-y-1">
              <li>• Upload a high-quality headshot or professional photo</li>
              <li>• Square images work best (will be cropped to circle)</li>
              <li>• Recommended size: 400x400px or larger</li>
              <li>• The image will appear in the hero section of your portfolio</li>
            </ul>
          </div>

          {/* Back to Portfolio */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}