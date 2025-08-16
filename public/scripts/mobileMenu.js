/**
 * Mobile Sidebar Menu - Works across all pages
 */

// Initialize mobile sidebar functionality
function initMobileSidebar() {
  const mobileMenuButton = document.getElementById('mobile-menu-toggle');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileClose = document.getElementById('mobile-close');
  
  // Only proceed if elements exist
  if (!mobileMenuButton || !mobileOverlay || !mobileSidebar || !mobileClose) {
    return;
  }
  
  // Open sidebar
  function openSidebar() {
    mobileOverlay.classList.remove('hidden');
    mobileSidebar.classList.remove('-translate-x-full');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  
  // Close sidebar
  function closeSidebar() {
    mobileOverlay.classList.add('hidden');
    mobileSidebar.classList.add('-translate-x-full');
    document.body.style.overflow = ''; // Restore scrolling
  }
  
  // Remove existing event listeners to prevent duplicates
  const newMobileMenuButton = mobileMenuButton.cloneNode(true);
  const newMobileClose = mobileClose.cloneNode(true);
  const newMobileOverlay = mobileOverlay.cloneNode(true);
  
  mobileMenuButton.parentNode.replaceChild(newMobileMenuButton, mobileMenuButton);
  mobileClose.parentNode.replaceChild(newMobileClose, mobileClose);
  mobileOverlay.parentNode.replaceChild(newMobileOverlay, mobileOverlay);
  
  // Add event listeners
  newMobileMenuButton.addEventListener('click', openSidebar);
  newMobileClose.addEventListener('click', closeSidebar);
  newMobileOverlay.addEventListener('click', closeSidebar);
  
  // Close sidebar on escape key (remove existing listener first)
  document.removeEventListener('keydown', handleEscapeKey);
  document.addEventListener('keydown', handleEscapeKey);
  
  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initMobileSidebar);

// Re-initialize after Astro page transitions
document.addEventListener('astro:page-load', initMobileSidebar);

// Also initialize immediately in case DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileSidebar);
} else {
  initMobileSidebar();
}