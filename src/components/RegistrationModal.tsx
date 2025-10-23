import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export function RegistrationModal({
  isOpen,
  onClose
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    department: '',
    email: '',
    phone: '',
    eventType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.college.trim()) newErrors.college = 'College name is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          college: '',
          department: '',
          email: '',
          phone: '',
          eventType: ''
        });
        onClose();
      }, 3000);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-blue-950 to-black border border-blue-600/50 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-white">Register Now</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <XIcon size={24} />
          </button>
        </div>
        {isSubmitted ? <div className="text-center py-12">
            <div className="w-20 h-20 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              Your registration has been submitted successfully.
            </p>
          </div> : <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-semibold">
                Name *
              </label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-blue-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your full name" />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">
                College Name *
              </label>
              <input type="text" name="college" value={formData.college} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-blue-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your college name" />
              {errors.college && <p className="text-red-400 text-sm mt-1">{errors.college}</p>}
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">
                Department *
              </label>
              <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-blue-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your department" />
              {errors.department && <p className="text-red-400 text-sm mt-1">{errors.department}</p>}
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">
                Email *
              </label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-blue-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your email" />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">
                Phone Number *
              </label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-blue-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors" placeholder="Enter your phone number" />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="block text-white mb-2 font-semibold">
                Event Type *
              </label>
              <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full px-4 py-3 bg-black/50 border border-blue-600/50 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors">
                <option value="">Select event type</option>
                <option value="technical">Technical Events</option>
                <option value="non-technical">Non-Technical Events</option>
              </select>
              {errors.eventType && <p className="text-red-400 text-sm mt-1">{errors.eventType}</p>}
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-blue-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-green-400/50 transition-all duration-300 hover:scale-105">
              Submit Registration
            </button>
          </form>}
      </div>
    </div>;
}