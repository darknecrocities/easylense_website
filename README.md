# 🌐 EasyLens Web Platform

> A premium, highly interactive, glassmorphism-inspired landing hub for the **EasyLens AI & IoT Navigation Ecosystem**.

![EasyLens Banner](./public/images/main_banner.png)

## Overview

The EasyLens website is designed to perfectly encapsulate the radical autonomy, predictive safety, and deeply complex technological framework of the EasyLens mobile application and its associated IoT Smart Glasses. Engineered with performance and aesthetics in mind, this site hits strict **WCAG 2.1 AAA Compliance** while avoiding standard utilitarian UI pitfalls, offering a sleek, dark-mode-first Crystal UX.

## 🚀 Tech Stack

This front-end documentation platform leverages a modern, rapid rendering stack:
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (Scroll states, Modals, Parallax elements)
- **Icons**: Lucide React
- **Themes**: next-themes (Dark Mode Default)

## ✨ Key App Capabilities

- **Real-Time Environment Auditing**: Leveraging the "Eagle Eye" pipeline to detect hazards, obstacles, and navigation markers at sub-100ms latency.
- **Bi-Directional IoT Sync**: Seamlessly pushes haptic pulse commands to the Smart Glasses while pulling wide-angle video telemetry via the ESP32-S3 node.
- **Multimodal AI Assistant**: A persistent, vision-aware LLM (TinyLlama) that can answer spatial questions like "Where is the nearest seating area?" without ever leaving the device.
- **Visual Intelligence Modes**:
  - **Standard**: Optimized for sidewalk navigation and pedestrian crossings.
  - **Indoor High-Precision**: Focused on identifying stairs, doorways, and floor hazards.
  - **Low-Light (Neural Gain)**: AI-enhanced frame analysis for night-time autonomy.

## ✨ Web Platform Modules

The website provides rich interactive modules detailing the core EasyLens systems:
- **The "Smart Vision" Stack**: Explaining the orchestration between the Flutter Mobile Hub and the dual-link ESP32-S3 IoT Glasses.
- **Eagle Eye Dual-API Pipeline**: Detailing Google ML Kit (30-60 FPS) and the custom MobileNetV2-SSD bounds.
- **Offline Intelligence**: Breaking down the on-device TinyLlama 1.1B LLM reasoning logic.
- **Crystal UX Architecture**: Highlighting the *Slide-to-Hide Mic* and Haptic Context mapping systems directly through fully interactive Modals.

## 🛠️ Local Development

To spin up the web platform locally with live-reloading:

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser. All visual assets (app screens, developer profiles, and hardware icons) are fully mapped within the static `public/images/` directory.

## 🤝 Contribution & License

This landing platform represents the core public face of the open-source EasyLens project. Accessibility is a Human Right. All frontend interfaces are free to iterate upon to assist with increasing visibility for spatial computing and assistive technologies.
