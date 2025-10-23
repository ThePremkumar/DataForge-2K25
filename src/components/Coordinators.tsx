import React from 'react';
import { UserIcon, PhoneIcon, MailIcon, MessageCircleMore  } from 'lucide-react';
const coordinators = {
  faculty: [{
    name: 'Mrs. Bhagyalaskmi V ',
    designation: 'Assistant Professor',
    phone: '+91 7483435523',
    email: 'saibhagya15@gmail.com',
    whatapp: 'https://wa.me/917483435523'
  }, {
    name: 'Ms. R. Deepa',
    designation: 'Assistant Professor',
    phone: '+91 939120118',
    email: 'siva54deepa@gmail.com',
    whatapp: 'https://wa.me/91939120118'
  }],
  students: [{
    name: 'Prem Kumar S',
    designation: 'Final Year CS&BS',
    phone: '+91 6369540320',
    email: 'premkumar2462004@gmail.com',
    whatapp: 'https://wa.me/916369540320'
  }, {
    name: 'Hasvamathi R',
    designation: 'Final Year CS&BS',
    phone: '+91 8248652895',
    email: 'hasvamathi@gmail.com',
    whatapp: 'https://wa.me/918248652895'
  }]
};
export function Coordinators() {
  return <section id="coordinators" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Event Coordinators
          </h2>
          <p className="text-xl text-gray-300">
            Meet the team behind DataForge 2K25
          </p>
        </div>
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Faculty Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.faculty.map((coordinator, index) => <div key={index} className="bg-blue-950/20 backdrop-blur-sm border border-blue-600/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-green-400 flex items-center justify-center mr-4">
                    <UserIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {coordinator.name}
                    </h4>
                    <p className="text-gray-400">{coordinator.designation}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <PhoneIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>{coordinator.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MailIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="break-all">{coordinator.email}</span>
                  </div>
                    <div className="flex items-center text-gray-300">
                        <MessageCircleMore  className="w-5 h-5 text-green-400 mr-3" />
                        <span className="font-semibold mr-2 text-white">WhatsApp:</span>
                        <a
                            href={`${coordinator.whatapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-green-300 hover:text-green-400 transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
              </div>)}
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-green-400 mb-8 text-center">
            Student Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinators.students.map((coordinator, index) => <div key={index} className="bg-blue-950/20 backdrop-blur-sm border border-blue-600/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center mb-4">
                    <UserIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white text-center">
                    {coordinator.name}
                  </h4>
                  <p className="text-gray-400 text-center">
                    {coordinator.designation}
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <PhoneIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>{coordinator.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MailIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span className="break-all">{coordinator.email}</span>
                  </div>
                    <div className="flex items-center text-gray-300">
                        <MessageCircleMore  className="w-5 h-5 text-green-400 mr-3" />
                        <span className="font-semibold mr-2 text-white">WhatsApp:</span>
                        <a
                            href={`${coordinator.whatapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="break-all text-green-300 hover:text-green-400 transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}