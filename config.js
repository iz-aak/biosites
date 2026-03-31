const CONFIG = {

  // ─── YOUR AVATAR ─────────────────────────────────────────
  // Paste your CDN image URL here
  avatar: "",

  // ─── LAST.FM ──────────────────────────────────────────────
  // Get a free API key at: https://www.last.fm/api/account/create
  lastfm: {
    username: "izaak77",
    apiKey: "YOUR_LASTFM_API_KEY"
  },

  // ─── DISCORD (LANYARD) ────────────────────────────────────
  discord: {
    userId: "1329547310887207025",
    username: "uh.izaak"
  },

  // ─── GITHUB ───────────────────────────────────────────────
  github: {
    username: "iz-aak"
  },

  // ─── REDDIT ───────────────────────────────────────────────
  reddit: {
    username: "ssprix"
  },

  // ─── CATS ─────────────────────────────────────────────────
  // Add as many as you want: { url: "...", name: "..." }
  cats: [
    // { url: "https://your-cdn.com/cat1.jpg", name: "Mittens" },
    // { url: "https://your-cdn.com/cat2.jpg", name: "Shadow" },
  ],

  // ─── PROJECTS ─────────────────────────────────────────────
  // status: "live" | "dev"
  // youreHere: true  → shows "You're already here" instead of a link
  projects: [
    {
      name: "FluxTV",
      description: "3,000,000+ free movies and shows",
      status: "live",
      url: "https://fluxtv.qzz.io",
      statusUrl: "https://rentry.co/fluxtv",
      statusLabel: "Status"
    },
    {
      name: "FluxusTV",
      description: "Legacy FluxTV",
      status: "live",
      url: "https://fluxustv.vercel.app",
      statusUrl: "https://rentry.co/fluxtv",
      statusLabel: "Status"
    },
    {
      name: "VyrxAI",
      description: "Web development for VyrxAI",
      status: "live",
      url: "https://vyrxai.k.vu",
      secondaryUrl: "https://vyrxai.k.vu/license",
      secondaryLabel: "License"
    },
    {
      name: "This Site",
      description: "The page you're on right now",
      status: "live",
      youreHere: true
    },
    {
      name: "Temp Email",
      description: "Disposable email address",
      status: "live",
      url: "https://tempmails.qzz.io"
    },
    {
      name: "Magnet Downloader",
      description: "Download from .torrent file or magnet link",
      status: "dev"
    },
    {
      name: "Torrent Index",
      description: "Scrapes The Pirate Bay and 1337x for magnet links/torrents",
      status: "dev"
    },
    {
      name: "ProxyK",
      description: "Free web proxy running from the Reflect4 API",
      status: "dev"
    }
  ]

};
