import ReactGA from 'react-ga';

// Initialize Google Analytics
ReactGA.initialize('UA-XXXXXXXX-X');

// Track page views
ReactGA.pageview(window.location.pathname + window.location.search);

// Track events
export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  });
};

// Track exceptions
export const trackException = (description, fatal = false) => {
  ReactGA.exception({
    description: description,
    fatal: fatal
  });
};