# Strategic Designers Vlog

A modern, responsive video platform showcasing FACTLENS - an AI-powered misinformation radar by Strategic Designers.

## 🎯 Features

- **YouTube-like Video Player** with custom controls
- **Responsive Design** optimized for all devices
- **FACTLENS Showcase** featuring AI-powered misinformation detection
- **Modern UI/UX** with clean, professional design
- **Custom Video Controls** with volume, seek, and fullscreen support

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Vite** for fast builds and development
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Git LFS** for large video file management

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sathishdusharla/SD.git
cd SD

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for easy deployment on Netlify:

1. **Connect to Netlify**: Link your GitHub repository to Netlify
2. **Build Settings**: 
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Environment**: Node.js 18+
4. **Auto-deploy**: Enabled on push to main branch

### Netlify Configuration

The project includes:
- `netlify.toml` for build and redirect configuration
- `public/_redirects` for client-side routing support
- Optimized build settings in `vite.config.ts`

## 🎥 FACTLENS Project

FACTLENS is an AI-powered misinformation radar that:
- Detects misinformation in real-time
- Provides transparent explanations with verifiable sources
- Assigns trust scores using Google BigQuery analytics
- Features a community-driven verification system
- Available as both web app and Chrome extension

Built with Google's ecosystem: Gemini API, Firebase, BigQuery, and more.

## 👨‍💻 Author

**Sathish Dusharla**  
Strategic Designers

## 📄 License

This project is private and proprietary to Strategic Designers.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
