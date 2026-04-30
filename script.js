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
