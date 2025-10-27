import React from 'react';
import {
  CodeIcon,
  BrainIcon,
  PresentationIcon,
  TrophyIcon,
  ChevronDownIcon,
} from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';

// ======================
//  TECHNICAL EVENT DATA
// ======================
const events = [
  {
    title: 'Paper Presentation',
    description:
      'Present innovative research papers or ideas on recent technological trends and innovations. Demonstrate your analytical and presentation skills.',
    icon: PresentationIcon,
    color: 'from-blue-400 to-green-400',
    topics: [
      'Artificial Intelligence, Machine Learning & LLM Applications',
      'Blockchain and Secure Data Management Systems',
      'Cybersecurity, AI Threat Intelligence & Digital Forensics',
      'Big Data, Cloud, and Edge Computing',
      'Bioinformatics, Biomedical Engineering & AI in Healthcare',
      'Optimization, Computation & Quantum-Inspired Intelligence',
      'Internet of Things (IoT) & Smart Environments',
      'Robotics, Automation & Intelligent Control Systems',
      'Sustainable Business Models and Green Technology',
      'Business Analytics, Predictive Intelligence & Decision Support Systems',
    ],
    rules: [
      'Maximum 4 members per team; solo participation allowed.',
      'A participant cannot join multiple teams.',
      'No changes in team members after registration.',
      'All members must contribute to paper preparation and presentation.',
      'All members must be present and participate in the Q&A session.',
      'Topics must relate to recent technological trends and innovative research areas.',
      'Abstract must be within 250 words.',
      'Only shortlisted abstracts will qualify for final presentation.',
      'Abstract submission deadline: 30th October 2025.',
      'Presentation time: 8 minutes + 2 minutes for Q&A.',
      'PowerPoint (PPT) slides are mandatory.',
    ],
  },
  {
    title: 'Technical Trivia (Quiz)',
    description:
      'A fast-paced technical quiz that challenges your programming knowledge, logic, and general awareness in computing and engineering fields.',
    icon: TrophyIcon,
    color: 'from-green-400 to-blue-600',
    topics: [
      'Programming Languages',
      'Networking',
      'Computer Science Fundamentals',
      'Electrical Concepts',
      'Business and Management',
    ],
    rules: [
      'Each team must consist of 2 or 3 members only.',
      '15 seconds will be provided to answer each question.',
      'The quiz consists of 90% technical and 10% non-technical (general knowledge) questions.',
      'For every incorrect answer, 1 mark will be deducted (negative marking).',
      'The use of electronic devices such as mobile phones, smart watches, or calculators is strictly prohibited.',
      'Participants must maintain discipline throughout the event.',
      'Any malpractice or misconduct may lead to disqualification.',
    ],
  },
  {
    title: 'Logical Coding / Code Golf',
    description:
      'Test your logic, accuracy, and efficiency by solving coding challenges. Code the shortest and most optimized solutions possible!',
    icon: BrainIcon,
    color: 'from-green-400 to-blue-400',
    topics: [
      'BASIC LOGIC TOPICS',
      '• Input and Output',
      '• Conditional Statements',
      '• Loops',
      '• Pattern Printing',
      '• Basic Mathematical Operations',
      '• String Reversal, Palindrome Check, Sum of Digits',
      '• Arrays – Sum and Average',
      '• Even or Odd Check',
      '',
      'MODERATE LOGIC TOPICS',
      '• Prime Number Check, Armstrong Number, Fibonacci Series',
      '• Sorting and Searching, Second Largest Element',
      '• Frequency Count in Array/String, Anagram Check',
      '• Missing Number in Sequence, Swapping Without Third Variable',
      '• Simple Mathematical Series',
      '',
      'HIGH LOGIC TOPICS',
      '• Recursion Problems, Matrix Operations',
      '• String Compression, Balanced Parentheses',
      '• Magic Number, Sum of Primes in Range',
      '• Bitwise Operations, Tower of Hanoi',
      '• Pattern with Complex Logic, Custom Algorithm Design',
    ],
    rules: [
      'Individual participation only — no team entries are allowed.',
      'Participants must have an IDE or code editor installed on their machine (e.g., VS Code, Spyder, Eclipse, etc.).',
      'Participants may use any programming language to solve the given problems.',
      'Internet usage, external assistance, and AI tools are strictly prohibited.',
      'Copying or pasting code is not allowed.',
      'Participants must bring their own laptops for the competition.',
      'The number of rounds will be decided based on the number of participants present.',
      'Writing code on paper is permitted if required.',
      'Problems will be assessed based on logic, accuracy, and time efficiency.',
      'In Code Golf, the shortest correct code will be declared the winner.',
      'Judging Criteria: Fastest solution submitted within time and shortest code with correct output.',
      'Judges’ decision will be final and binding.',
      'All participants will receive certificates of participation.',
    ],
  },
  {
    title: 'Blind Coding',
    description:
      'A unique coding challenge where participants must type code without viewing the screen. It tests focus, logic, and coding precision under pressure.',
    icon: CodeIcon,
    color: 'from-blue-600 to-blue-400',
    topics: [
      'Programming languages allowed: Java, Python, JavaScript, C++',
      'Algorithmic thinking and syntax recall',
      'Typing precision and debugging through reasoning',
    ],
    rules: [
      'Participants can compete individually or in pairs.',
      'Languages allowed: Java, Python, JavaScript, C++.',
      'Monitor screen will be turned off or covered during the round.',
      'Problem statement will be shown or read aloud before starting.',
      'Participants must type the entire code blindly within the given time limit.',
      'Any syntax or logic error will affect scoring.',
      'Disqualification Criteria:',
      '• Turning on or looking at the monitor during the event.',
      '• Seeking help or discussing with other participants.',
      '• Using online compilers, syntax highlighting, or code assist tools.',
    ],
  },
];

// ======================
//  TECHNICAL EVENTS UI
// ======================
export function TechnicalEvents() {
  return (
    <section id="technical" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Technical Events
          </h2>
          <p className="text-xl text-gray-300">
            Challenge your technical prowess and showcase your skills
          </p>
        </div>

        {/* Event Cards */}
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
                  <Accordion.Root
                    type="single"
                    collapsible
                    className="w-full"
                    key={`accordion-${index}`}
                  >
                    <Accordion.Item
                      value={`topics-${index}`}
                      className="border-t border-blue-600/30"
                    >
                      <Accordion.Trigger className="flex items-center justify-between w-full py-4 text-left text-white hover:text-green-400 transition-colors group/trigger">
                        <span className="font-semibold">
                          Topics & Rules
                        </span>
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
