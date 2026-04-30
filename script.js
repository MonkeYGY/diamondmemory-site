// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('active');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.remove('active');
}

// Check login state on page load
window.addEventListener('DOMContentLoaded', function() {
  const DOWNLOADS = {
    mac: '',
    win: ''
  };

  const COMMUNITY = {
    douyinUrl: '',
    groupHelpUrl: ''
  };

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  // Download buttons
  document.getElementById('mac-download').addEventListener('click', function(e) {
    e.preventDefault();
    if (!DOWNLOADS.mac) {
      alert('macOS 下载链接尚未配置，请稍后再试。');
      return;
    }
    window.open(DOWNLOADS.mac, '_blank', 'noopener,noreferrer');
  });
  
  document.getElementById('win-download').addEventListener('click', function(e) {
    e.preventDefault();
    if (!DOWNLOADS.win) {
      alert('Windows 下载链接尚未配置，请稍后再试。');
      return;
    }
    window.open(DOWNLOADS.win, '_blank', 'noopener,noreferrer');
  });

  const douyinLink = document.getElementById('douyin-link');
  if (douyinLink) {
    douyinLink.addEventListener('click', function(e) {
      if (!COMMUNITY.douyinUrl) {
        e.preventDefault();
        alert('抖音链接尚未配置。');
        return;
      }
      douyinLink.href = COMMUNITY.douyinUrl;
    });
  }

  const groupLink = document.getElementById('group-link');
  if (groupLink) {
    groupLink.addEventListener('click', function(e) {
      if (!COMMUNITY.groupHelpUrl) {
        e.preventDefault();
        alert('请在抖音私信发送关键词“进群”，获取交流群入口。');
        return;
      }
      groupLink.href = COMMUNITY.groupHelpUrl;
    });
  }
  
  document.querySelectorAll('.screenshot-media').forEach(container => {
    const img = container.querySelector('img');
    if (img) {
      img.addEventListener('error', function() {
        container.classList.add('is-missing');
      });
      if (!img.complete || img.naturalWidth === 0) {
        img.loading = 'lazy';
      }
    }

    container.addEventListener('click', function() {
      const src = container.getAttribute('data-lightbox-src') || '';
      const alt = container.getAttribute('data-lightbox-alt') || '';
      if (!src || !lightbox || !lightboxImg) return;
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.classList.add('active');
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Feature cards click to show details
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});
