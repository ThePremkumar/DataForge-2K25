import React, { lazy } from 'react';
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
export function VenueContact() {
  return <section id="venue" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
            Venue & Contact
          </h2>
          <p className="text-xl text-gray-300">Find us and get in touch</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 sm:p-8 mb-8">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Address
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Er. Perumal Manimekalai College of Engineering
                      <br />
                      West Block Auditorium
                      <br />
                      Hosur, Tamil Nadu
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-6 h-6 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base">
                      +91 6369540320
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="w-6 h-6 text-cyan-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h4>
                    <p className="text-gray-300 text-sm sm:text-base break-all">
                      premkumar2462004@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-slate-900/40 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden h-full min-h-[400px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59196.220291285805!2d77.93902949262142!3d12.690288694399847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badd7b86d5c525b%3A0x96adb36aef28bc00!2sEr.%20Perumal%20Manimekalai%20College%20of%20Engineering!5e1!3m2!1sen!2sin!4v1761198727224!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="100%" height="100%" style={{
              border: 0,
              minHeight: '400px'
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="PMC Tech Location"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
}