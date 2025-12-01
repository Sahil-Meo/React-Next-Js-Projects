import { ChevronDown, ChevronUp, Users, Target, Award, Lightbulb, Globe, Shield } from "lucide-react";
import React, { useState } from "react";
import HeaderBanner from "../components/HeaderBanner";

const AboutPage = () => {
     const [openFaq, setOpenFaq] = useState(null);

     const toggleFaq = (index) => {
          setOpenFaq(openFaq === index ? null : index);
     };

     const faqs = [
          {
               question: "What makes your AI solutions different from competitors?",
               answer:
                    "Our AI solutions are built on cutting-edge machine learning algorithms with a focus on explainable AI. We prioritize transparency, ethical AI practices, and custom solutions tailored to each client's specific needs. Our team combines deep technical expertise with industry knowledge to deliver results that are not just powerful, but also responsible and sustainable.",
          },
          {
               question: "How do you ensure data privacy and security?",
               answer:
                    "We implement enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, and compliance with GDPR, CCPA, and other international data protection standards. Our systems undergo regular security audits, and we maintain strict access controls with multi-factor authentication across all platforms.",
          },
          {
               question: "What industries do you serve?",
               answer:
                    "We serve a diverse range of industries including healthcare, finance, retail, manufacturing, education, and technology. Our AI solutions are adaptable and can be customized for specific industry requirements, regulatory compliance, and unique business challenges across various sectors.",
          },
          {
               question: "How long does it typically take to implement an AI solution?",
               answer:
                    "Implementation timelines vary based on project complexity and scope. Simple AI integrations can take 2-4 weeks, while comprehensive enterprise solutions may require 3-6 months. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process.",
          },
          {
               question: "Do you provide ongoing support and maintenance?",
               answer:
                    "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and technical support. Our team provides training for your staff and ensures your AI solutions continue to evolve with your business needs and the latest technological advancements.",
          },
          {
               question: "Can you integrate with our existing systems?",
               answer:
                    "Absolutely. Our AI solutions are designed with integration in mind. We work with popular platforms, APIs, databases, and enterprise software. Our team conducts thorough system analysis to ensure seamless integration with minimal disruption to your current operations.",
          },
     ];

     return (
          <div className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
               <HeaderBanner
                    title={"About Us"}
                    subtitle={" AI solutions that solve real-world problems. Our mission is to make AI accessible, ethical, and transformative for businesses of all sizes."}
                    backgroundImage={"/ai-project-8.png"}
               />
               {/* About Section with Image */}
               <div className="py-20 px-6">
                    <div className="max-w-7xl mx-auto">
                         <div className="grid lg:grid-cols-2 gap-16 items-center">
                              {/* Text Content */}
                              <div className="space-y-8">
                                   <div>
                                        <h2 className="text-5xl font-bold mb-6 leading-tight">Shaping Tomorrow's Intelligence Today</h2>
                                        <p className="text-xl text-[rgb(var(--muted-foreground))] leading-relaxed mb-8">
                                             Founded in 2019, we are a leading artificial intelligence company dedicated to developing cutting-edge AI solutions that solve
                                             real-world problems. Our mission is to make AI accessible, ethical, and transformative for businesses of all sizes.
                                        </p>
                                   </div>

                                   <div className="space-y-6">
                                        <p className="text-lg leading-relaxed">
                                             With a team of world-class researchers, engineers, and AI specialists, we've successfully deployed AI solutions across 40+
                                             countries, helping over 500 companies optimize their operations, enhance customer experiences, and drive innovation.
                                        </p>

                                        <p className="text-lg leading-relaxed">
                                             Our commitment to responsible AI development ensures that every solution we create is transparent, fair, and aligned with human
                                             values. We believe that artificial intelligence should augment human capabilities, not replace them.
                                        </p>
                                   </div>

                                   {/* Stats */}
                                   <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[rgb(var(--border))]">
                                        <div className="text-center">
                                             <div className="text-3xl font-bold text-[rgb(var(--primary))] mb-2">500+</div>
                                             <div className="text-[rgb(var(--muted-foreground))]">Clients Served</div>
                                        </div>
                                        <div className="text-center">
                                             <div className="text-3xl font-bold text-[rgb(var(--primary-400))] mb-2">40+</div>
                                             <div className="text-[rgb(var(--muted-foreground))]">Countries</div>
                                        </div>
                                        <div className="text-center">
                                             <div className="text-3xl font-bold text-[rgb(var(--success))] mb-2">99.9%</div>
                                             <div className="text-[rgb(var(--muted-foreground))]">Uptime</div>
                                        </div>
                                   </div>
                              </div>

                              {/* Image */}
                              <div className="relative">
                                   <img
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
                                        alt="Our team collaborating on AI solutions"
                                        className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Values Section */}
               <div className="py-20 bg-[rgb(var(--surface))] px-6">
                    <div className="max-w-7xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
                              <p className="text-xl text-[rgb(var(--muted-foreground))] max-w-3xl mx-auto">
                                   These principles guide everything we do and shape the future we're building together.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {/* Example Value Card */}
                              <div className="text-center p-8 rounded-2xl bg-[rgb(var(--primary-50))] hover:bg-[rgb(var(--primary-100))] transition-colors duration-300">
                                   <Users className="w-16 h-16 text-[rgb(var(--primary))] mx-auto mb-6" />
                                   <h3 className="text-2xl font-bold mb-4">Human-Centric</h3>
                                   <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                                        We design AI that enhances human capabilities and creates meaningful value for people and society.
                                   </p>
                              </div>

                              <div className="text-center p-8 rounded-2xl bg-[rgb(var(--primary-50))] hover:bg-[rgb(var(--primary-100))] transition-colors duration-300">
                                   <Shield className="w-16 h-16 text-[rgb(var(--primary-400))] mx-auto mb-6" />
                                   <h3 className="text-2xl font-bold mb-4">Ethical AI</h3>
                                   <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                                        Transparency, fairness, and responsibility are at the core of every AI solution we develop.
                                   </p>
                              </div>

                              <div className="text-center p-8 rounded-2xl bg-[rgb(var(--primary-50))] hover:bg-[rgb(var(--primary-100))] transition-colors duration-300">
                                   <Lightbulb className="w-16 h-16 text-[rgb(var(--accent))] mx-auto mb-6" />
                                   <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                                   <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                                        We push the boundaries of what's possible, turning cutting-edge research into practical solutions.
                                   </p>
                              </div>

                              <div className="text-center p-8 rounded-2xl bg-[rgb(var(--primary-50))] hover:bg-[rgb(var(--primary-100))] transition-colors duration-300">
                                   <Target className="w-16 h-16 text-[rgb(var(--warning))] mx-auto mb-6" />
                                   <h3 className="text-2xl font-bold mb-4">Results-Driven</h3>
                                   <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                                        Every project is focused on delivering measurable impact and tangible business outcomes.
                                   </p>
                              </div>

                              <div className="text-center p-8 rounded-2xl bg-[rgb(var(--primary-50))] hover:bg-[rgb(var(--primary-100))] transition-colors duration-300">
                                   <Globe className="w-16 h-16 text-[rgb(var(--primary-600))] mx-auto mb-6" />
                                   <h3 className="text-2xl font-bold mb-4">Global Impact</h3>
                                   <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                                        We strive to create AI solutions that benefit communities and businesses worldwide.
                                   </p>
                              </div>

                              <div className="text-center p-8 rounded-2xl bg-[rgb(var(--primary-50))] hover:bg-[rgb(var(--primary-100))] transition-colors duration-300">
                                   <Award className="w-16 h-16 text-[rgb(var(--destructive))] mx-auto mb-6" />
                                   <h3 className="text-2xl font-bold mb-4">Excellence</h3>
                                   <p className="text-[rgb(var(--muted-foreground))] leading-relaxed">
                                        We maintain the highest standards in research, development, and customer service.
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>

               {/* FAQ Section */}
               <div className="py-20 bg-[rgb(var(--bg))] px-6">
                    <div className="max-w-4xl mx-auto">
                         <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                              <p className="text-xl text-[rgb(var(--muted-foreground))]">Get answers to common questions about our AI solutions and services.</p>
                         </div>

                         <div className="space-y-6">
                              {faqs.map((faq, index) => (
                                   <div
                                        key={index}
                                        className="bg-[rgb(var(--surface))] rounded-xl shadow-sm border border-[rgb(var(--border))] overflow-hidden transition-all duration-300 hover:shadow-md"
                                   >
                                        <button
                                             onClick={() => toggleFaq(index)}
                                             className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--ring))] focus:ring-inset"
                                        >
                                             <div className="flex justify-between items-center">
                                                  <h3 className="text-xl font-semibold pr-8">{faq.question}</h3>
                                                  {openFaq === index ? (
                                                       <ChevronUp className="w-6 h-6 text-[rgb(var(--muted-foreground))] flex-shrink-0" />
                                                  ) : (
                                                       <ChevronDown className="w-6 h-6 text-[rgb(var(--muted-foreground))] flex-shrink-0" />
                                                  )}
                                             </div>
                                        </button>

                                        {openFaq === index && (
                                             <div className="px-8 pb-8 pt-0">
                                                  <div className="border-t border-[rgb(var(--border))] pt-6">
                                                       <p className="text-[rgb(var(--muted-foreground))] leading-relaxed text-lg">{faq.answer}</p>
                                                  </div>
                                             </div>
                                        )}
                                   </div>
                              ))}
                         </div>

                         {/* CTA */}
                         <div className="text-center mt-16">
                              <p className="text-lg text-[rgb(var(--muted-foreground))] mb-6">Still have questions? We're here to help.</p>
                              <button className="bg-[rgb(var(--primary))] hover:bg-[rgb(var(--primary-600))] text-[rgb(var(--primary-foreground))] px-8 py-4 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                                   Contact Our Team
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutPage;
