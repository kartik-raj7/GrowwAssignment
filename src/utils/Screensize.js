export const getScreenSize = () => {
    const width = window.innerWidth;
    if (width < 576) {
      return 'mobile';
    } else if (width < 768) {
      return 'tablet'; 
    } else {
      return 'desktop'; 
    }
  };