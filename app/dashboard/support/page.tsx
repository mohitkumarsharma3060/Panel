'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, HelpCircle } from 'lucide-react';

export default function SupportPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-8 space-y-8 max-w-3xl bg-slate-100 mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900">Support Center</h1>
      <p className="text-lg text-center text-gray-600">How can we help you today?</p>
      
      {/* FAQ Section */}
      <Card className="shadow-lg border bg-sky-800 border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-white" /> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium cursor-pointer">How do I reset my password?</p>
              <p className="text-white">Go to settings and click on "Reset Password" to receive a reset link via email.</p>
            </div>
            <div>
              <p className="font-medium cursor-pointer">How can I contact support?</p>
              <p className="text-white">Use the contact form below or email us at support@example.com.</p>
            </div>
            <div>
              <p className="font-medium cursor-pointer">Can I upgrade my plan?</p>
              <p className="text-white">Yes, visit the billing section to view available plans and upgrade.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Contact Support Form */}
      <Card className="shadow-lg border border-gray-200">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Mail className="w-6 h-6 text-green-500" /> Contact Support
          </h2>
          <p className="text-gray-600 mb-4">Fill out the form below and our team will get back to you as soon as possible.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">Submit</Button>
          </form>
        </CardContent>
      </Card>

      {/* Additional Contact Info */}
      <div className="text-center text-gray-700 mt-6">
        <p className="flex items-center justify-center gap-2">
          <Phone className="w-5 h-5 text-red-500" /> Call us: +9999999999
        </p>
        <p className="flex items-center justify-center gap-2">
          <Mail className="w-5 h-5 text-green-500" /> Email: support@example.com
        </p>
      </div>
    </div>
  );
}