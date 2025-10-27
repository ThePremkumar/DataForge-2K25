import React from 'react';
import {
  PaletteIcon,
  ChefHatIcon,
  HammerIcon,
  SmileIcon,
  ChevronDownIcon,
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

// ======================
//  NON-TECHNICAL EVENT DATA
// ======================
const events = [
  {
    title: 'Poster Design',
    description:
      'Design digital posters that communicate impactful ideas with creativity, clarity, and innovation.',
    icon: PaletteIcon,
    color: 'from-blue-600 to-green-400',
    topics: [
      'Technology and Innovation',
      'Environmental Awareness and Sustainability',
      'Digital Transformation in Society',
      'Future of AI and Automation',
      'Cybersecurity and Data Privacy',
      'Creative Engineering and Design Ideas',
    ],
    rules: [
      'All posters must be created and submitted in digital format.',
      'Posters should be in JPEG or PPT format.',
      'Posters must be designed within the event premises.',
      'Preparation time: 30 minutes.',
      'Posters should be visually attractive, clear, and well-organized.',
      'Maximum of 3 members per team; solo participation allowed.',
      'Last date to register or pre-submit topics: 31/10/2025.',
      'Presentation: 5 minutes for presentation + 3 minutes for viva.',
      'Posters must be original; plagiarism or AI-generated content is prohibited.',
      'Posters should focus on relevant, informative, and innovative ideas.',
      'Participants must bring their own laptops or pen drives.',
      'Internet usage or AI tools are strictly prohibited during poster preparation.',
      'Judgment Criteria: Creativity & Design Quality, Clarity, Relevance, and Viva Performance.',
      'The judges’ decision will be final and binding.',
      'All participants will receive certificates of participation.',
      'Maintain professional conduct and punctuality throughout the event.',
    ],
  },
  {
    title: 'Memo-O-Logic',
    description:
      'Create technology-themed digital memes or visual stories that combine humor, creativity, and technical insight.',
    icon: SmileIcon,
    color: 'from-green-400 to-blue-400',
    topics: [
      'Artificial Intelligence & Automation',
      'Internet & Communication',
      'Cybersecurity & Privacy',
      'Smart Devices & Apps',
      'Future Tech and Innovation',
      'AI & Human Emotions',
      'Face Unlock Fails and Online Ads',
      'Tech in Daily Life and Cloud Storage',
    ],
    rules: [
      'Maximum of two members per team; solo participation permitted.',
      'Topics must be related to technology.',
      'Final topic will be given on the spot during the event.',
      'Output must be relevant to the given topic and in image or video form.',
      'Time limit: 25 minutes.',
      'Participants entering multiple topics must pay separately for each.',
      'Use of AI tools or assistance is strictly prohibited.',
      'Non-AI software can be used to create outputs.',
      'Judgment Criteria: Relevance, Creativity, Message Clarity, and Technical Presentation.',
      'The judges’ decision will be final and binding.',
    ],
  },
  {
    title: 'Fireless Cooking',
    description:
      'Prepare delicious dishes without using fire — a test of creativity, taste, and presentation.',
    icon: ChefHatIcon,
    color: 'from-green-400 to-blue-600',
    topics: [
      'Healthy salads and smoothie bowls',
      'No-bake desserts and sweets',
      'Creative sandwiches and wraps',
      'Fruit and vegetable art',
      'Innovative juice and mocktail recipes',
      'Quick snacks and appetizers',
    ],
    rules: [
      'Use of stoves, microwaves, induction cooktops, or fire-based appliances is prohibited.',
      'Only fireless preparation methods are allowed.',
      'Participants must bring all ingredients and utensils; none will be provided.',
      'Dishes must be prepared entirely at the venue using raw ingredients.',
      'Pre-cooked or pre-cut items are not allowed.',
      'Time limit: 30–45 minutes.',
      'Judging Criteria: Taste, Presentation & Creativity, Cleanliness, and Explanation.',
      'All ingredients must be brought by participants.',
      'No ready-made food items or pre-cooked dishes are permitted.',
      'The dish should be entirely prepared on-site using only raw materials.',
    ],
  },
  {
    title: 'Craft-O-Mania',
    description:
      'Showcase your artistic flair by creating unique crafts with your own materials — creativity meets sustainability!',
    icon: HammerIcon,
    color: 'from-blue-400 to-green-400',
    topics: [
      'On-the-spot theme announced during the event',
      'Handmade art using craft or recycled materials',
      'Decorative and innovative craft concepts',
    ],
    rules: [
      'Participants must bring their own craft materials.',
      'No materials will be provided at the venue.',
      'The theme will be announced on the spot at the beginning of the event.',
      'Individual participation only; team entries are not allowed.',
      'Total duration: 60 minutes for craft preparation.',
      'Bonus points for using recycled or waste materials.',
      'Judging Criteria: Creativity, Relevance to Theme, Neatness, and Effective Use of Materials.',
      'The judges’ decision will be final and binding.',
    ],
  },
];

// ======================
//  NON-TECHNICAL EVENTS UI
// ======================
export function NonTechnicalEvents() {
  return (
    <section
      id="non-technical"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-blue-950/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Non-Technical Events
          </h2>
          <p className="text-xl text-gray-300">
            Express your creativity and talent beyond the code
          </p>
        </div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl p-[2px] bg-gradient-to-br from-green-500/40 to-blue-500/30 hover:from-green-400 hover:to-blue-400 transition-all duration-500"
              >
                <div className="bg-black rounded-2xl p-8 border border-blue-700/40 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-400/20">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Accordion */}
                  <Accordion.Root type="single" collapsible className="w-full">
                    <Accordion.Item
                      value={`topics-${index}`}
                      className="border-t border-blue-600/30"
                    >
                      <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left text-white hover:text-green-400 transition-colors group/trigger">
                        <span className="font-semibold">Topics & Rules</span>
                        <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180" />
                      </Accordion.Trigger>
                      <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                        <div className="pb-4 space-y-4">
                          {/* Topics */}
                          <div>
                            <h4 className="text-green-400 font-semibold mb-2">
                              Topics Covered:
                            </h4>
                            <ul className="space-y-2">
                              {event.topics.map((topic, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-300 text-sm flex items-start"
                                >
                                  <span className="text-green-400 mr-2">•</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Rules */}
                          <div>
                            <h4 className="text-blue-400 font-semibold mb-2">
                              Rules & Guidelines:
                            </h4>
                            <ul className="space-y-2">
                              {event.rules.map((rule, idx) => (
                                <li
                                  key={idx}
                                  className="text-gray-300 text-sm flex items-start"
                                >
                                  <span className="text-blue-400 mr-2">•</span>
                                  {rule}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Item>
                  </Accordion.Root>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
