import React from 'react';
import { Role } from '../../content/careers';
import { ArrowRight, MapPin, Clock, Sparkles } from 'lucide-react';

interface RoleCardProps {
  role: Role;
  className?: string;
}

export function RoleCard({ role, className = '' }: RoleCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Part-time':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Internship':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Contract':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'Engineering':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Marketing':
        return 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Design':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Sales':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Operations':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getDepartmentColor(role.department)}`}>
              {role.department}
            </span>
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(role.type)}`}>
              {role.type}
            </span>
            {role.featured && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <Sparkles className="h-3 w-3 mr-1" />
                Featured
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {role.title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{role.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>Remote</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
        {role.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {role.requirements.slice(0, 2).map((req, index) => (
            <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {req.split(' ').slice(0, 3).join(' ')}...
            </span>
          ))}
        </div>
        <a
          href={role.applyUrl}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transform hover:scale-105"
        >
          Apply Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
} 