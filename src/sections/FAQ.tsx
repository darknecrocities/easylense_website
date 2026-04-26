"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Which mobile platforms are supported?",
      answer: "EasyLens is fully supported on both Android and iOS. We have optimized our local AI models to leverage the NPU on Android devices and the Neural Engine on iPhones for the best offline performance."
    },
    {
      question: "Can I use EasyLens without the Smart Glasses?",
      answer: "Yes! While the Smart Glasses offer a premium hands-free experience, the EasyLens app is a powerful standalone tool. You can use your phone's camera for real-time object detection, text reading, and navigation directly from the mobile interface."
    },
    {
      question: "How does the Offline AI work?",
      answer: "EasyLens utilizes TinyLlama 1.1B, a distilled large language model that runs entirely on your phone's hardware. This ensures environmental reasoning and scene description work without any internet connection."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. Our 'Zero-Cloud' philosophy means your camera feed and voice interactions are processed locally. No raw data is ever sent to or stored on our servers."
    },
    {
      question: "When will the beta participants be announced?",
      answer: "We will be announcing all the selected participants during the early week of July. Stay tuned as we begin inviting users to test the application and help shape the future of EasyLens!"
    },
    {
      question: "How long is the battery life on the glasses?",
      answer: "The customized ESP32-S3 hardware is optimized for low power. You can expect 4-6 hours of continuous real-time streaming, which can be extended via the standard USB-C charging port."
    },
    {
      question: "How do the glasses communicate with the phone?",
      answer: "The glasses use a low-latency BLE (Bluetooth Low Energy) connection for data and a high-speed Wi-Fi Direct stream for real-time video processing."
    },
    {
      question: "Can it read text in the dark?",
      answer: "The Smart Glasses feature a low-light sensor and a subtle infrared illuminator, allowing for OCR (Optical Character Recognition) even in dim environments."
    },
    {
      question: "What is the weight of the glasses?",
      answer: "The prototypes weigh approximately 42 grams—roughly the same as a standard pair of premium sunglasses—ensuring comfort for all-day wear."
    },
    {
      question: "Is there a subscription fee?",
      answer: "No. The core AI features are provided as part of the hardware purchase. We believe accessibility should not be behind a recurring paywall."
    },
    {
      question: "How accurate is the navigation pathing?",
      answer: "By combining OSRM pathing with real-time obstacle avoidance, our navigation is accurate within 1 meter for outdoor pedestrian paths."
    },
    {
      question: "Can it recognize currency?",
      answer: "Yes, we have a specialized local model for global currency identification, helping users manage transactions independently."
    },
    {
      question: "Does it support voice commands?",
      answer: "Full voice control is integrated. You can ask 'What is in front of me?' or 'Navigate to the nearest pharmacy' entirely hands-free."
    },
    {
      question: "Is the hardware open-source?",
      answer: "We are committed to the community. While the core commercial hardware is proprietary, we provide open-source firmware modules for developers."
    },
    {
      question: "How do I update the firmware?",
      answer: "Firmware updates are delivered over-the-air (OTA) via the EasyLens mobile app, ensuring your glasses always have the latest AI optimizations."
    },
    {
      question: "Can it detect fast-moving objects?",
      answer: "The AI processes frames at 30fps, allowing it to detect and warn you about approaching vehicles or cyclists in real-time."
    },
    {
      question: "What happens if I lose my phone?",
      answer: "The glasses themselves do not store personal data. Your trained models and settings are backed up securely to your local phone storage or personal cloud choice."
    },
    {
      question: "Is there haptic feedback?",
      answer: "Yes, the phone will serve you as our vibrate sensor during navigation awareness."
    },
    {
      question: "Can I wear them over prescription glasses?",
      answer: "We are developing a 'Clip-On' version of the EasyLens module that can be attached to existing prescription eyewear."
    },
    {
      question: "How can I contribute to the project?",
      answer: "You can contribute by joining our developer community on GitHub, reporting bugs during beta, or suggesting new object labels for our training datasets."
    },
    {
      question: "What is the minimum OS version required?",
      answer: "EasyLens requires Android 11+ with an ARCore-capable NPU or iOS 15+ (iPhone 12 or newer) to handle the neural processing locally."
    },
    {
      question: "Can it identify colors?",
      answer: "Yes, the AI includes a high-accuracy color recognition mode to assist with daily tasks like sorting laundry or choosing outfits."
    },
    {
      question: "Does it work indoors?",
      answer: "Yes, the AI is trained for both indoor and outdoor environments, identifying furniture, doorways, and common household hazards."
    },
    {
      question: "How do I calibrate the camera?",
      answer: "Calibration is handled automatically during the initial setup via the app. The AI constantly self-calibrates to account for different lighting conditions."
    },
    {
      question: "Is there a desktop version?",
      answer: "Not currently. EasyLens is designed for mobile and wearable use to ensure maximum portability for our users."
    },
    {
      question: "Does it work with screen readers?",
      answer: "Yes, the app is built with native accessibility hooks for both TalkBack (Android) and VoiceOver (iOS)."
    },
    {
      question: "Can I export my interaction logs?",
      answer: "For privacy reasons, logs are kept locally, but you can export a summary of your usage statistics if you choose to do so."
    },
    {
      question: "How can I donate to the project?",
      answer: "We appreciate your support! You can find donation links on our official GitHub repository or contact our team directly for partnership opportunities."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full glass border-white/20 mb-6 font-medium text-sm text-primary">
            ❓ Common Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
             Everything you need to <span className="text-gradient">Know</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl overflow-hidden border border-white/10">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                   <HelpCircle className={`w-5 h-5 transition-colors ${openIndex === idx ? 'text-primary' : 'text-foreground/30'}`} />
                   <span className="font-bold text-lg">{faq.question}</span>
                </div>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-foreground/30" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-foreground/70 leading-relaxed pl-[3.5rem]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

