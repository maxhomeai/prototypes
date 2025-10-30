/**
 * Sidenav Component
 *
 * A reusable side navigation component with logo, navigation items, and user profile.
 *
 * Props:
 * - activeItem: (string) Currently active navigation item
 * - notificationCount: (number) Badge count for notifications
 * - userName: (string) Display name for user
 * - userRole: (string) User's role/title
 * - userInitials: (string) Initials for avatar
 */

(function() {
  const { useState } = React;

  function Sidenav({
    activeItem = 'Home',
    notificationCount = 0,
    userName = 'User',
    userRole = 'Agent',
    userInitials = 'U'
  }) {
    const [isUserMenuExpanded, setIsUserMenuExpanded] = useState(false);

    // Navigation items configuration
    const navItems = [
      { id: 'Home', label: 'Home', icon: 'home' },
      { id: 'Notifications', label: 'Notifications', icon: 'bell', badge: notificationCount },
      { id: 'Transactions', label: 'Transactions', icon: 'arrows' },
      { id: 'Tasks', label: 'Tasks', icon: 'clipboard' },
      { id: 'Templates', label: 'Templates', icon: 'folder' }
    ];

    // Icon mapping with inline SVG
    const icons = {
      home: React.createElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
        React.createElement('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' }),
        React.createElement('polyline', { points: '9 22 9 12 15 12 15 22' })
      ),
      bell: React.createElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
        React.createElement('path', { d: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9' }),
        React.createElement('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' })
      ),
      arrows: React.createElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
        React.createElement('path', { d: 'M7 16L3 12L7 8' }),
        React.createElement('path', { d: 'M21 12H3' }),
        React.createElement('path', { d: 'M17 8L21 12L17 16' })
      ),
      clipboard: React.createElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
        React.createElement('rect', { x: '8', y: '2', width: '8', height: '4', rx: '1', ry: '1' }),
        React.createElement('path', { d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' }),
        React.createElement('path', { d: 'M9 14l2 2 4-4' })
      ),
      folder: React.createElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
        React.createElement('path', { d: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' })
      ),
      chevronDown: React.createElement('svg', {
        width: 16,
        height: 16,
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 2,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
        React.createElement('polyline', { points: '6 9 12 15 18 9' })
      )
    };

    return React.createElement('div',
      {
        className: 'fixed left-0 top-0 h-screen bg-white border-r border-gray-200 flex flex-col',
        style: { width: '256px', zIndex: 50 }
      },
      // Logo Section
      React.createElement('div',
        { className: 'px-4 pt-6 pb-8' },
        React.createElement('div', {
          className: 'flex items-center gap-3'
        },
          // Client Logo (Berkshire Hathaway)
          React.createElement('img', {
            src: 'https://storage.googleapis.com/maxhome-public/bwLogo-4502fd24-27cf-409f-81ff-cc6424c445b6.jpeg',
            alt: 'Berkshire Hathaway',
            className: 'h-12 object-contain'
          }),
          // Divider
          React.createElement('div', {
            className: 'h-10 w-px bg-gray-200'
          }),
          // MaxHome Logo
          React.createElement('img', {
            src: '../shared/assets/images/maxhome.svg',
            alt: 'MaxHome',
            className: 'h-7'
          })
        )
      ),
      // Navigation Items
      React.createElement('nav',
        { className: 'flex-1 px-4 space-y-1' },
        navItems.map(item => {
          const isActive = item.id === activeItem;
          return React.createElement('button',
            {
              key: item.id,
              className: `
                  w-full flex items-center justify-between px-4 py-3 rounded-lg
                  transition-colors text-left
                  ${isActive
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `
            },
            React.createElement('div',
              { className: 'flex items-center gap-3' },
              React.createElement('span',
                { className: isActive ? 'text-blue-600' : 'text-gray-700' },
                icons[item.icon]
              ),
              React.createElement('span',
                { className: 'text-sm' },
                item.label
              )
            ),
            // Notification Badge
            item.badge > 0 && React.createElement('span',
              { className: 'flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs font-semibold rounded-full' },
              item.badge
            )
          );
        })
      ),
      // User Profile Section
      React.createElement('div',
        { className: 'px-4 pb-6' },
        React.createElement('button',
          {
            onClick: () => setIsUserMenuExpanded(!isUserMenuExpanded),
            className: 'w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors'
          },
          // Avatar
          React.createElement('div',
            { className: 'flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium' },
            userInitials
          ),
          // User Info
          React.createElement('div',
            { className: 'flex-1 text-left' },
            React.createElement('div',
              { className: 'text-sm font-medium text-gray-900' },
              userName
            ),
            React.createElement('div',
              { className: 'text-xs text-gray-500' },
              userRole
            )
          ),
          // Expand Icon
          React.createElement('span',
            { className: 'text-gray-400' },
            icons.chevronDown
          )
        )
      )
    );
  }

  // Export component globally
  window.Sidenav = Sidenav;
})();
