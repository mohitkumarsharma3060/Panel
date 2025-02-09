'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { User, Mail, Lock, Phone, Globe, Bell, Image, Shield, Upload } from 'lucide-react';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    password: '',
    confirmPassword: '',
    notifications: true,
    profilePicture: '' as string | ArrayBuffer | null,
    twoFactorAuth: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFormData((prev) => ({ ...prev, profilePicture: fileReader.result }));
      };
      fileReader.readAsDataURL(files[0]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Settings updated:', formData);
  };

  return (
    <div className="p-8 space-y-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900">Settings</h1>
      <p className="text-lg text-center text-gray-600">Update your profile details</p>

      {/* Profile Section */}
      <Card className="shadow-lg border border-gray-200 bg-sky-800">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Image className="w-6 h-6 text-green-500" /> Profile Picture
          </h2>
          <div className="flex items-center gap-4">
            <img
              src={(formData.profilePicture as string) || '/default-avatar.png'}
              alt="Profile"
              className="w-16 h-16 rounded-full border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
              id="profile-upload"
              aria-label="Upload Profile Picture"
            />
            <label
              htmlFor="profile-upload"
              className="cursor-pointer bg-sky-800 px-4 py-2 rounded-md flex items-center gap-2 text-white"
            >
              <Upload className="w-5 h-5" /> Upload
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card className="shadow-lg border border-gray-200 bg-sky-600">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-500" /> Basic Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <Input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Website</label>
              <Input
                type="text"
                name="website"
                placeholder="Your Website (Optional)"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <Input
                type="password"
                name="password"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
