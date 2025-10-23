import React from 'react';
import { PaletteIcon, ChefHatIcon, SmileIcon, ChevronDownIcon } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
const events = [{
  title: 'Poster Design',
  description: 'Showcase creativity and design talent through impactful posters',
  icon: PaletteIcon,
  color: 'from-blue-600 to-green-400',
  topics: ['Technology and Innovation themes', 'Environmental awareness and sustainability', 'Digital transformation in society', 'Future of AI and Automation', 'Cybersecurity awareness campaigns', 'Data privacy and ethics'],
  rules: ['Size: A3 or A2 format', 'Digital or hand-drawn accepted', 'Original work only', 'Theme announcement on event day', 'Time limit: 2 hours']
}, {
  title: 'Fireless Cooking',
  description: 'Cook creatively without using fire; demonstrate innovation in simplicity',
  icon: ChefHatIcon,
  color: 'from-green-400 to-blue-600',
  topics: ['Healthy salads and smoothie bowls', 'No-bake desserts and sweets', 'Creative sandwiches and wraps', 'Fruit and vegetable art', 'Innovative juice and mocktail recipes', 'Quick snacks and appetizers'],
  rules: ['No fire or heat sources allowed', 'Ingredients provided on spot', 'Hygiene and presentation matter', 'Time limit: 45 minutes', 'Team event (2 members)']
}, {
  title: 'Meme-o-Logic (Tech-Based Memes)',
  description: 'Create funny, relatable memes connecting humor with technology and innovation',
  icon: SmileIcon,
  color: 'from-blue-400 to-green-400',
  topics: ['Programming bugs and debugging humor', 'Software developer life struggles', 'Tech company culture and trends', 'AI and Machine Learning jokes', 'Internet and social media trends', 'Tech support and IT department humor'],
  rules: ['Original memes only', 'Technology theme mandatory', 'Digital submission required', 'Time limit: 30 minutes', 'Appropriate content only']
}];
export function NonTechnicalEvents() {
  return <section id="non-technical" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Non-Technical Events
          </h2>
          <p className="text-xl text-gray-300">
            Express your creativity and have fun beyond the code
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => {
          const Icon = event.icon;
          return <div key={index} className="group bg-blue-950/20 backdrop-blur-sm border border-blue-600/30 rounded-xl p-8 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-400/20">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {event.description}
                </p>
                <Accordion.Root type="single" collapsible className="w-full">
                  <Accordion.Item value="topics" className="border-t border-blue-600/30">
                    <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left text-white hover:text-green-400 transition-colors group/trigger">
                      <span className="font-semibold">
                        Example Topics & Rules
                      </span>
                      <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                      <div className="pb-4 space-y-4">
                        <div>
                          <h4 className="text-green-400 font-semibold mb-2">
                            Example Topics:
                          </h4>
                          <ul className="space-y-2">
                            {event.topics.map((topic, idx) => <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="text-green-400 mr-2">•</span>
                                {topic}
                              </li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-blue-400 font-semibold mb-2">
                            Rules & Guidelines:
                          </h4>
                          <ul className="space-y-2">
                            {event.rules.map((rule, idx) => <li key={idx} className="text-gray-300 text-sm flex items-start">
                                <span className="text-blue-400 mr-2">•</span>
                                {rule}
                              </li>)}
                          </ul>
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>;
        })}
        </div>
      </div>
    </section>;
}