declare module 'react-lazy-load-image-component' {
    import * as React from 'react';
  
    export interface LazyLoadImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
      effect?: 'blur' | 'opacity' | 'black-and-white';
      visibleByDefault?: boolean;
      afterLoad?: () => void;
      beforeLoad?: () => void;
      delayMethod?: 'debounce' | 'throttle';
      delayTime?: number;
      placeholderSrc?: string;
      threshold?: number;
      wrapperClassName?: string;
    }
  
    export const LazyLoadImage: React.FC<LazyLoadImageProps>;
  }
  