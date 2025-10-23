import React from 'react';
import { CodeIcon, BrainIcon, PresentationIcon, TrophyIcon, ChevronDownIcon } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
const events = [{
  title: 'Blind Coding',
  description: 'Test coding skills without seeing what you type; a thrilling real-time challenge',
  icon: CodeIcon,
  color: 'from-blue-600 to-blue-400',
  topics: ['Array manipulation and searching algorithms', 'String processing and pattern matching', 'Basic data structures (Stack, Queue, Linked List)', 'Sorting and searching techniques', 'Mathematical problem solving'],
  rules: ['Monitor will be turned off while coding', 'Time limit: 30 minutes', 'Code must compile and run successfully', 'Judged on accuracy and efficiency']
}, {
  title: 'Logical Coding / Code Golf',
  description: 'Write the most efficient and shortest code to solve logical problems; focus on accuracy and optimization',
  icon: BrainIcon,
  color: 'from-green-400 to-blue-400',
  topics: ['Code optimization techniques', 'Algorithmic efficiency (Time & Space complexity)', 'Recursive vs Iterative solutions', 'Dynamic programming basics', 'Bit manipulation tricks'],
  rules: ['Shortest code wins (character count)', 'Code must be readable and functional', 'Standard libraries allowed', 'Multiple test cases will be evaluated']
}, {
  title: 'Paper Presentation',
  description: 'Platform for presenting innovative technical ideas and research papers on topics including AI, Data Science, IoT, Cybersecurity',
  icon: PresentationIcon,
  color: 'from-blue-400 to-green-400',
  topics: ['Artificial Intelligence & Machine Learning applications', 'Data Science and Big Data Analytics', 'Internet of Things (IoT) innovations', 'Cybersecurity threats and solutions', 'Cloud Computing and Edge Computing', 'Blockchain technology and applications'],
  rules: ['Presentation time: 10-12 minutes', 'Abstract submission required', 'PowerPoint/PDF format accepted', 'Q&A session included']
}, {
  title: 'Technical Trivia (Quiz)',
  description: 'Fast-paced technical quiz testing programming knowledge, IT trends, and logical thinking',
  icon: TrophyIcon,
  color: 'from-green-400 to-blue-600',
  topics: ['Programming languages (C, C++, Java, Python)', 'Data Structures and Algorithms', 'Operating Systems and Networks', 'Database Management Systems', 'Current IT trends and technologies', 'Software Engineering principles'],
  rules: ['Multiple rounds: Prelims and Finals', 'Rapid fire and buzzer rounds', 'Team event (2-3 members)', 'No electronic devices allowed']
}];
export function TechnicalEvents() {
  return <section id="technical" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Events
          </h2>
          <p className="text-xl text-gray-300">
            Challenge your technical prowess and compete with the best
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            Topics Covered:
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